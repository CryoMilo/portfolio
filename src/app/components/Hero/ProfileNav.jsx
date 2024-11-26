"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { LuInfo } from "react-icons/lu";
import { RiContactsBookLine } from "react-icons/ri";
import { FaCode } from "react-icons/fa6";
import Link from "next/link";

const ProfileNav = () => {
	const containerRef = useRef(null);
	const orbitAnimation = useRef(null);
	const buttonAnimation = useRef(null);

	useEffect(() => {
		// GSAP animations
		orbitAnimation.current = gsap.to("#orbit", {
			rotate: 360,
			duration: 30,
			ease: "linear",
			repeat: -1,
		});

		buttonAnimation.current = gsap.to(".orbit-btn", {
			rotate: -360,
			duration: 30,
			ease: "linear",
			repeat: -1,
		});

		// Cleanup
		return () => {
			orbitAnimation.current.kill();
			buttonAnimation.current.kill();
		};
	}, []);

	// Pause/Resume animations on hover
	const handleMouseEnter = () => {
		orbitAnimation.current.pause();
		buttonAnimation.current.pause();
	};

	const handleMouseLeave = () => {
		orbitAnimation.current.play();
		buttonAnimation.current.play();
	};

	return (
		<div
			ref={containerRef}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			className="min-w-[300px] w-[28vw] aspect-square relative">
			<div id="orbit" className="absolute top-0 left-0 w-full aspect-square">
				<div className="absolute top-0 left-0 w-full aspect-square rounded-full"></div>
				<Link href="#about-me" className="orbit-btn top-0 left-0">
					<LuInfo className="text-3xl" />
				</Link>
				<Link href="#contact" className="orbit-btn bottom-[-10%] left-[14%]">
					<RiContactsBookLine className="text-3xl" />
				</Link>
				<Link
					href="#projects"
					className="orbit-btn bottom-[45%] right-[-16.5%]">
					<FaCode className="text-3xl" />
				</Link>
			</div>

			{/* Profile Image */}
			<Image
				src="/images/profile-background.jpg"
				alt="profile-pic"
				fill
				className="object-cover object-center rounded-full bg-black shadow-xl -z-10"
			/>
		</div>
	);
};

export default ProfileNav;
