"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { LuInfo } from "react-icons/lu";
import { RiContactsBookLine } from "react-icons/ri";
import { AiOutlineProject } from "react-icons/ai";
import Link from "next/link";

const ProfileNav = () => {
	const containerRef = useRef(null);

	useEffect(() => {
		let ctx = gsap.context(() => {
			gsap.to("#orbit", {
				rotate: 360,
				duration: 30,
				ease: "linear",
				repeat: -1,
			});
			gsap.to(".orbit-btn", {
				rotate: -360,
				duration: 30,
				ease: "linear",
				repeat: -1,
			});
		}, containerRef);

		return () => ctx.revert();
	}, []);

	return (
		<div
			ref={containerRef}
			className="min-w-[300px] w-[28vw] aspect-square relative">
			<div id="orbit" className="absolute top-0 left-0 w-full aspect-square">
				<div className="absolute top-0 left-0 w-full aspect-square rotating-ring outline-primary-light rounded-full"></div>
				<Link href="#about-me" className="orbit-btn top-0 left-0">
					<LuInfo className="text-3xl" />
				</Link>
				<Link href="#contact" className="orbit-btn bottom-[-10%] left-[14%]">
					<RiContactsBookLine className="text-3xl" />
				</Link>
				<Link
					href="#projects"
					className="orbit-btn bottom-[50%] right-[-16.5%]">
					<AiOutlineProject className="text-3xl" />
				</Link>
			</div>

			{/* Profile Image */}
			<Image
				src="/images/profile-background.jpg"
				alt="profile-pic"
				fill
				className="object-cover object-center rounded-full bg-black -z-10"
			/>
		</div>
	);
};

export default ProfileNav;
