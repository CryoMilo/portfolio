"use client";

import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";

const Hero = () => {
	const splashRef = useRef(null);

	useEffect(() => {
		let ctx = gsap.context(() => {
			const t1 = gsap.timeline({
				defaults: { duration: 1 },
			});

			t1.to("#splash-hi", {
				opacity: 0,
			})
				.to("#splash", {
					opacity: 0,
				})
				.to("#splash-oak", {});
		});

		return () => {
			ctx.revert();
		};
	}, []);

	return (
		<section ref={splashRef}>
			<div
				id="splash"
				className="absolute bg-white opacity-100 z-30 h-[100vh] w-full"></div>

			<div
				id="splash-text"
				className="absolute top-[40%] -translate-x-1/2 left-[50%] z-30">
				<span id="splash-hi">Hi...I&apos;m</span>
			</div>

			<div className="container h-[100vh] grid grid-cols-2 place-items-center">
				<div className="flex flex-col gap-2">
					<h1 className="text-5xl">
						<span id="oak" className="text-primary-light">
							Oak
						</span>
						<span id="soehtooaung"> Soe Htoo Aung</span>
					</h1>
					<p>A right guy for your softwares</p>
				</div>
				<div className="w-[300px] h-[300px] relative">
					<Image
						src="/images/profile-pic.png"
						alt="profile-pic"
						fill
						className="object-contain object-top rounded-full bg-black"
					/>
				</div>
			</div>
		</section>
	);
};

export default Hero;
