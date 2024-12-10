import Hero from "./components/Hero/Hero";
import { Projects } from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";

export default function Home() {
	return (
		<main>
			<Hero />
			<Skills />
			<Projects />
		</main>
	);
}
