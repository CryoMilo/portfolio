import DemoBtn from "./DemoBtn";
import ProjectHighlights from "./ProjectHighlights";
import Image from "next/image";
import { getSingleProject } from "@/app/actions/project";
import { getTechSkillIcon } from "@/app/components/utils/getTechSkills";
import { GithubOriginal } from "devicons-react";
import { FaChevronLeft, FaHome } from "react-icons/fa";
import Link from "next/link";
import { BsChevronLeft } from "react-icons/bs";

const ProjectDetails = async ({ params }) => {
	const { slug } = await params;

	const documentId = slug;

	const { projectData, error } = await getSingleProject(documentId);

	if (error) {
		console.error("Error fetching project:", error);
		return <p className="text-red-500">Failed to load project data.</p>;
	}

	const mockupImgs = projectData?.mockup_images;

	return (
		<section className="container pt-2">
			<Link href="/" className="cursor-pointer py-8 flex items-center gap-2">
				<FaHome size={20} />
				Home
			</Link>
			<div>
				<h1 className="text-4xl w-full xl:hidden">
					{projectData.project_name}
				</h1>
				<div className="md:hidden relative h-[400px] mb-32">
					{mockupImgs.map((img, index) => (
						<Image
							key={index}
							src={img.url}
							alt={img.url}
							width={img.width * 0.7}
							height={img.height * 0.7}
							className={`absolute ${
								index === 0
									? "top-[12%] right-[50%] translate-x-[50%]"
									: index === 1
									? "top-[28%] right-[6%]"
									: "top-[44%] right-[30%]"
							}`}
						/>
					))}
				</div>
			</div>
			<div className="hidden md:block w-full h-[400px] border-black border rounded-md bg-white relative overflow-hidden">
				<h1 className="text-6xl w-[40%] px-5 hidden xl:block">
					{projectData.project_name}
				</h1>
				<ProjectHighlights images={projectData.highlight_images} />
			</div>
			<div className="flex justify-between items-start md:items-center py-5 flex-col-reverse md:flex-row gap-5">
				<a
					href={projectData.github_link}
					className="flex items-center gap-2 bg-gray-200 px-2 py-1 rounded-full">
					<GithubOriginal size={30} className="inline" /> <span>Github</span>
				</a>
				<div className="flex gap-2">
					{projectData.tech_list.map((tech, index) => {
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
					link={projectData.demo_link}
				/>
			</div>
		</section>
	);
};

export default ProjectDetails;
