"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getTechSkillIcon } from "../utils/getTechSkills";

gsap.registerPlugin(ScrollTrigger);

const skillIcons = [
	{
		skillName: "react",
		size: "5em",
		position: { top: "15%", left: "10%" },
		animation: "md:animate-float-1",
	},
	{
		skillName: "tailwind",
		size: "5em",
		position: { top: "10%", left: "60%" },
		animation: "md:animate-float-2",
	},
	{
		skillName: "javascript",
		size: "5em",
		position: { top: "46%", left: "10%" },
		animation: "md:animate-float-3",
	},
	{
		skillName: "nextjs",
		size: "5em",
		position: { top: "20%", left: "80%" },
		animation: "md:animate-float-4",
	},
	{
		skillName: "redux",
		size: "5em",
		position: { top: "70%", left: "40%" },
		animation: "md:animate-float-5",
	},
	{
		skillName: "html",
		size: "5em",
		position: { top: "13%", left: "30%" },
		animation: "md:animate-float-4",
	},
	{
		skillName: "express",
		size: "5em",
		position: { top: "80%", left: "70%" },
		animation: "md:animate-float-2",
	},
	{
		skillName: "css",
		size: "5em",
		position: { top: "50%", left: "80%" },
		animation: "md:animate-float-5",
	},
	{
		skillName: "figma",
		size: "5em",
		position: { top: "80%", left: "25%" },
		animation: "md:animate-float-1",
	},
	{
		skillName: "gsap",
		size: "4em",
		position: { top: "50%", left: "25%" },
		animation: "md:animate-float-3",
	},
	{
		skillName: "strapi",
		size: "4em",
		position: { top: "50%", left: "65%" },
		animation: "md:animate-float-5",
	},
	{
		skillName: "supabase",
		size: "4em",
		position: { top: "76%", left: "8%" },
		animation: "md:animate-float-3",
	},
	{
		skillName: "postgres",
		size: "4em",
		position: { top: "80%", left: "85%" },
		animation: "md:animate-float-3",
	},
	{
		skillName: "nodejs",
		size: "4em",
		position: { top: "70%", left: "55%" },
		animation: "md:animate-float-2",
	},
];

const capitalizeFirstLetter = (text) => {
	if (!text) {
		return;
	}

	return text.charAt(0).toUpperCase() + text.slice(1);
};

const Skills = () => {
	const iconRefs = useRef([]);

	useEffect(() => {
		iconRefs.current.forEach((el, index) => {
			if (!el) return;
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
	}, []);

	return (
		<div className="my-40 md:mb-36 md:mt-0 container md:p-0">
			<div className="md:h-[70vh] relative overflow-hidden">
				<div className="md:absolute top-1/2 left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:text-center pb-20">
					<p className="text-4xl md:text-5xl font-bold font-body">
						My <span className="text-primary-light">Skills</span>
					</p>
					<p>I am confident in these</p>
				</div>
				<div className="flex flex-wrap gap-8 justify-evenly text-center">
					{skillIcons.map(({ skillName, size, position, animation }, index) => {
						const Icon = getTechSkillIcon(skillName);
						return Icon ? (
							<div
								key={index}
								ref={(el) => (iconRefs.current[index] = el)}
								className={`icon md:absolute group ${animation}`}
								style={{ top: position.top, left: position.left }}>
								<Icon size={size} />
								<p className="group-hover:block hidden pt-2">
									{capitalizeFirstLetter(skillName)}
								</p>
							</div>
						) : null;
					})}
				</div>
			</div>
		</div>
	);
};

export default Skills;
