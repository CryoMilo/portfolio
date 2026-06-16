"use client";

import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";

const ProjectHighlights = ({ images }) => {
	const imageGrid = useRef();

	useEffect(() => {
		gsap.fromTo(
			imageGrid.current,
			{
				right: "-10%",
				bottom: "-25%",
				opacity: 0,
			},
			{
				right: "0",
				bottom: "-15%",
				opacity: 1,
				duration: 2,
				delay: 0.5,
				ease: "expo.out",
			}
		);
	}, []);

	return (
		<div
			ref={imageGrid}
			id="imageGrid"
			className="absolute md:right-0 bottom-0 w-[500px] xl:w-[40%] h-full grid grid-cols-3 gap-5 -rotate-[28deg]">
			{images?.map((image, index) => {
				const isFirst = index === 0;
				const isFourth = index === 3;

				return (
					<div
						key={index}
						className={`bg-transparent ${
							isFirst || isFourth ? "col-span-2" : ""
						} w-full h-full relative shadow-xl shadow-gray-400 md:skew-x-[30deg] md:-skew-[20deg]`}>
						{image.url && (
							<Image
								src={image.url}
								alt={`highlight-image-${index}`}
								fill
								className="object-fill"
							/>
						)}
					</div>
				);
			})}
		</div>
	);
};

export default ProjectHighlights;
