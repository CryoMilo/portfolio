"use client";

import { cn } from "@/app/lib/utils";
import Image from "next/image";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";

export const BentoGrid = ({ className, children }) => {
	return (
		<div
			className={cn(
				"grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 mx-auto",
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

	useEffect(() => {
		const container = imageContainerRef.current;

		// Clone images for seamless scrolling
		const items = container.children;
		const cloneCount = 2; // Number of clones
		for (let i = 0; i < cloneCount; i++) {
			Array.from(items).forEach((item) => {
				const clone = item.cloneNode(true);
				container.appendChild(clone);
			});
		}

		// GSAP scrolling animation
		const scrollAnimation = gsap.to(container, {
			y: "-50%", // Scroll upwards
			duration: 10, // Adjust speed
			ease: "none",
			repeat: -1,
		});

		// Cleanup
		return () => {
			scrollAnimation.kill();
		};
	}, []);

	return (
		<div
			className={cn(
				"row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input bg-primary-light justify-between flex flex-col space-y-4",
				className
			)}>
			<div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden relative group">
				<video
					src={videoSrc}
					alt={videoAlt}
					className="w-full h-full object-cover"
					loop={loop}
					autoPlay={autoPlay}
					muted={muted}></video>
				<div className="w-full h-full absolute bg-white top-0 left-0 grid-cols-2 group-hover:grid hidden">
					<div className="p-4 font-body">
						<p className="text-3xl">{title}</p>
						<p className="text-sm">{description}</p>
					</div>
					<div
						ref={imageContainerRef}
						className="relative flex flex-col gap-4 overflow-hidden">
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
