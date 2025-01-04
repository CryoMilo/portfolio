import { fetcher } from "@/app/api/fetcher";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import { formatImageData, formatImageUrl } from "../utils/formatImageData";

export const Projects = async () => {
	let projects;

	try {
		const data = await fetcher(`/projects`);
		projects = data?.data;

		console.log("MY PROJECT LIST", projects);
	} catch (error) {
		console.error("Error fetching project:", error);
	}

	return (
		<div id="projects" className="container my-24">
			<h3 className="text-4xl pb-10 font-body">
				My <span className="text-primary-light">Latest</span> Works
			</h3>
			<BentoGrid>
				{projects?.map((item, i) => (
					<BentoGridItem
						key={i}
						title={item.project_name}
						description={item.description}
						videoSrc={formatImageUrl(item.splash_video.url)}
						images={formatImageData(item.mockup_images)}
						className="md:col-span-2"
					/>
				))}
			</BentoGrid>
		</div>
	);
};
