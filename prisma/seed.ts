import { PrismaClient, Prisma } from '@prisma/client'
import { faker } from '@faker-js/faker'

const prisma = new PrismaClient()

const languagesUpsert: Prisma.LanguageUpsertArgs[] = [
	{
		where: {
			langCode: 'en-us',
		},
		update: {
			languageName: 'English - US',
			langCode: 'en-us',
		},
		create: {
			languageName: 'English - US',
			langCode: 'en-us',
		},
	},
	{
		where: {
			langCode: 'es-us',
		},
		update: {
			languageName: 'Spanish - US',
			langCode: 'es-us',
		},
		create: {
			languageName: 'Spanish - US',
			langCode: 'es-us',
		},
	},
]

const categoriesUpsert: Prisma.CategoryUpsertArgs[] = [
	{
		where: { category: 'CategoryOne' },
		update: { category: 'CategoryOne' },
		create: { category: 'CategoryOne' },
	},
	{
		where: { category: 'CategoryTwo' },
		update: { category: 'CategoryTwo' },
		create: { category: 'CategoryTwo' },
	},
	{
		where: { category: 'CategoryThree' },
		update: { category: 'CategoryThree' },
		create: { category: 'CategoryThree' },
	},
]

async function main() {
	console.log(`Start seeding ...`)
	for (const item of languagesUpsert) {
		const language = await prisma.language.upsert(item)
		console.log(
			`Created Language record: ${language.id} - ${language.languageName} (${language.langCode})`
		)
	}
	for (const item of categoriesUpsert) {
		const category = await prisma.category.upsert(item)
		console.log(
			`Created Category record: ${category.id} - ${category.category}`
		)
	}
	console.log(`Seeding finished.`)
}

main()
	.then(async () => {
		await prisma.$disconnect()
	})
	.catch(async (e) => {
		console.error(e)
		await prisma.$disconnect()
		process.exit(1)
	})
