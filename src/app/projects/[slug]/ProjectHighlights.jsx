"use client";

import { formatImageData } from "@/app/components/utils/formatImageData";
import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";

const ProjectHighlights = ({ images }) => {
	const imageGrid = useRef();

	const formattedImages = formatImageData(images);
	console.log(formattedImages);

	useEffect(() => {
		gsap.fromTo(
			imageGrid.current,
			{
				right: "-10%",
				bottom: "-10%",
				opacity: 0,
			},
			{
				right: "2%",
				bottom: "2%",
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
			<div className="bg-pink-300 col-span-2 w-full h-52 relative skew-x-[30deg] -skew-[20deg]">
				<Image
					src={formattedImages[0].url}
					alt="profile-pic"
					fill
					className="object-cover"
				/>
			</div>
			<div className="bg-pink-300 w-full h-52 relative skew-x-[30deg] -skew-[20deg]">
				<Image
					src="/images/urban/urban-hl-3.png"
					alt="profile-pic"
					fill
					className="object-cover"
				/>
			</div>
			<div className="bg-pink-300 w-full h-52 relative skew-x-[30deg] -skew-[20deg]">
				<Image
					src="/images/urban/urban-hl-2.png"
					alt="profile-pic"
					fill
					className="object-cover"
				/>
			</div>
			<div className="bg-pink-300 col-span-2 w-full h-52 relative skew-x-[30deg] -skew-[20deg]">
				<Image
					src="/images/urban/urban-hl-4.png"
					alt="profile-pic"
					fill
					className="object-cover"
				/>
			</div>
			<div className="bg-pink-300 col-span-2 w-full h-52 skew-x-[30deg] -skew-[20deg]"></div>
			<div className="bg-pink-300 w-full h-52 skew-x-[30deg] -skew-[20deg]"></div>
		</div>
	);
};

export default ProjectHighlights;
