import { DefaultMantineColor, Tuple } from '@mantine/core'

type CustomColors = 'dark'

declare module '@mantine/core' {
	export interface MantineThemeColorsOverride {
		colors: Record<CustomColors | DefaultMantineColor, Tuple<string, 10>>
	}
}
