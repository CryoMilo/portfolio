import localFont from "next/font/local";
import "./globals.css";
import FloatingMilo from "./components/ui/floating-milo";

// Self-hosted (Latin variable fonts from Google Fonts) so builds never fetch from Google; that fetch crashed the Netlify build.
const montserrat = localFont({
	src: "./fonts/montserrat-latin.woff2",
	weight: "100 900",
	variable: "--font-body",
});

const inter = localFont({
	src: "./fonts/inter-latin.woff2",
	weight: "600 700",
	variable: "--font-heading",
});

export const metadata = {
	title: "Oak",
	description: "Portfolio of Oak",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<script
					dangerouslySetInnerHTML={{
						__html: `
							try {
								if (sessionStorage.getItem("heroAnimationPlayed")) {
									document.documentElement.classList.add("skip-splash");
								}
							} catch (e) {}
						`,
					}}
				/>
			</head>
			<body className={`${montserrat.variable} ${inter.variable} antialiased`}>
				{children}
				<FloatingMilo />
			</body>
		</html>
	);
}
