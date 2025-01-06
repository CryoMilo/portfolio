import { fetcher } from "@/app/api/fetcher";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import { formatImageData, formatImageUrl } from "../utils/formatImageData";

export const Projects = async () => {
	let projects;

	try {
		const data = await fetcher(`/projects`);
		projects = data?.data;
	} catch (error) {
		console.error("Error fetching project:", error);
	}

	return (
		<div id="projects" className="container my-24">
			<h3 className="text-4xl pb-10 font-body">
				My <span className="text-primary-light">Latest</span> Works
			</h3>
			<BentoGrid>
				{projects?.map((project, index) => (
					<>
						<BentoGridItem
							key={index}
							title={project.project_name}
							description={project.description}
							videoSrc={formatImageUrl(project.splash_video.url)}
							images={formatImageData(project.mockup_images)}
							documentId={project.documentId}
							className="lg:col-span-2 col-span-3"
						/>
						<BentoGridItem className="lg:col-span-1 hidden lg:block" />
					</>
				))}
			</BentoGrid>
		</div>
	);
};
