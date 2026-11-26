"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { getTechSkillIcon } from "../utils/getTechSkills";
import { prefersReducedMotion } from "@/app/lib/reducedMotion";

export const BentoGrid = ({ children }) => {
	return (
		<div className="flex flex-col gap-8 mx-auto">
			{children}
		</div>
	);
};

export const BentoGridItem = ({
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
	const videoRef = useRef(null);

	useEffect(() => {
		if (prefersReducedMotion()) videoRef.current?.pause();
	}, []);

	return (
		<div
			className="w-full rounded-xl h-[18rem] group hover:shadow-xl transition duration-200 shadow-input hover:bg-background-dark justify-between flex flex-col space-y-4">
			<div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden relative group">
				<video
					ref={videoRef}
					src={videoSrc}
					alt={title}
					className="w-full h-full object-cover lg:group-hover:blur-md lg:group-focus-within:blur-md"
					loop
					autoPlay
					muted
					playsInline></video>
				{/* Touch screens have no hover, so below lg the details always show over a dark gradient;
				    from lg up they appear on hover or keyboard focus. */}
				<div className="w-full h-full absolute top-0 left-0 grid grid-cols-1 lg:grid-cols-2 bg-gradient-to-t from-black/90 via-black/60 to-black/30 lg:bg-none lg:hidden lg:group-hover:grid lg:group-focus-within:grid">
					<div className="p-5 lg:p-8 font-body text-white flex flex-col justify-end lg:block">
						<div className="mb-4 lg:mb-6">
							<p className="text-2xl lg:text-3xl">{title}</p>
							<p className="text-sm line-clamp-2 lg:line-clamp-3">{intro_text}</p>
							<div className="flex gap-2 my-3 lg:my-4">
								{techList.map((tech, index) => {
									const Icon = getTechSkillIcon(tech);
									return Icon ? (
										<div key={index} className="w-8 h-8 lg:w-10 lg:h-10">
											<Icon size="60%" />
										</div>
									) : null;
								})}
							</div>
						</div>
						<div className="flex gap-3 lg:gap-4">
							<Link
								href={`projects/${documentId}`}
								className="bg-white/30 border-none backdrop-blur-2xl rounded-md px-4 py-2 text-white hover:bg-white/40 transition">
								See More
							</Link>
							<Link
								href={demoLink}
								className="bg-white/30 border-none backdrop-blur-2xl rounded-md px-4 py-2 text-white hover:bg-white/40 transition">
								Demo
							</Link>
						</div>
					</div>
					{responsive ? (
						<div
							className="absolute hidden lg:flex bottom-0 right-[3%] xl:right-[8%] flex-col items-center gap-6 p-8 translate-y-[60%] group-hover:translate-y-0 transition-transform duration-[5000ms] ease-in-out">
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
