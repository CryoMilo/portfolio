import { fetcher } from "@/app/api/fetcher";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import { formatImageData, formatImageUrl } from "../utils/formatImageData";
import { projectData } from "./projectData";

export const Projects = async () => {
	// let projects;

	// try {
	// 	const data = await fetcher(`/projects`);
	// 	projects = data?.data;
	// } catch (error) {
	// 	console.error("Error fetching project:", error);
	// }

	return (
		<div id="projects" className="container my-24">
			<h3 className="text-4xl pb-10 font-body">
				My <span className="text-primary-light">Latest</span> Works
			</h3>
			<BentoGrid>
				{projectData?.map((project, index) => (
					<>
						<BentoGridItem
							githubLink={project.githubLink}
							key={index}
							title={project.project_name}
							description={project.description}
							videoSrc={project.splash_video.url}
							documentId={project.documentId}
							images={project.mockup_images}
							techList={project.techList}
						/>
						<div className="flex items-center justify-center gap-4 last:hidden">
							<div className="border-b-2 border-primary-light w-40"></div>
						</div>
					</>
				))}
			</BentoGrid>
		</div>
	);
};
