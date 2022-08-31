import { createRouter } from './context'

export const categoryRouter = createRouter().query('getAll', {
	async resolve({ ctx }) {
		return await ctx.prisma.category.findMany()
	},
})
