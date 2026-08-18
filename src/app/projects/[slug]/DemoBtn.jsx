"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useRouter } from "next/navigation";

const DemoBtn = ({ color, link }) => {
	const btnRef = useRef(null);
	const router = useRouter();

	const handleClick = () => {
		gsap.fromTo(
			btnRef.current,
			{ scale: 1 },
			{
				scale: 26,
				borderRadius: 0,
				duration: 1,
				ease: "power2.out",
				zIndex: 10,
				onComplete: () => {
					router.push(link);
				},
			}
		);
	};

	return (
		<button
			onClick={handleClick}
			style={{ backgroundColor: color }}
			aria-label="See project demo"
			className="w-[200px] h-[100px] rounded-tr-full rounded-tl-full absolute left-1/2 bottom-0 -translate-x-1/2 grid place-items-center cursor-pointer border-none outline-none focus:outline-none">
			<span className="text-lg translate-y-1/2 text-white font-medium">See More</span>
			<div
				ref={btnRef}
				className="rounded-full absolute w-20 h-20 -z-10"
				style={{ backgroundColor: color }}
			/>
		</button>
	);
};

export default DemoBtn;
