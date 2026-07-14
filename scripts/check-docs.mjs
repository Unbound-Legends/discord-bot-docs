import { access, readdir, readFile } from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const docsRoot = path.join(root, 'src/content/docs');
const assetsRoot = path.join(root, 'src/assets');
const sourceExtensions = new Set(['.astro', '.css', '.js', '.jsx', '.json', '.md', '.mdx', '.mjs', '.scss', '.ts', '.tsx']);

async function walkFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walkFiles(entryPath)));
    } else {
      files.push(entryPath);
    }
  }

  return files;
}

function normalizeRoute(route) {
  const normalized = `/${route.replace(/^\/+|\/+$/g, '')}`;
  return normalized === '/docs/index' ? '/docs' : normalized.replace(/\/index$/, '') || '/';
}

function getFrontmatter(content) {
  if (!content.startsWith('---\n')) return '';
  const end = content.indexOf('\n---', 4);
  return end === -1 ? '' : content.slice(4, end);
}

function getDocumentRoute(file, content) {
  const slug = getFrontmatter(content).match(/^slug:\s*['"]?([^'"\n]+)['"]?\s*$/m)?.[1];
  if (slug) return normalizeRoute(`/docs/${slug}`);

  const relative = path.relative(docsRoot, file).replace(/\\/g, '/').replace(/\.(?:md|mdx)$/, '');
  return normalizeRoute(`/docs/${relative}`);
}

function slugifyHeading(heading) {
  return heading
    .replace(/\[([^\]]+)]\([^)]+\)/g, '$1')
    .replace(/<[^>]+>/g, '')
    .replace(/[`*_~]/g, '')
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

function getHeadingIds(content) {
  const ids = new Set(['_top']);
  const counts = new Map();

  for (const match of content.matchAll(/^#{1,6}\s+(.+)$/gm)) {
    const customId = match[1].match(/\s+\{#([^}]+)}\s*$/)?.[1];
    const baseId = customId ?? slugifyHeading(match[1].replace(/\s+\{#[^}]+}\s*$/, ''));
    if (!baseId) continue;

    const count = counts.get(baseId) ?? 0;
    ids.add(count === 0 ? baseId : `${baseId}-${count}`);
    counts.set(baseId, count + 1);
  }

  return ids;
}

function lineNumber(content, index) {
  return content.slice(0, index).split('\n').length;
}

function getLinks(content) {
  const links = [];

  for (const match of content.matchAll(/(!?)\[[^\]]*]\(([^)\s]+)(?:\s+['"][^'"]*['"])?\)/g)) {
    if (!match[1]) links.push({ destination: match[2], index: match.index });
  }

  for (const match of content.matchAll(/\bhref\s*=\s*['"]([^'"]+)['"]/g)) {
    links.push({ destination: match[1], index: match.index });
  }

  return links;
}

function getMarkdownImages(content) {
  return [...content.matchAll(/!\[([^\]]*)]\(([^)\s]+)(?:\s+['"][^'"]*['"])?\)/g)].map(match => ({
    alt: match[1],
    destination: match[2],
    index: match.index,
  }));
}

function resolveDocumentLink(currentRoute, destination) {
  if (/^(?:[a-z]+:)?\/\//i.test(destination) || /^(?:mailto|tel):/i.test(destination)) return null;

  const url = new URL(destination, `https://docs.local${currentRoute}`);
  if (!url.pathname.startsWith('/docs')) return null;

  const route = normalizeRoute(decodeURIComponent(url.pathname).replace(/\.(?:md|mdx|html)$/, ''));
  return { route, anchor: decodeURIComponent(url.hash.slice(1)) };
}

async function fileExists(file) {
  try {
    await access(file);
    return true;
  } catch {
    return false;
  }
}

function resolveAssetReference(sourceFile, reference) {
  const cleanReference = reference.split(/[?#]/, 1)[0];
  if (!cleanReference || /^(?:[a-z]+:)?\/\//i.test(cleanReference) || cleanReference.startsWith('data:')) return null;
  if (cleanReference.startsWith('/')) return path.join(root, 'public', cleanReference);
  return path.resolve(path.dirname(sourceFile), cleanReference);
}

const docFiles = (await walkFiles(docsRoot)).filter(file => ['.md', '.mdx'].includes(path.extname(file)));
const assetFiles = await walkFiles(assetsRoot);
const sourceFiles = (await walkFiles(path.join(root, 'src'))).filter(file => sourceExtensions.has(path.extname(file)));
sourceFiles.push(path.join(root, 'astro.config.mjs'));

const documents = [];
const documentsByRoute = new Map();
const errors = [];

for (const file of docFiles) {
  const content = await readFile(file, 'utf8');
  const route = getDocumentRoute(file, content);
  const document = { content, file, route, headingIds: getHeadingIds(content) };

  if (documentsByRoute.has(route)) {
    errors.push(`${path.relative(root, file)}: duplicate documentation route ${route}`);
  }

  documents.push(document);
  documentsByRoute.set(route, document);
}

for (const document of documents) {
  const frontmatter = getFrontmatter(document.content);
  const relativeFile = path.relative(root, document.file).replace(/\\/g, '/');

  if (relativeFile.startsWith('src/content/docs/rpg-sessions/')) {
    const requiredMetadata = ['pageType', 'audience', 'surface', 'systems', 'appRoutes', 'verifiedAt', 'verifiedContexts'];

    for (const field of requiredMetadata) {
      if (!new RegExp(`^${field}:`, 'm').test(frontmatter)) {
        errors.push(`${relativeFile}: missing required RPG Sessions metadata: ${field}`);
      }
    }

    const verifiedAt = frontmatter.match(/^verifiedAt:\s*['"]?(\d{4}-\d{2}-\d{2})['"]?\s*$/m)?.[1];
    if (verifiedAt && Number.isNaN(Date.parse(`${verifiedAt}T00:00:00Z`))) {
      errors.push(`${relativeFile}: verifiedAt is not a valid calendar date: ${verifiedAt}`);
    }
  }

  const heroImage = frontmatter.match(/^hero:\s*\n[\s\S]*?^  image:\s*\n((?:^    .*\n?)*)/m)?.[1];
  if (heroImage?.match(/^    file:/m) && !heroImage.match(/^    alt:\s*\S/m)) {
    errors.push(`${path.relative(root, document.file)}: hero image alt text is empty`);
  }

  for (const link of getLinks(document.content)) {
    const resolved = resolveDocumentLink(document.route, link.destination);
    if (!resolved) continue;

    const target = documentsByRoute.get(resolved.route);
    const location = `${path.relative(root, document.file)}:${lineNumber(document.content, link.index)}`;
    if (!target) {
      errors.push(`${location}: internal link does not resolve: ${link.destination}`);
    } else if (resolved.anchor && !target.headingIds.has(resolved.anchor)) {
      errors.push(`${location}: linked heading does not resolve: ${link.destination}`);
    }
  }

  for (const image of getMarkdownImages(document.content)) {
    if (!image.alt.trim()) {
      errors.push(`${path.relative(root, document.file)}:${lineNumber(document.content, image.index)}: image alt text is empty`);
    }

    const resolved = resolveAssetReference(document.file, image.destination);
    if (resolved && !(await fileExists(resolved))) {
      errors.push(
        `${path.relative(root, document.file)}:${lineNumber(document.content, image.index)}: image does not exist: ${image.destination}`,
      );
    }
  }

  const prohibited = [
    ['\u2014', 'em dash'],
    ['\u2013', 'en dash'],
    ['\u2018', 'curly apostrophe'],
    ['\u2019', 'curly apostrophe'],
    ['\u201c', 'curly quote'],
    ['\u201d', 'curly quote'],
    ['\u2192', 'Unicode arrow'],
    ['\u2190', 'Unicode arrow'],
    ['\u2026', 'ellipsis character'],
  ];

  for (const [character, label] of prohibited) {
    let index = document.content.indexOf(character);
    while (index !== -1) {
      errors.push(`${path.relative(root, document.file)}:${lineNumber(document.content, index)}: prohibited ${label}`);
      index = document.content.indexOf(character, index + 1);
    }
  }

  for (const marker of ['MAPS_IMAGE_TODO', 'RPG_SESSIONS_IMAGE_TODO', '~~~~']) {
    const index = document.content.indexOf(marker);
    if (index !== -1) {
      errors.push(`${path.relative(root, document.file)}:${lineNumber(document.content, index)}: unfinished marker ${marker}`);
    }
  }
}

const assetPaths = new Set(assetFiles.map(file => path.resolve(file)));
const referencedAssets = new Set();
const assetReferencePattern = /[A-Za-z0-9_@./-]+\.(?:avif|gif|jpe?g|png|svg|webp)/gi;

for (const sourceFile of sourceFiles) {
  const content = await readFile(sourceFile, 'utf8');
  for (const match of content.matchAll(assetReferencePattern)) {
    const resolved = resolveAssetReference(sourceFile, match[0]);
    if (resolved && assetPaths.has(path.resolve(resolved))) referencedAssets.add(path.resolve(resolved));
  }
}

for (const asset of assetPaths) {
  if (!referencedAssets.has(asset)) {
    errors.push(`${path.relative(root, asset)}: asset is not referenced`);
  }
}

errors.sort();

if (errors.length > 0) {
  console.error(`Documentation validation failed with ${errors.length} error${errors.length === 1 ? '' : 's'}:`);
  for (const error of errors) console.error(`- ${error}`);
  process.exitCode = 1;
} else {
  console.log(`Documentation validation passed for ${documents.length} pages and ${assetFiles.length} assets.`);
}
