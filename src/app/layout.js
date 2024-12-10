import { Geist_Mono, Montserrat, Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });
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
				<Navbar />
				{children}
			</body>
		</html>
	);
}
