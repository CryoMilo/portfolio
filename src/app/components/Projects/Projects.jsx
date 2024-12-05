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
		<BentoGrid className="container my-24">
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
const Skeleton = ({
	videoSrc,
	videoAlt = "Video",
	loop = true,
	autoPlay = true,
	muted = true,
}) => (
	<div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden">
		<video
			src={videoSrc}
			alt={videoAlt}
			className="w-full h-full object-cover"
			loop={loop}
			autoPlay={autoPlay}
			muted={muted}></video>
	</div>
);

const items = [
	{
		title: "The Dawn of Innovation",
		description: "Explore the birth of groundbreaking ideas and inventions.",
		header: <Skeleton videoSrc="/videos/earth-spinning.mp4" />,
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
		header: <Skeleton videoSrc="/videos/urban-coffee-club-hero.mp4" />,
		className: "md:col-span-2",
		icon: <TbTableColumn className="h-4 w-4 text-neutral-500" />,
	},
	{
		title: "The Dawn of Innovation",
		description: "Explore the birth of groundbreaking ideas and inventions.",
		header: <Skeleton videoSrc="/videos/lightwave.mp4" />,
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
];
