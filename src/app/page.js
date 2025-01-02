import Contact from "./components/Contact/Contact";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";

export default function Home() {
	return (
		<main>
			<Navbar />
			<Hero />
			<Skills />
			<Projects />
			<Contact />
		</main>
	);
}
