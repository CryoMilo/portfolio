import Image from "next/image";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";

export function Projects() {
	return (
		<BentoGrid className="container my-24">
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
	);
}

const items = [
	{
		videoSrc: "/videos/earth-spinning.mp4",
		images: [
			{
				src: "/images/urban/urban-desktop.png",
				alt: "Desktop",
				width: 300,
				height: 100,
			},
			{
				src: "/images/urban/urban-tablet.png",
				alt: "Tablet",
				width: 120,
				height: 100,
			},
			{
				src: "/images/urban/urban-mobile.png",
				alt: "Mobile",
				width: 80,
				height: 100,
			},
		],
		title: "Space Tour",
		description:
			"An animation-rich Next.js website with smooth transitions, modern visuals via Framer Motion, and a fast, responsive user experience.",
		className: "md:col-span-2",
	},
	{
		title: "The Digital Revolution",
		description: "Dive into the transformative power of technology.",
		className: "hidden lg:block lg:col-span-1",
	},
	{
		title: "The Art of Design",
		description: "Discover the beauty of thoughtful and functional design.",
		className: "hidden lg:block lg:col-span-1",
	},
	{
		videoSrc: "/videos/urban-coffee-club-hero.mp4",
		images: [
			{
				src: "/images/urban/urban-desktop.png",
				alt: "Desktop",
				width: 300,
				height: 100,
			},
			{
				src: "/images/urban/urban-tablet.png",
				alt: "Tablet",
				width: 120,
				height: 100,
			},
			{
				src: "/images/urban/urban-mobile.png",
				alt: "Mobile",
				width: 80,
				height: 100,
			},
		],
		title: "Urban Coffee Club",
		description:
			"An animation-rich Next.js website with smooth transitions, modern visuals via Framer Motion, and a fast, responsive user experience.",
		className: "md:col-span-2",
	},
	{
		videoSrc: "/videos/lightwave.mp4",
		images: [
			{
				src: "/images/lightwave/lightwave-desktop.png",
				alt: "Desktop",
				width: 300,
				height: 100,
			},
			{
				src: "/images/lightwave/lightwave-tablet.png",
				alt: "Tablet",
				width: 120,
				height: 100,
			},
			{
				src: "/images/lightwave/lightwave-mobile.png",
				alt: "Mobile",
				width: 80,
				height: 100,
			},
		],
		title: "Lightwave",
		description:
			"An animation-rich Next.js website with smooth transitions, modern visuals via Framer Motion, and a fast, responsive user experience.",
		className: "md:col-span-2",
	},
	{
		title: "The Digital Revolution",
		description: "Dive into the transformative power of technology.",
		className: "hidden lg:block lg:col-span-1",
	},
];
