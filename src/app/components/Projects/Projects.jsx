import { BentoGrid, BentoGridItem } from "../ui/bento-grid";

export function Projects() {
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
	{},
	{},
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
	{},
];
