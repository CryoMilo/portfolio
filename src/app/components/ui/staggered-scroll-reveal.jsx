"use client";

import { useEffect, useRef, Children } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function StaggeredScrollReveal({ children, className }) {
	const containerRef = useRef(null);

	useEffect(() => {
		const elements = containerRef.current.children;
		if (!elements || elements.length === 0) return;

		const ctx = gsap.context(() => {
			Array.from(elements).forEach((el, index) => {
				gsap.fromTo(
					el,
					{ opacity: 0, y: 50 },
					{
						opacity: 1,
						y: 0,
						duration: 0.8,
						delay: index * 0.1,
						ease: "power2.out",
						scrollTrigger: {
							trigger: el,
							start: "top 85%",
							toggleActions: "play none none reverse",
						},
					}
				);
			});
		}, containerRef);

		return () => ctx.revert();
	}, [children]);

	return (
		<div ref={containerRef} className={className}>
			{children}
		</div>
	);
}
