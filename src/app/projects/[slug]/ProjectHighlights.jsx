"use client";

import { formatImageData } from "@/app/components/utils/formatImageData";
import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";

const ProjectHighlights = ({ images }) => {
	const imageGrid = useRef();

	const formattedImages = formatImageData(images);

	useEffect(() => {
		gsap.fromTo(
			imageGrid.current,
			{
				right: "-10%",
				bottom: "-10%",
				opacity: 0,
			},
			{
				right: "0",
				bottom: "0",
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
			className="absolute right-0 bottom-0 w-[60%] xl:w-[40%] h-full grid grid-cols-3 gap-5 -rotate-[28deg]">
			{formattedImages.map((image, index) => {
				const isFirst = index === 0;
				const isFourth = index === 3;

				return (
					<div
						key={index}
						className={`bg-gray-300 ${
							isFirst || isFourth ? "col-span-2" : ""
						} w-full h-52 relative shadow-xl shadow-gray-400 skew-x-[30deg] -skew-[20deg]`}>
						{image.url && (
							<Image
								src={image.url}
								alt={`highlight-image-${index}`}
								fill
								className="object-cover"
							/>
						)}
					</div>
				);
			})}
		</div>
	);
};

export default ProjectHighlights;
