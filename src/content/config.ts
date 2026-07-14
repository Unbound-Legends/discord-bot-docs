import { defineCollection, z } from 'astro:content';
import { docsSchema } from '@astrojs/starlight/schema';

const websiteDocMetadata = z.object({
	pageType: z.enum(['landing', 'guide', 'reference', 'troubleshooting']).optional(),
	audience: z.array(z.enum(['player', 'gm', 'sheet-builder', 'developer'])).optional(),
	surface: z
		.enum([
			'home',
			'library',
			'character-sheet',
			'vehicle-sheet',
			'games',
			'game-table',
			'data-library',
			'dice',
			'account',
			'cross-site',
			'reference',
		])
		.optional(),
	systems: z.array(z.enum(['all', 'genesys', 'star-wars'])).optional(),
	appRoutes: z.array(z.string().min(1)).optional(),
	requirements: z
		.object({
			signedIn: z.boolean().optional(),
			role: z.enum(['member', 'gm']).optional(),
		})
		.optional(),
	featureKeys: z.array(z.string().min(1)).optional(),
	verifiedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).optional(),
	verifiedContexts: z
		.array(z.enum(['source-reviewed', 'signed-out', 'signed-in', 'player', 'gm', 'admin', 'desktop', 'mobile']))
		.optional(),
});

export const collections = {
	docs: defineCollection({ schema: docsSchema({ extend: websiteDocMetadata }) }),
};
