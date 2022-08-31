// src/server/router/index.ts
import { createRouter } from './context'
import superjson from 'superjson'

import { langRouter } from './lang'
import { categoryRouter } from './category'
import { tagRouter } from './tag'
import { translationRouter } from './translation'

export const appRouter = createRouter()
	.transformer(superjson)
	.merge('lang.', langRouter)
	.merge('category.', categoryRouter)
	.merge('tag.', tagRouter)
	.merge('translation.', translationRouter)

// export type definition of API
export type AppRouter = typeof appRouter
