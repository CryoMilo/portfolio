import DemoBtn from "./DemoBtn";
import ProjectHighlights from "./ProjectHighlights";
import { fetcher } from "@/app/api/fetcher";
import Image from "next/image";
import { formatImageData } from "@/app/components/utils/formatImageData";

const ProjectDetails = async ({ params }) => {
	const slug = (await params).slug;
	let projectData;

	try {
		const data = await fetcher(`/projects/${slug}`);
		projectData = data?.data;
	} catch (error) {
		console.error("Error fetching project:", error);
	}

	const mockupImgs = formatImageData(projectData.mockup_images);

	return (
		<section className="container pt-10">
			<div>
				<h1 className="text-4xl w-full xl:hidden">
					{projectData.project_name}
				</h1>
				<div className="md:hidden relative h-[400px]">
					<Image
						src={mockupImgs[0].url}
						alt={mockupImgs[0].name}
						width={mockupImgs[0].width * 0.7}
						height={mockupImgs[0].height * 0.7}
						className="absolute top-[12%] right-[50%] translate-x-[50%]"
					/>
					<Image
						src={mockupImgs[1].url}
						alt={mockupImgs[1].name}
						width={mockupImgs[1].width * 0.5}
						height={mockupImgs[1].height * 0.5}
						className="absolute top-[28%] right-[6%] "
					/>
					<Image
						src={mockupImgs[2].url}
						alt={mockupImgs[2].name}
						width={mockupImgs[2].width * 0.4}
						height={mockupImgs[2].height * 0.4}
						className="absolute top-[44%] right-[30%]"
					/>
				</div>
			</div>
			<div className="hidden md:block w-full h-[400px] border border-black rounded-md bg-white relative overflow-hidden">
				<h1 className="text-6xl w-[40%] px-5 hidden xl:block">
					{projectData.project_name}
				</h1>
				<ProjectHighlights images={projectData.image} />
			</div>
			<div className="flex justify-between items-start md:items-center py-5 flex-col-reverse md:flex-row gap-5">
				<a href={projectData.githubLink}>Github</a>
				<div className="flex gap-2">
					{projectData.techList.map((tech, index) => {
						const Icon = getTechSkillIcon(tech);
						return Icon ? (
							<div key={index} className="w-10 h-10">
								<Icon size="80%" />
							</div>
						) : null;
					})}
				</div>
			</div>
			<div className="flex flex-col-reverse md:grid md:grid-cols-2 mt-20 md:divide-x-2 relative">
				{/* Colors Section */}
				<div className="pb-64 pr-10">
					<p className="text-2xl font-semibold mb-4">Colors</p>
					<div className="flex gap-5 flex-wrap">
						{projectData.palette.map((color, index) => (
							<div key={index} className="flex flex-col items-center">
								<div
									className="w-20 h-20"
									style={{ backgroundColor: color.color }}></div>
								<p className="mt-2">{color.name}</p>
							</div>
						))}
					</div>
				</div>
				<article className="md:text-right">
					<p className="text-2xl font-semibold mb-4">About</p>
					<p className="md:pl-10 pb-20 md:pb-64">{projectData.description}</p>
				</article>
				<DemoBtn
					color={
						projectData.palette.find((color) => color.name === "Accent")
							?.color || "var(--color-primary-light)"
					}
					link={projectData.demoLink}
				/>
			</div>
		</section>
	);
};

export default ProjectDetails;
