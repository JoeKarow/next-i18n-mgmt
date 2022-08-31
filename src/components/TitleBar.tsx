import { createStyles, Container, Group, Tabs, Title } from '@mantine/core'

import { Categories, Languages, Tags, Translations } from './tabs'

const useStyles = createStyles((theme) => ({
	header: {
		paddingTop: theme.spacing.sm,
		backgroundColor:
			theme.colorScheme === 'dark'
				? theme.colors.dark[6]
				: theme.colors.gray[0],
		borderBottom: `1px solid ${
			theme.colorScheme === 'dark' ? 'transparent' : theme.colors.gray[2]
		}`,
		// marginBottom: 120,
	},

	mainSection: {
		paddingBottom: theme.spacing.sm,
	},

	user: {
		color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
		padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
		borderRadius: theme.radius.sm,
		transition: 'background-color 100ms ease',

		'&:hover': {
			backgroundColor:
				theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
		},

		[theme.fn.smallerThan('xs')]: {
			display: 'none',
		},
	},

	burger: {
		[theme.fn.largerThan('xs')]: {
			display: 'none',
		},
	},

	userActive: {
		backgroundColor:
			theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
	},

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
	},
}))

export function TitleBar() {
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
		<div className={classes.header}>
			<Container className={classes.mainSection}>
				<Group position='apart'>
					<Title order={1}>Say what?</Title>

					{/* <Burger
						opened={opened}
						onClick={toggle}
						className={classes.burger}
						size='sm'
					/>

					<Menu
						width={260}
						position='bottom-end'
						transition='pop-top-right'
						onClose={() => setUserMenuOpened(false)}
						onOpen={() => setUserMenuOpened(true)}
					>
						<Menu.Target>
							<UnstyledButton
								className={cx(classes.user, {
									[classes.userActive]: userMenuOpened,
								})}
							>
								<Group spacing={7}>
									<Avatar
										src={user.image}
										alt={user.name}
										radius='xl'
										size={20}
									/>
									<Text weight={500} size='sm' sx={{ lineHeight: 1 }} mr={3}>
										{user.name}
									</Text>
									<IconChevronDown size={12} stroke={1.5} />
								</Group>
							</UnstyledButton>
						</Menu.Target>
						<Menu.Dropdown>
							<Menu.Item
								icon={
									<IconHeart
										size={14}
										color={theme.colors.red[6]}
										stroke={1.5}
									/>
								}
							>
								Liked posts
							</Menu.Item>
							<Menu.Item
								icon={
									<IconStar
										size={14}
										color={theme.colors.yellow[6]}
										stroke={1.5}
									/>
								}
							>
								Saved posts
							</Menu.Item>
							<Menu.Item
								icon={
									<IconMessage
										size={14}
										color={theme.colors.blue[6]}
										stroke={1.5}
									/>
								}
							>
								Your comments
							</Menu.Item>

							<Menu.Label>Settings</Menu.Label>
							<Menu.Item icon={<IconSettings size={14} stroke={1.5} />}>
								Account settings
							</Menu.Item>
							<Menu.Item icon={<IconSwitchHorizontal size={14} stroke={1.5} />}>
								Change account
							</Menu.Item>
							<Menu.Item icon={<IconLogout size={14} stroke={1.5} />}>
								Logout
							</Menu.Item>

							<Menu.Divider />

							<Menu.Label>Danger zone</Menu.Label>
							<Menu.Item icon={<IconPlayerPause size={14} stroke={1.5} />}>
								Pause subscription
							</Menu.Item>
							<Menu.Item
								color='red'
								icon={<IconTrash size={14} stroke={1.5} />}
							>
								Delete account
							</Menu.Item>
						</Menu.Dropdown>
					</Menu> */}
				</Group>
			</Container>
		</div>
	)
}
