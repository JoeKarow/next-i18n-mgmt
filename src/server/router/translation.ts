import { createRouter } from './context'
import { z } from 'zod'

export const translationRouter = createRouter().query('getAll', {
	async resolve({ ctx }) {
		return await ctx.prisma.translation.findMany()
	},
})
