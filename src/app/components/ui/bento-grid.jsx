"use client";

import { cn } from "@/app/lib/utils";
import Image from "next/image";
import { useRef } from "react";
import { gsap } from "gsap";
import Link from "next/link";

export const BentoGrid = ({ className, children }) => {
	return (
		<div className={cn("flex flex-col gap-8 mx-auto", className)}>
			{children}
		</div>
	);
};

export const BentoGridItem = ({
	className,
	videoSrc,
	images = [],
	title,
	description,
	documentId,
}) => {
	const imageContainerRef = useRef(null);

	const handleMouseEnter = () => {
		const container = imageContainerRef.current;
		gsap.fromTo(
			container,
			{ y: "60%" },
			{
				y: "0%",
				duration: 8,
				ease: "none",
				repeat: 0,
			}
		);
	};

	const handleMouseLeave = () => {
		const container = imageContainerRef.current;
		gsap.to(container, {
			y: "60%", // Return to initial position
			duration: 5,
			ease: "none",
		});
	};

	return (
		<div
			className={cn(
				"w-full rounded-xl h-[18rem] group hover:shadow-xl transition duration-200 shadow-input hover:bg-background-dark bg-primary-light justify-between flex flex-col space-y-4",
				className
			)}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}>
			<div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden relative group">
				<video
					src={videoSrc}
					alt={title}
					className="w-full h-full object-cover group-hover:blur-md"
					loop
					autoPlay
					muted></video>
				<div className="w-full h-full absolute top-0 left-0 grid-cols-1 lg:grid-cols-2 group-hover:grid hidden">
					<div className="p-8 font-body text-white">
						<div className="mb-6">
							<p className="text-3xl">{title}</p>
							<p className="text-sm line-clamp-3">{description}</p>
						</div>
						<Link
							href={`projects/${documentId}`}
							className="bg-white/30 border-none backdrop-blur-2xl rounded-md px-4 py-2 text-white hover:bg-white/40 transition">
							See More
						</Link>
					</div>
					<div
						ref={imageContainerRef}
						className="absolute hidden lg:flex bottom-0 right-[3%] xl:right-[8%] flex-col items-center gap-6 overflow-hidden p-8">
						{images.map(({ url, name, width, height }, index) => (
							<Image
								key={index}
								src={url}
								alt={name}
								width={width * 0.5}
								height={height * 0.5}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};
