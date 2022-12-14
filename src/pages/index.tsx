import type { NextPage } from 'next'
// import { trpc } from '../utils/trpc'
import { AppShell, createStyles, Container, Tabs } from '@mantine/core'
import Head from 'next/head'
import { TitleBar } from '../components'
import { Categories, Languages, Tags, Translations } from '~/components/tabs'

const useStyles = createStyles((theme) => ({
	tabs: {
		[theme.fn.smallerThan('sm')]: {
			display: 'none',
		},
	},

	tabsList: {
		borderBottom: '0 !important',
	},

	tab: {
		fontWeight: 500,
		height: 38,
		backgroundColor: 'transparent',

		'&:hover': {
			backgroundColor:
				theme.colorScheme === 'dark'
					? theme.colors.dark[5]
					: theme.colors.gray[1],
		},

		'&[data-active]': {
			backgroundColor:
				theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
			borderColor:
				theme.colorScheme === 'dark'
					? theme.colors.dark[7]
					: theme.colors.gray[2],
		},
	},
	panel: {
		backgroundColor:
			theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
		paddingTop: 10,
	},
}))

const Home: NextPage = () => {
	const { classes } = useStyles()
	const tabs = [
		{
			label: 'Languages',
			component: Languages,
		},
		{ label: 'Categories', component: Categories },
		{ label: 'Tags', component: Tags },
		{ label: 'Translations', component: Translations },
	]

	const items = tabs.map((tab) => (
		<Tabs.Tab value={tab.label} key={tab.label}>
			{tab.label}
		</Tabs.Tab>
	))
	const panels = tabs.map((tab) => {
		const PanelComponent = tab.component
		return (
			<Tabs.Panel value={tab.label} key={tab.label}>
				<PanelComponent />
			</Tabs.Panel>
		)
	})
	return (
		<>
			<Head>
				<title>Say what?</title>
				<meta name='description' content='Generated by create-t3-app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<AppShell
				header={<TitleBar />}
				// navbar={<SideNavBar />}
				fixed={false}
				padding='md'
			>
				<Tabs
					defaultValue={tabs[0].label}
					variant='outline'
					classNames={{
						root: classes.tabs,
						tabsList: classes.tabsList,
						tab: classes.tab,
						panel: classes.panel,
					}}
				>
					<Tabs.List>{items}</Tabs.List>
					{panels}
				</Tabs>
			</AppShell>
		</>
	)
}

export default Home
