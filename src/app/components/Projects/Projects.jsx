import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import { myData } from "@/app/lib/myData";

export const Projects = () => {
	const projects = myData.projects;

	return (
		<div id="projects" className="container my-24">
			<h3 className="text-4xl pb-10 font-body">
				My <span className="text-primary-light">Latest</span> Works
			</h3>
			<BentoGrid>
				{projects?.map((project, index) => (
					<div key={index}>
						<BentoGridItem
							responsive={project.responsive}
							demoLink={project.demo_link}
							githubLink={project.github_link}
							title={project.project_name}
							intro_text={project.intro_text}
							videoSrc={project.splash_video.url}
							documentId={project.document_id}
							images={project.mockup_images}
							techList={project.tech_list}
						/>
						{/* Subtle separator between items, except the last one */}
						<div className="flex items-center justify-center gap-4 last:hidden mt-8">
							<div className="border-b-2 border-primary-light w-40"></div>
						</div>
					</div>
				))}
			</BentoGrid>
		</div>
	);
};
