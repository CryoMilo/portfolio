import { fetcher } from "@/app/api/fetcher";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import { items } from "./projectData";

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
				{items.map((item, i) => (
					<BentoGridItem
						key={i}
						title={item.title}
						description={item.description}
						videoSrc={item.videoSrc}
						images={item.images}
						className={item.className}
					/>
				))}
			</BentoGrid>
		</div>
	);
};
