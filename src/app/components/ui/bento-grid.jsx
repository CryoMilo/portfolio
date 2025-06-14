"use client";

import { cn } from "@/app/lib/utils";
import Image from "next/image";
import { useRef } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import { getTechSkillIcon } from "../utils/getTechSkills";

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
	githubLink,
	images = [],
	title,
	responsive = true,
	intro_text,
	documentId,
	demoLink,
	techList,
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
				ease: "power1.in",
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
				"w-full rounded-xl h-[18rem] group hover:shadow-xl transition duration-200 shadow-input hover:bg-background-dark justify-between flex flex-col space-y-4",
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
							<p className="text-sm line-clamp-3">{intro_text}</p>
							<div className="flex gap-2 my-4">
								{techList.map((tech, index) => {
									const Icon = getTechSkillIcon(tech);
									return Icon ? (
										<div key={index} className="w-10 h-10">
											<Icon size="60%" />
										</div>
									) : null;
								})}
							</div>
						</div>
						<Link
							href={`projects/${documentId}`}
							// href={githubLink}
							className="bg-white/30 border-none backdrop-blur-2xl rounded-md px-4 py-2 text-white hover:bg-white/40 transition mr-4">
							See More
						</Link>
						<Link
							href={demoLink}
							className="bg-white/30 border-none backdrop-blur-2xl rounded-md px-4 py-2 text-white hover:bg-white/40 transition">
							Demo
						</Link>
					</div>
					{responsive ? (
						<div
							ref={imageContainerRef}
							className="absolute hidden lg:flex bottom-0 right-[3%] xl:right-[8%] flex-col items-center gap-6 overflow-hidden p-8">
							{images.map(({ url, width, height }, index) => (
								<Image
									key={index}
									src={url}
									alt={index}
									width={width * 0.5}
									height={height * 0.5}
								/>
							))}
						</div>
					) : (
						<Image
							className="absolute hidden lg:flex bottom-[17%] right-[3%] xl:right-[8%] flex-col items-center gap-6 overflow-hidden"
							src={images[0].url}
							alt="Mockup Static"
							width={images[0].width * 0.5}
							height={images[0].height * 0.5}
						/>
					)}
				</div>
			</div>
		</div>
	);
};
