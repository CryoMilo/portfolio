import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import { createClient } from "@/app/utils/supabase/server";

export const Projects = async () => {
	let projects;

	const supabase = await createClient();
	const { data } = await supabase.from("projects").select();
	projects = data;

	return (
		<div id="projects" className="container my-24">
			<h3 className="text-4xl pb-10 font-body">
				My <span className="text-primary-light">Latest</span> Works
			</h3>
			<BentoGrid>
				{projects?.map((project, index) => (
					<div key={index}>
						<BentoGridItem
							githubLink={project.githubLink}
							title={project.project_name}
							description={project.description}
							videoSrc={project.splash_video.url}
							documentId={project.document_id}
							images={project.mockup_images}
							techList={project.tech_list}
						/>
						<div className="flex items-center justify-center gap-4 last:hidden">
							<div className="border-b-2 border-primary-light w-40"></div>
						</div>
					</div>
				))}
			</BentoGrid>
		</div>
	);
};
