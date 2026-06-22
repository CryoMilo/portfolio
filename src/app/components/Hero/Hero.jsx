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
	const sectionRef = useRef(null);

	useEffect(() => {
		const hasPlayed = sessionStorage.getItem("heroAnimationPlayed");

		const splash = document.getElementById("splash");
		const splashHi = document.getElementById("splash-hi");
		const splashOak = document.getElementById("splash-oak");
		const oak = document.getElementById("oak");
		const soehtooaung = document.getElementById("soehtooaung");

		if (!hasPlayed) {
			// Stop scrolling while the intro plays
			document.body.style.overflow = "hidden";

			const ctx = gsap.context(() => {
				const t1 = gsap.timeline({
					defaults: { duration: 0.6, ease: "power2.inOut" },
					onComplete: () => {
						document.body.style.overflow = "auto";
						sessionStorage.setItem("heroAnimationPlayed", "true");
					},
				});

				t1.to(splashHi, {
					text: "Hi...I'm ",
					duration: 1.2,
					ease: "none",
				})
					.to(splashOak, {
						text: "Oak",
						duration: 0.8,
						ease: "none",
					})
					.to(splashHi, {
						opacity: 0,
						duration: 0.4,
						delay: 0.6,
					})
					// --- The handoff: measure where the real heading's "Oak" sits
					// RIGHT NOW (so it's correct at the current screen size) and
					// fly the splash text there, shrinking to match.
					.add(() => {
						// Get the EXACT baseline y-position of an inline element by
						// inserting a zero-size inline-block marker inside it with
						// vertical-align: baseline. Per CSS spec, a zero-height
						// inline-block aligned to "baseline" sits exactly on the
						// text baseline — so the marker's own top edge IS the
						// baseline's y-coordinate. This works correctly no matter
						// what line-height, font-size, or breakpoint is active, so
						// there's no constant to tune per screen size.
						const getBaselineY = (el) => {
							const marker = document.createElement("span");
							marker.style.display = "inline-block";
							marker.style.width = "0";
							marker.style.height = "0";
							marker.style.verticalAlign = "baseline";
							el.appendChild(marker);
							const y = marker.getBoundingClientRect().top;
							marker.remove();
							return y;
						};

						const from = splashOak.getBoundingClientRect();
						const to = oak.getBoundingClientRect();

						const fromFontSize = parseFloat(
							getComputedStyle(splashOak).fontSize
						);
						const targetStyle = window.getComputedStyle(oak);
						const targetFontSize = parseFloat(targetStyle.fontSize);

						const fromBaseline = getBaselineY(splashOak);
						const toBaseline = getBaselineY(oak);

						const deltaX = to.left - from.left;
						const deltaY = toBaseline - fromBaseline;
						const scale = targetFontSize / fromFontSize;

						gsap.set(splashOak, { transformOrigin: "left top" });

						gsap
							.timeline({
								defaults: { duration: 0.7, ease: "power3.inOut" },
								onComplete: () => {
									// Swap the moving clone out for the real heading in
									// one frame so there's no visible seam.
									gsap.set(splashOak, { opacity: 0 });
									gsap.set(oak, { opacity: 1 });
								},
							})
							.to(splashOak, {
								x: deltaX,
								y: deltaY,
								scale,
								fontWeight: targetStyle.fontWeight,
								color: targetStyle.color,
							})
							.to(soehtooaung, { opacity: 1, duration: 0.5 }, 0.3)
							.to(splash, { opacity: 0, duration: 0.7 }, 0.15)
							.set(splash, { zIndex: -99 });
					});
			}, sectionRef);

			return () => {
				ctx.revert();
				document.body.style.overflow = "auto";
			};
		} else {
			// Already played this session — jump straight to the end state.
			if (splashHi) splashHi.style.opacity = "0";
			if (splashOak) splashOak.style.opacity = "0";
			if (oak) oak.style.opacity = "1";
			if (soehtooaung) soehtooaung.style.opacity = "1";
			if (splash) {
				splash.style.opacity = "0";
				splash.style.zIndex = "-99";
			}
			document.body.style.overflow = "auto";
		}

		const ctx = gsap.context(() => {
			gsap.to("#social-bar, #scroll-guide", {
				opacity: 0,
				scrollTrigger: {
					trigger: sectionRef.current,
					start: "top top",
					end: "bottom bottom",
					scrub: true,
					toggleActions: "play none none reverse",
				},
			});
		}, sectionRef);

		return () => {
			ctx.revert();
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<section
			ref={sectionRef}
			className="md:h-[91vh] grid place-items-center mt-10 relative px-4 sm:px-0">
			{/* Splash Background */}
			<div
				id="splash"
				className="fixed inset-0 bg-white z-[60] flex items-center justify-center pointer-events-none"></div>

			<div className="container text-center md:text-left relative flex flex-col-reverse md:flex-row justify-between gap-12 sm:gap-16 md:gap-20 xl:gap-10">
				{/* Intro animation text — centered over the splash while typing */}
				<div
					id="splash-text"
					className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[70] flex flex-col sm:flex-row items-center gap-1 sm:gap-2">
					<span
						id="splash-hi"
						className="text-2xl sm:text-3xl md:text-5xl font-heading inline-block"></span>
					<span
						id="splash-oak"
						className="text-primary-light text-2xl sm:text-3xl md:text-5xl font-heading font-[700] inline-block"></span>
				</div>

				{/* Main Text */}
				<div className="flex flex-col gap-2 items-center md:items-start">
					<h1 className="text-4xl sm:text-5xl z-40">
						<span id="oak" className="text-primary-light opacity-0">
							Oak{" "}
						</span>
						<span id="soehtooaung" className="opacity-0">
							Soe Htoo Aung
						</span>
					</h1>
					{/* <h2 className="font-body text-base sm:text-lg font-[400] max-w-[500px]">
						Fueled by coffee and curiosity, I&apos;ve been navigating the
						ever-evolving world of{" "}
						<span className="font-semibold underline underline-offset-4 decoration-primary-light decoration-solid decoration-2">
							software development
						</span>{" "}
						for the past three years, constantly learning and growing.
					</h2> */}
					<h2 className="font-body text-base sm:text-lg font-[400] max-w-[500px]">
						Driven by shipping fast and figuring it out, I leverage my skills in{" "}
						<span className="font-semibold underline underline-offset-4 decoration-primary-light decoration-solid decoration-2">
							software development
						</span>{" "}
						to collaborate with AI and build high-impact digital solutions.
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
				className="absolute hidden md:block bottom-4 left-1/2 -translate-x-1/2 opacity-100 transition-opacity duration-500">
				<ScrollGuide text="Scroll To Explore" />
			</div>
		</section>
	);
};

export default Hero;
