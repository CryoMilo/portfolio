"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
	const componentRef = useRef(null);

	useEffect(() => {
		const words = gsap.utils.toArray(".word");

		let ctx = gsap.context(() => {
			gsap.fromTo(
				words,
				{ opacity: 0, y: 20 }, // Start hidden and shifted down
				{
					opacity: 1,
					y: 0, // Animate to visible and original position
					duration: 0.4,
					ease: "power2.out",
					stagger: 0.1, // Delay between each word
					scrollTrigger: {
						markers: true,
						trigger: componentRef.current, // Trigger animation on scroll
						start: "top 120%", // Start when the top of container is 80% in viewport
						end: "bottom 100%", // End when the bottom of container is 50% in viewport
						scrub: 1, // Smooth animation tied to scroll
					},
				}
			);
		}, componentRef);

		return () => {
			ctx.revert();
		};
	}, []);

	const text = `I'm a passionate software developer based in Bangkok who loves creating intuitive user experiences and designing efficient systems.`;

	const words = text.split(" ").map((word, index) => (
		<span key={index} className="word inline-block mr-1">
			{word}
		</span>
	));

	return (
		<div id="#about-me" ref={componentRef} className="container h-[80vh]">
			<div className="text-3xl flex flex-wrap gap-3">
				<span className="pl-7 w-[10vw]"></span>
				{words}
			</div>
		</div>
	);
};

export default AboutMe;
