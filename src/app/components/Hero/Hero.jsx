"use client";

import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { useEffect, useRef } from "react";
import ProfilePic from "./ProfilePic";

gsap.registerPlugin(TextPlugin);

const Hero = () => {
	const splashRef = useRef(null);

	useEffect(() => {
		let ctx = gsap.context(() => {
			const t1 = gsap.timeline({
				defaults: { duration: 0.6 },
			});

			t1.to("#splash-hi", {
				text: "Hi...I'm ",
				duration: 1.5,
				ease: "none",
			})
				.to("#splash-oak", {
					text: "Oak",
					duration: 1,
					ease: "none",
				})
				.to("#splash-hi", {
					opacity: 0,
					duration: 0.4,
					delay: 1,
				})
				.from("#splash-oak", {
					color: "black",
					fontSize: "16px",
					fontWeight: 400,
				})
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
			{/* Splash Background */}
			<div
				id="splash"
				className="absolute bg-white opacity-100 z-30 h-[100vh] w-full"></div>

			<div className="container relative flex flex-col md:flex-row justify-between">
				{/* Splash Text */}
				<div id="splash-text" className="absolute top-0 -left-2 z-40">
					<span id="splash-hi"></span>

					<span
						id="splash-oak"
						className="text-primary-light text-6xl font-heading font-[700]"></span>
				</div>

				{/* Main Text */}
				<div className="flex flex-col gap-2">
					<h1 className="text-xl md:text-6xl z-40">
						<span id="oak" className="text-primary-light opacity-0">
							Oak{" "}
						</span>
						<span id="soehtooaung" className="opacity-0">
							Soe Htoo Aung
						</span>
					</h1>
					<h2 className="font-body text-2xl font-[400]">
						A right guy for your softwares
					</h2>
				</div>

				{/* Profile Picture */}
				<figure className="w-[50%] grid place-items-center">
					<ProfilePic />
				</figure>
			</div>
		</section>
	);
};

export default Hero;
