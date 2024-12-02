"use client";

import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import {
	TbClipboardCopy,
	TbFileBroken,
	TbSignature,
	TbTableColumn,
} from "react-icons/tb";

export function Projects() {
	return (
		<BentoGrid className="container my-36">
			{items.map((item, i) => (
				<BentoGridItem
					key={i}
					title={item.title}
					description={item.description}
					header={item.header}
					className={item.className}
					icon={item.icon}
				/>
			))}
		</BentoGrid>
	);
}
const Skeleton = () => (
	<div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl [mask-image:radial-gradient(ellipse_at_center,white,transparent)] border border-transparent bg-primary-light"></div>
);
const items = [
	{
		title: "The Dawn of Innovation",
		description: "Explore the birth of groundbreaking ideas and inventions.",
		header: <Skeleton />,
		className: "md:col-span-2",
		icon: <TbClipboardCopy className="h-4 w-4 text-neutral-500" />,
	},
	{
		title: "The Digital Revolution",
		description: "Dive into the transformative power of technology.",
		header: <Skeleton />,
		className: "md:col-span-1",
		icon: <TbFileBroken className="h-4 w-4 text-neutral-500" />,
	},
	{
		title: "The Art of Design",
		description: "Discover the beauty of thoughtful and functional design.",
		header: <Skeleton />,
		className: "md:col-span-1",
		icon: <TbSignature className="h-4 w-4 text-neutral-500" />,
	},
	{
		title: "The Power of Communication",
		description:
			"Understand the impact of effective communication in our lives.",
		header: <Skeleton />,
		className: "md:col-span-2",
		icon: <TbTableColumn className="h-4 w-4 text-neutral-500" />,
	},
];
