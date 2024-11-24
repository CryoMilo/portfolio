"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { LuInfo } from "react-icons/lu";
import { RiContactsBookLine } from "react-icons/ri";
import { AiOutlineProject } from "react-icons/ai";

const ProfileNav = () => {
	const containerRef = useRef(null);

	useEffect(() => {
		let ctx = gsap.context(() => {
			gsap.to("#orbit", {
				rotate: 360,
				duration: 10,
				ease: "linear",
				repeat: -1,
				paused: true,
			});
			gsap.to(".orbit-btn", {
				rotate: -360,
				duration: 10,
				ease: "linear",
				repeat: -1,
				paused: true,
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
				<button className="orbit-btn absolute grid place-content-center top-0 left-0 w-[18%] aspect-square rounded-full bg-soft border-2 border-primary-light z-20">
					<LuInfo className="text-3xl" />
				</button>
				<button className="orbit-btn grid place-content-center absolute bottom-[-10%] left-[14%] w-[18%] aspect-square rounded-full bg-soft border-2 border-primary-light z-20">
					<RiContactsBookLine className="text-3xl" />
				</button>
				<button className="orbit-btn grid place-content-center absolute bottom-[50%] right-[-16.5%] w-[18%] aspect-square rounded-full bg-soft border-2 border-primary-light z-20">
					<AiOutlineProject className="text-3xl" />
				</button>
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
