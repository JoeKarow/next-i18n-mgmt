import {
	Navbar,
	Group,
	ScrollArea,
	createStyles,
	Collapse,
	Text,
	UnstyledButton,
	Box,
} from '@mantine/core'
import { useState } from 'react'
import { Icon } from '@iconify/react'
import { trpc } from '../utils/trpc'

const mockdata = [
	{ label: 'Dashboard' },
	{
		label: 'Market news',
		initiallyOpened: true,
		links: [
			{ label: 'Overview', link: '/' },
			{ label: 'Forecasts', link: '/' },
			{ label: 'Outlook', link: '/' },
			{ label: 'Real time', link: '/' },
		],
	},
	{
		label: 'Releases',

		links: [
			{ label: 'Upcoming releases', link: '/' },
			{ label: 'Previous releases', link: '/' },
			{ label: 'Releases schedule', link: '/' },
		],
	},
	{ label: 'Analytics' },
	{ label: 'Contracts' },
	{ label: 'Settings' },
	{
		label: 'Security',

		links: [
			{ label: 'Enable 2FA', link: '/' },
			{ label: 'Change password', link: '/' },
			{ label: 'Recovery codes', link: '/' },
		],
	},
]

const useStyles = createStyles((theme) => ({
	navbar: {
		backgroundColor:
			theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
		// paddingBottom: 0,
		margin: 'none',
	},

	header: {
		padding: theme.spacing.md,
		paddingTop: 0,
		marginLeft: -theme.spacing.md,
		marginRight: -theme.spacing.md,
		color: theme.colorScheme === 'dark' ? theme.white : theme.black,
		borderBottom: `1px solid ${
			theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
		}`,
	},

	links: {
		marginLeft: -theme.spacing.md,
		marginRight: -theme.spacing.md,
	},

	linksInner: {
		paddingTop: theme.spacing.xl,
		paddingBottom: theme.spacing.xl,
	},

	footer: {
		marginLeft: -theme.spacing.md,
		marginRight: -theme.spacing.md,
		borderTop: `1px solid ${
			theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
		}`,
	},
	control: {
		fontWeight: 500,
		display: 'block',
		width: '100%',
		padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
		color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
		fontSize: theme.fontSizes.sm,

		'&:hover': {
			backgroundColor:
				theme.colorScheme === 'dark'
					? theme.colors.dark[7]
					: theme.colors.gray[0],
			color: theme.colorScheme === 'dark' ? theme.white : theme.black,
		},
	},

	link: {
		fontWeight: 500,
		display: 'block',
		textDecoration: 'none',
		padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
		paddingLeft: 31,
		marginLeft: 30,
		fontSize: theme.fontSizes.sm,
		color:
			theme.colorScheme === 'dark'
				? theme.colors.dark[0]
				: theme.colors.gray[7],
		borderLeft: `1px solid ${
			theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
		}`,

		'&:hover': {
			backgroundColor:
				theme.colorScheme === 'dark'
					? theme.colors.dark[7]
					: theme.colors.gray[0],
			color: theme.colorScheme === 'dark' ? theme.white : theme.black,
		},
	},

	chevron: {
		transition: 'transform 200ms ease',
	},
}))
interface LinksGroupProps {
	label: string
	initiallyOpened?: boolean
	links?: { label: string; link: string }[]
}

function LinksGroup({ label, initiallyOpened, links }: LinksGroupProps) {
	const { classes, theme } = useStyles()
	const hasLinks = Array.isArray(links)
	const [opened, setOpened] = useState(initiallyOpened || false)
	const items = (hasLinks ? links : []).map((link) => (
		<Text<'a'>
			component='a'
			className={classes.link}
			href={link.link}
			key={link.label}
			onClick={(event) => event.preventDefault()}
		>
			{link.label}
		</Text>
	))

	return (
		<>
			<UnstyledButton
				onClick={() => setOpened((o) => !o)}
				className={classes.control}
			>
				<Group position='apart' spacing={0}>
					<Box sx={{ display: 'flex', alignItems: 'center' }}>
						{/* <ThemeIcon variant='light' size={30}>
							<Icon size={18} />
						</ThemeIcon> */}
						<Box ml='md'>{label}</Box>
					</Box>
					{hasLinks && (
						<Icon
							icon='tabler:chevron-right'
							className={classes.chevron}
							// size='14'
							stroke='1.5'
							style={{
								transform: opened
									? `rotate(${theme.dir === 'rtl' ? -90 : 90}deg)`
									: 'none',
							}}
						/>
					)}
				</Group>
			</UnstyledButton>
			{hasLinks ? <Collapse in={opened}>{items}</Collapse> : null}
		</>
	)
}

export function SideNavBar() {
	const { classes } = useStyles()

	// const { data } = trpc.useQuery(['category.getAll'])
	const data = mockdata
	const links = data.map((item) => <LinksGroup {...item} key={item.label} />)

	return (
		<Navbar
			fixed={false}
			width={{ base: 300 }}
			p='md'
			className={classes.navbar}
		>
			<Navbar.Section grow className={classes.links} component={ScrollArea}>
				<div className={classes.linksInner}>{links}</div>
			</Navbar.Section>
		</Navbar>
	)
}
