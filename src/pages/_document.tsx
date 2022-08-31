import Document, { DocumentContext } from 'next/document'
import { ServerStyles, createStylesServer } from '@mantine/next'
import { mantineCache } from '~/styles'

// optional: you can provide your cache as a first argument in createStylesServer function
const stylesServer = createStylesServer(mantineCache)

export default class _Document extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const initialProps = await Document.getInitialProps(ctx)

		// Add your app specific logic here

		return {
			...initialProps,
			styles: [
				initialProps.styles,
				<ServerStyles
					html={initialProps.html}
					server={stylesServer}
					key='styles'
				/>,
			],
		}
	}
}
