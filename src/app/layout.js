import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import FloatingMilo from "./components/ui/floating-milo";

const montserrat = Montserrat({
	subsets: ["latin"],
	weights: ["400", "500"],
	variable: "--font-body",
});

const inter = Inter({
	subsets: ["latin"],
	weight: ["600", "700"],
	variable: "--font-heading",
});

export const metadata = {
	title: "Oak",
	description: "Portfolio of Oak",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${montserrat.variable} ${inter.variable} antialiased`}>
				{children}
				<FloatingMilo />
			</body>
		</html>
	);
}
