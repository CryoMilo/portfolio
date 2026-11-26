import { myData } from "@/app/lib/myData";

const About = () => {
	const paragraphs = myData.aboutme
		.split(/\n\s*\n/)
		.map((p) => p.trim())
		.filter(Boolean);

	return (
		<section id="about" className="container my-24 scroll-mt-8">
			<h2 className="text-4xl pb-10 font-body">
				About <span className="text-primary-light">Me</span>
			</h2>
			<div className="max-w-3xl space-y-5 text-base md:text-lg leading-relaxed">
				{paragraphs.map((p, i) => (
					<p key={i}>{p}</p>
				))}
			</div>
		</section>
	);
};

export default About;
