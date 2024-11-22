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
				duration: 0.4,
				delay: 1,
			})
				.from(
					"#splash-oak",
					{
						color: "black",
						fontSize: "16px",
						fontWeight: 400,
					},
					1
				)
				.from("#splash-text", {
					top: "50%",
					left: "50%",
					x: "-50%",
					y: "-50%",
					fontSize: "16px",
				})
				.to("#splash", {
					opacity: 0,
				})
				.to("#soehtooaung", {
					opacity: 1,
				});
		}, splashRef);

		return () => {
			ctx.revert();
		};
	}, []);

	return (
		<section ref={splashRef} className=" h-[100vh] grid place-items-center">
			<div
				id="splash"
				className="absolute bg-white opacity-100 z-30 h-[100vh] w-full"></div>

			<div className="container relative flex flex-col md:flex-row justify-between">
				<div id="splash-text" className="absolute top-0 -left-2 z-40">
					<span id="splash-hi">Hi...I&apos;m </span>

					<span
						id="splash-oak"
						className="text-primary-light text-5xl font-heading font-[700]">
						Oak
					</span>
				</div>
				<div className="flex flex-col gap-2">
					<h1 className="text-xl md:text-5xl z-40">
						<span id="oak" className="text-primary-light opacity-0">
							Oak{" "}
						</span>
						<span id="soehtooaung" className="opacity-0">
							Soe Htoo Aung
						</span>
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
