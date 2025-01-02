import { Geist_Mono, Montserrat, Nunito } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
	subsets: ["latin"],
	weights: ["400", "500"],
	variable: "--font-body",
});

const geistMono = Geist_Mono({
	subsets: ["latin"],
	weights: ["400", "500"],
	variable: "--font-geistMono",
});

const nunito = Nunito({
	subsets: ["latin"],
	weights: ["600", "700"],
	variable: "--font-heading",
});

export const metadata = {
	title: "Oak",
	description: "Portfolio of Oak",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body
				className={`${montserrat.variable} ${nunito.variable} ${geistMono.variable} antialiased`}>
				{children}
			</body>
		</html>
	);
}
