import DemoBtn from "./DemoBtn";
import ProjectHighlights from "./ProjectHighlights";
import { myData } from "@/app/lib/myData";
import { getTechSkillIcon } from "@/app/components/utils/getTechSkills";
import { GithubOriginal } from "devicons-react";
import { FaHome } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import Link from "next/link";

const ProjectDetails = async ({ params }) => {
	const { slug } = await params;

	const projectData = myData.projects.find((p) => p.document_id === slug);

	if (!projectData) {
		return <p className="text-red-500">Project not found.</p>;
	}

	const primaryColor =
		projectData.palette.find((color) => color.name === "Primary")?.color ||
		"var(--color-primary-light)";

	return (
		<section className="container pt-2">
			{/* Back to home */}
			<Link
				href="/"
				className="cursor-pointer py-6 flex items-center gap-2 text-muted hover:text-dark transition-colors w-fit">
				<FaHome size={18} />
				<span className="text-sm font-medium">Home</span>
			</Link>

			{/* Project name — shown on all viewports except xl (where the banner h1 shows it) */}
			<h1 className="text-3xl sm:text-4xl xl:hidden mb-5">
				{projectData.project_name}
			</h1>

			{/* ── Highlight banner — shown on ALL screen sizes ── */}
			<div className="w-full h-[280px] sm:h-[340px] md:h-[380px] lg:h-[420px] border border-black rounded-md bg-white relative overflow-hidden">
				<h1 className="text-5xl xl:text-6xl w-[40%] px-5 hidden xl:block pt-6 leading-tight">
					{projectData.project_name}
				</h1>
				<ProjectHighlights images={projectData.highlight_images} />
			</div>

			{/* ── GitHub + Demo (mobile only) + Tech stack ── */}
			<div className="flex justify-between items-start md:items-center py-5 flex-col-reverse md:flex-row gap-4">
				{/* Left: Github + Demo link side by side */}
				<div className="flex items-center gap-2 flex-wrap">
					{projectData.github_link && (
						<a
							href={projectData.github_link}
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-2 bg-gray-200 hover:bg-gray-300 transition-colors px-3 py-1.5 rounded-full text-sm">
							<GithubOriginal size={26} className="inline" />
							<span>Github</span>
						</a>
					)}
					{/* Demo button — mobile only, sits next to Github */}
					<a
						href={projectData.demo_link}
						target="_blank"
						rel="noopener noreferrer"
						className="md:hidden flex items-center gap-2 px-3 py-1.5 rounded-full text-sm text-white font-medium hover:opacity-90 transition-opacity"
						style={{ backgroundColor: primaryColor }}>
						<FaArrowUpRightFromSquare size={14} />
						<span>See Demo</span>
					</a>
				</div>

				{/* Right: Tech icons */}
				<div className="flex gap-2 flex-wrap">
					{projectData.tech_list.map((tech, index) => {
						const Icon = getTechSkillIcon(tech);
						return Icon ? (
							<div key={index} className="w-8 h-8 md:w-10 md:h-10">
								<Icon size="80%" />
							</div>
						) : null;
					})}
				</div>
			</div>

			{/* ── Colors + About + Demo Button (desktop only) ── */}
			<div className="flex flex-col-reverse md:grid md:grid-cols-2 mt-8 md:mt-16 md:divide-x-2 relative">

				{/* Colors */}
				<div className="pt-6 md:pt-0 pb-10 md:pb-36 lg:pb-52 pr-0 md:pr-10">
					<p className="text-2xl font-semibold mb-4">Colors</p>
					<div className="flex gap-4 md:gap-5 flex-wrap">
						{projectData.palette.map((color, index) => (
							<div key={index} className="flex flex-col items-center">
								<div
									className="w-14 h-14 md:w-20 md:h-20 rounded-sm border border-gray-200"
									style={{ backgroundColor: color.color }}
								/>
								<p className="mt-2 text-xs md:text-sm text-muted">{color.name}</p>
							</div>
						))}
					</div>
				</div>

				{/* About */}
				<article className="md:text-right pb-10 md:pb-36 lg:pb-52 md:pl-10">
					<p className="text-2xl font-semibold mb-4">About</p>
					<p className="text-sm md:text-base leading-relaxed text-muted">
						{projectData.description}
					</p>
				</article>

				{/* Big Demo Button — desktop/tablet only */}
				<div className="hidden md:block">
					<DemoBtn color={primaryColor} link={projectData.demo_link} />
				</div>
			</div>
		</section>
	);
};

export default ProjectDetails;
