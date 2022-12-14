import { createRouter } from './context'
import { z } from 'zod'

export const langRouter = createRouter().query('getAll', {
	async resolve({ ctx }) {
		return await ctx.prisma.language.findMany()
	},
})
