// styled.d.ts
import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme {
		colors: {
			blue: string;
			teal: string;
			red: string;
			green: string;
			olive: string;
			yellow: string;
			yellow: string;
			orange: string;
			red: string;
			violet: string;
			purple: string;
			brown: string;
			pink: string;
			grey: string;
			charcoal: string;
			black: string;
			white: string;
			primary: string;
			secondary: string;
			accent: string;
			background: string;
			text: {
				primary: string;
				secondary: string;
				accent: string;
			};
		};
		typography: {
			fontFamily: string;
			fontSize: {
				h1: string;
				h2: string;
				h3: string;
				h4: string;
				body: string;
				small: string;
			};
			fontWeight: {
				light: number;
				regular: number;
				medium: number;
				bold: number;
			};
			lineHeight: {
				body: string;
				heading: string;
			};
		};
		spacing: {
			xs: string;
			sm: string;
			md: string;
			lg: string;
			xl: string;
		};
		breakpoints: {
			initial: string;
			mobile: string;
			tablet: string;
			laptop: string;
			desktop: string;
			tv: string;
		};
		shadows: {
			light: string;
			medium: string;
			large: string;
		};

		input: {
			background: string;
			border: string;
			borderRadius: string;
			padding: string;
			fontSize: string;
			fontWeight: string | number;
			focus: {
				border: string;
				outline: string;
				boxShadow: string;
			};
		};
		card: {
			background: string;
			borderRadius: string;
			boxShadow: string;
			padding: string;
			hover: {
				boxShadow: string;
			};
		};
		badge: {
			background: string;
			color: string;
			padding: string;
			borderRadius: string;
			fontSize: string;
			fontWeight: string | number;
		};
	}
}