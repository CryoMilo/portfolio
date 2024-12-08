"use client";

import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import ProfileNav from "./ProfileNav";
import ScrollGuide from "../ui/scroll-guide";
import SocialBar from "../ui/socal-bar";

gsap.registerPlugin(TextPlugin, ScrollTrigger);

const Hero = () => {
	const splashRef = useRef(null);

	useEffect(() => {
		// Check if the animation has already played
		const hasPlayed = localStorage.getItem("heroAnimationPlayed");

		if (!hasPlayed) {
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
						onComplete: () => {
							document.getElementById("splash-hi").style.display = "none";
						},
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
					})
					.to("#splash-oak", {
						opacity: 0,
					})
					.to(
						"#oak",
						{
							opacity: 1,
						},
						"<"
					)
					.to("#splash", {
						zIndex: -99,
					});

				localStorage.setItem("heroAnimationPlayed", "true");
			}, splashRef);

			return () => {
				ctx.revert();
			};
		} else {
			// Skip animation, directly set the final state
			document.getElementById("splash-hi").style.opacity = "0";
			document.getElementById("splash-oak").textContent = "";
			document.getElementById("oak").style.opacity = "1";
			document.getElementById("soehtooaung").style.opacity = "1";
			document.getElementById("splash").style.opacity = "0";
			document.getElementById("splash").style.zIndex = "-99";
		}

		// GSAP ScrollTrigger for visibility
		const ctx = gsap.context(() => {
			gsap.to("#social-bar, #scroll-guide", {
				opacity: 0,
				scrollTrigger: {
					trigger: splashRef.current,
					start: "top top",
					end: "bottom bottom",
					scrub: true,
					toggleActions: "play none none reverse",
				},
			});
		}, splashRef);

		return () => {
			ctx.revert();
		};
	}, []);

	return (
		<section
			ref={splashRef}
			className="md:h-[91vh] grid place-items-center mt-10 relative">
			{/* Splash Background */}
			<div
				id="splash"
				className="absolute bg-white opacity-100 z-30 h-[100vh] w-full"></div>

			<div className="container text-center md:text-left relative flex flex-col md:flex-row justify-between gap-20 xl:gap-10">
				{/* Splash Text */}
				<div id="splash-text" className="absolute top-0 z-40">
					<span id="splash-hi"></span>

					<span
						id="splash-oak"
						className="text-primary-light text-5xl font-heading font-[700]"></span>
				</div>

				{/* Main Text */}
				<div className="flex flex-col gap-2 items-center md:items-start">
					<h1 className="text-5xl z-40">
						<span id="oak" className="text-primary-light opacity-0">
							Oak{" "}
						</span>
						<span id="soehtooaung" className="opacity-0">
							Soe Htoo Aung
						</span>
					</h1>
					<h2 className="font-body text-lg font-[400] max-w-[500px]">
						Fueled by coffee and curiosity, I&apos;ve been navigating the
						ever-evolving world of{" "}
						<span className="font-semibold underline underline-offset-4 decoration-primary-light decoration-solid decoration-2">
							web development
						</span>{" "}
						for the past three years, constantly learning and growing.
					</h2>
				</div>

				{/* Profile Picture */}
				<div className="md:w-[50%] place-items-center xl:place-items-end">
					<ProfileNav />
				</div>
			</div>

			{/* Social Bar */}
			<div
				id="social-bar"
				className="absolute bottom-0 left-[4vw] hidden xl:block opacity-100 transition-opacity duration-500">
				<SocialBar />
			</div>

			{/* Scroll Guide */}
			<div
				id="scroll-guide"
				className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-100 transition-opacity duration-500">
				<ScrollGuide text="My Latest Works" />
			</div>
		</section>
	);
};

export default Hero;
