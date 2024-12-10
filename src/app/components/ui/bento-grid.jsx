"use client";

import { cn } from "@/app/lib/utils";
import Image from "next/image";
import { useRef } from "react";
import { gsap } from "gsap";

export const BentoGrid = ({ className, children }) => {
	return (
		<div
			className={cn(
				"grid md:auto-rows-[18rem] grid-cols-1 lg:grid-cols-3 gap-4 mx-auto",
				className
			)}>
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
	videoAlt = "Video",
	loop = true,
	autoPlay = true,
	muted = true,
}) => {
	const imageContainerRef = useRef(null);

	const handleMouseEnter = () => {
		const container = imageContainerRef.current;
		gsap.fromTo(
			container,
			{ y: "60%" }, // Start position
			{
				y: "0%", // End position
				duration: 5,
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
				"row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input bg-primary-light hover:bg-background-dark justify-between flex flex-col space-y-4",
				className
			)}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}>
			<div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden relative group">
				<video
					src={videoSrc}
					alt={videoAlt}
					className="w-full h-full object-cover group-hover:blur-md"
					loop={loop}
					autoPlay={autoPlay}
					muted={muted}></video>
				<div className="w-full h-full absolute top-0 left-0 grid-cols-1 lg:grid-cols-2 group-hover:grid hidden">
					<div className="p-8 font-body text-white">
						<p className="text-3xl">{title}</p>
						<p className="text-sm">{description}</p>
					</div>
					<div
						ref={imageContainerRef}
						className="absolute hidden lg:flex bottom-0 right-0 flex-col items-center gap-6 overflow-hidden p-8">
						{images.map(({ src, alt, width, height }, index) => (
							<Image
								key={index}
								src={src}
								alt={alt}
								width={width}
								height={height}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};
