"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
	FaArrowLeft,
	FaGithub,
	FaPlay,
	FaDatabase,
	FaShieldAlt,
	FaBolt,
	FaCloud,
	FaChartBar,
	FaUserShield,
} from "react-icons/fa";
import { LuLayoutGrid, LuPrinter } from "react-icons/lu";
import { getTechSkillIcon } from "@/app/components/utils/getTechSkills";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

/* ------------------------------------------------------------------ */
/* Static content                                                      */
/* ------------------------------------------------------------------ */

const STATS = [
	{ value: "18", label: "Database Tables" },
	{ value: "17", label: "Routes" },
	{ value: "46", label: "Components" },
	{ value: "05", label: "Major Features" },
	{ value: "02", label: "User Roles" },
];

const STACK = ["react", "vite", "supabase", "zustand", "tailwind"];

const PROBLEMS = [
	"Orders were tracked by hand, on paper, under pressure.",
	"Kitchen communication broke down during the rush.",
	"Every menu change meant repetitive manual work.",
	"Business data was scattered across five different tools.",
];

const JOURNEY = [
	{ hash: "a1f9c2e", msg: "Opened a Burmese food business" },
	{ hash: "c44e810", msg: "Managed every order by hand" },
	{ hash: "7b03d5a", msg: "Built first menu management tools" },
	{ hash: "e29f114", msg: "Shipped a rough POS prototype" },
	{ hash: "f5a8b3c", msg: "Wired up real-time kitchen printing" },
	{ hash: "9d2c6f0", msg: "Designed the complete restaurant platform" },
];

const SOLUTION_FLOW = [
	{
		role: "Staff",
		steps: ["POS Dashboard", "Cloud Database", "Kitchen Printer"],
	},
	{ role: "Admin", steps: ["Analytics", "Menu Management"] },
];

const SYSTEM_DOES = [
	"Manage restaurant menus",
	"Process customer orders",
	"Route tickets to the kitchen",
	"Control staff permissions",
	"Track business performance",
];

const FEATURES = [
	{
		icon: LuLayoutGrid,
		title: "High-Speed POS",
		copy: "Staff create orders, customize dishes, split items, assign tables, and process payments in seconds.",
		imgKey: "pos-1",
	},
	{
		icon: FaChartBar,
		title: "Dynamic Weekly Menu",
		copy: "Managers schedule menus for different days of the week without touching a single line of code.",
		imgKey: "pos-2",
	},
	{
		icon: LuPrinter,
		title: "Real-Time Kitchen Printing",
		copy: "Orders appear in the kitchen automatically through a cloud-based printing workflow.",
		imgKey: "pos-3",
	},
	{
		icon: FaUserShield,
		title: "Staff Permissions",
		copy: "Administrators control exactly what each staff member can access — no redeploy required.",
		imgKey: "pos-4",
	},
	{
		icon: FaBolt,
		title: "Analytics Dashboard",
		copy: "Full visibility into sales, expenses, and operational performance, at a glance.",
		imgKey: "pos-5",
	},
];

const BEHIND_SCENES = [
	{
		icon: FaDatabase,
		title: "Database Design",
		copy: "18 PostgreSQL tables, modeled directly around how a restaurant actually runs.",
	},
	{
		icon: FaBolt,
		title: "State Management",
		copy: "Built on Zustand for fast order creation and snappy, predictable interactions.",
	},
	{
		icon: FaShieldAlt,
		title: "Role-Based Access",
		copy: "Dynamic permissions implemented with Supabase authentication metadata.",
	},
	{
		icon: FaCloud,
		title: "Cloud Infrastructure",
		copy: "A serverless architecture on Supabase — no dedicated backend server required.",
	},
];

const AI_FLOW = [
	"Restaurant Problems",
	"My Requirements",
	"AI-Assisted Development",
	"Testing In Real Workflows",
	"Final Product",
];

const AI_ASSISTED = [
	"Research",
	"Architecture exploration",
	"Refactoring",
	"UI generation",
	"Documentation",
];

const CHALLENGES = [
	{
		challenge: "Managing complex order modifications.",
		solution: "A custom order-splitting system.",
	},
	{
		challenge: "Printing kitchen tickets instantly.",
		solution: "A cloud-based print queue.",
	},
	{
		challenge: "Managing staff permissions.",
		solution: "A dynamic, role-based access system.",
	},
];

const LEARNED = [
	"Product thinking",
	"Database design",
	"Role management",
	"State architecture",
	"Operational workflows",
	"Balancing business and technical requirements",
];

const ROADMAP = [
	{ label: "POS System", done: true },
	{ label: "Weekly Menu Management", done: true },
	{ label: "Staff Access Control", done: true },
	{ label: "Inventory Management", done: false },
	{ label: "Procurement Tracking", done: false },
	{ label: "Financial Reporting", done: false },
	{ label: "Multi-Branch Support", done: false },
];

/* ------------------------------------------------------------------ */
/* Small building blocks                                               */
/* ------------------------------------------------------------------ */

const SectionLabel = ({ children }) => (
	<p className="font-mono text-xs tracking-[0.25em] uppercase text-ember/70 mb-3">
		{children}
	</p>
);

const ImgPlaceholder = ({ label, className = "" }) => (
	<div
		className={`relative flex items-center justify-center rounded-xl border-2 border-dashed border-char/15 bg-cream/60 text-char/40 overflow-hidden ${className}`}>
		<div className="flex flex-col items-center gap-2 px-4 text-center">
			<LuLayoutGrid className="text-2xl" />
			<span className="font-mono text-[11px] tracking-wide uppercase">
				{label}
			</span>
		</div>
	</div>
);

/* ------------------------------------------------------------------ */
/* Main component                                                      */
/* ------------------------------------------------------------------ */

export default function ShalPhyokeShowcase() {
	const rootRef = useRef(null);
	const heroVideoRef = useRef(null);

	useEffect(() => {
		const ctx = gsap.context(() => {
			/* Hero entrance */
			gsap.fromTo(
				".hero-kicker",
				{ opacity: 0, y: 16 },
				{ opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }
			);
			gsap.fromTo(
				".hero-title",
				{ opacity: 0, y: 28 },
				{ opacity: 1, y: 0, duration: 0.9, ease: "power3.out", delay: 0.1 }
			);
			gsap.fromTo(
				".hero-subtitle",
				{ opacity: 0, y: 20 },
				{ opacity: 1, y: 0, duration: 0.9, ease: "power3.out", delay: 0.25 }
			);
			gsap.fromTo(
				".hero-media",
				{ opacity: 0, scale: 0.96 },
				{ opacity: 1, scale: 1, duration: 1.1, ease: "power3.out", delay: 0.2 }
			);
			gsap.fromTo(
				".hero-stat",
				{ opacity: 0, y: 14 },
				{
					opacity: 1,
					y: 0,
					duration: 0.6,
					stagger: 0.07,
					ease: "power2.out",
					delay: 0.5,
				}
			);
			gsap.fromTo(
				".hero-stack-pill",
				{ opacity: 0, y: 10 },
				{
					opacity: 1,
					y: 0,
					duration: 0.5,
					stagger: 0.04,
					ease: "power2.out",
					delay: 0.7,
				}
			);

			/* Generic reveal-on-scroll for any .reveal element */
			gsap.utils.toArray(".reveal").forEach((el) => {
				gsap.fromTo(
					el,
					{ opacity: 0, y: 32 },
					{
						opacity: 1,
						y: 0,
						duration: 0.8,
						ease: "power3.out",
						scrollTrigger: {
							trigger: el,
							start: "top 85%",
							toggleActions: "play none none reverse",
						},
					}
				);
			});

			/* Staggered reveal for groups */
			gsap.utils.toArray(".reveal-group").forEach((group) => {
				const items = group.querySelectorAll(".reveal-item");
				gsap.fromTo(
					items,
					{ opacity: 0, y: 28 },
					{
						opacity: 1,
						y: 0,
						duration: 0.7,
						stagger: 0.1,
						ease: "power3.out",
						scrollTrigger: {
							trigger: group,
							start: "top 85%",
							toggleActions: "play none none reverse",
						},
					}
				);
			});

			/* Journey timeline — line draws in, nodes pop */
			const timelineEl = document.querySelector(".journey-line");
			if (timelineEl) {
				gsap.fromTo(
					timelineEl,
					{ scaleY: 0 },
					{
						scaleY: 1,
						ease: "none",
						transformOrigin: "top",
						scrollTrigger: {
							trigger: ".journey-track",
							start: "top 75%",
							end: "bottom 70%",
							scrub: true,
						},
					}
				);
			}
			gsap.utils.toArray(".journey-node").forEach((node, i) => {
				gsap.fromTo(
					node,
					{ opacity: 0, x: -16, scale: 0.8 },
					{
						opacity: 1,
						x: 0,
						scale: 1,
						duration: 0.5,
						ease: "back.out(1.7)",
						scrollTrigger: {
							trigger: node,
							start: "top 80%",
							toggleActions: "play none none reverse",
						},
					}
				);
			});

			/* Roadmap progress line */
			const roadmapLine = document.querySelector(".roadmap-line-fill");
			if (roadmapLine) {
				gsap.fromTo(
					roadmapLine,
					{ scaleX: 0 },
					{
						scaleX: 3 / 7,
						ease: "power2.out",
						duration: 1.2,
						transformOrigin: "left",
						scrollTrigger: {
							trigger: ".roadmap-track",
							start: "top 70%",
						},
					}
				);
			}
		}, rootRef);

		return () => ctx.revert();
	}, []);

	return (
		<div ref={rootRef} className="bg-cream text-char overflow-x-clip">
			{/* ============================================================ */}
			{/* BACK NAV                                                       */}
			{/* ============================================================ */}
			<div className="absolute top-0 left-0 z-20 p-4 sm:p-8">
				<Link
					href="/#projects"
					className="inline-flex items-center gap-2 text-sm font-medium text-char/70 hover:text-ember transition-colors">
					<FaArrowLeft className="text-xs" />
					Back to Portfolio
				</Link>
			</div>

			{/* ============================================================ */}
			{/* 1. HERO                                                        */}
			{/* ============================================================ */}
			<section className="relative pt-16 pb-12 sm:pb-16 px-6 sm:px-10 lg:px-16">
				<div className="max-w-6xl mx-auto">
					{/* <p className="hero-kicker font-mono text-xs tracking-[0.3em] uppercase text-ember mb-5">
						Case Study — Shal Phyoke
					</p> */}
					<h1 className="hero-title font-heading font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.05] max-w-3xl">
						Building a Restaurant
						<span className="block text-ember">Operating System.</span>
					</h1>
					<p className="hero-subtitle font-body text-base sm:text-lg text-char/70 max-w-xl mt-6 leading-relaxed">
						A real-world POS and restaurant management platform, built from
						challenges I encountered while operating my own Burmese food
						business.
					</p>

					{/* Hero media — video */}
					<div className="hero-media relative mt-12 rounded-2xl overflow-hidden border border-char/10 shadow-[0_30px_60px_-25px_rgba(28,25,23,0.35)] bg-char">
						<video
							ref={heroVideoRef}
							src="/videos/pos.mov"
							autoPlay
							muted
							loop
							playsInline
							className="w-full aspect-video object-cover"
						/>
						<div className="absolute inset-0 bg-gradient-to-t from-char/40 via-transparent to-transparent pointer-events-none" />
					</div>

					{/* Stats strip */}
					{/* <div className="mt-10 sm:mt-14 grid grid-cols-2 sm:grid-cols-5 gap-6 sm:gap-4 border-y border-char/10 py-7">
						{STATS.map((s) => (
							<div key={s.label} className="hero-stat text-center sm:text-left">
								<p className="font-mono text-2xl sm:text-3xl font-medium text-ember">
									{s.value}
								</p>
								<p className="text-xs sm:text-sm text-char/60 mt-1">
									{s.label}
								</p>
							</div>
						))}
					</div> */}

					{/* Tech stack pills */}
					<div className="flex place-content-end gap-2 mt-7">
						{STACK.map((tech, index) => {
							const Icon = getTechSkillIcon(tech);
							return Icon ? (
								<div key={index} className="w-10 h-10">
									<Icon size="80%" />
								</div>
							) : null;
						})}
					</div>
				</div>
			</section>

			{/* ============================================================ */}
			{/* 2. THE PROBLEM                                                 */}
			{/* ============================================================ */}
			<section className="px-6 sm:px-10 lg:px-16 py-20 sm:py-28 bg-char text-cream">
				<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
					<div className="reveal order-2 md:order-1">
						{/* <ImgPlaceholder
							label="Restaurant operation photo"
							className="aspect-[4/5] w-full"
						/> */}
						<Image
							src="/images/pos-showcase/manual-process.jpg"
							alt="manual-operations"
							width={400}
							height={600}
							className="object-cover object-center aspect-[4/5] shadow-[0_30px_60px_-25px_rgba(28,25,23,0.35)] rounded-2xl w-full"
						/>
					</div>
					<div className="order-1 md:order-2">
						<SectionLabel>The Problem</SectionLabel>
						<h2 className="font-heading font-bold text-3xl sm:text-4xl mb-8 reveal">
							Real problems I faced.
						</h2>
						<ul className="space-y-4 reveal-group">
							{PROBLEMS.map((p) => (
								<li
									key={p}
									className="reveal-item flex items-start gap-3 text-cream/85">
									<span className="mt-2 w-1.5 h-1.5 rounded-full bg-ember shrink-0" />
									<span className="leading-relaxed">{p}</span>
								</li>
							))}
						</ul>
						<p className="reveal mt-9 text-lg sm:text-xl font-medium leading-snug text-cream">
							Instead of searching for software that fit my workflow, I decided
							to build one.
						</p>
					</div>
				</div>
			</section>

			{/* ============================================================ */}
			{/* 3. THE JOURNEY                                                 */}
			{/* ============================================================ */}
			<section className="px-6 sm:px-10 lg:px-16 py-20 sm:py-28">
				<div className="max-w-3xl mx-auto">
					<SectionLabel>The Journey</SectionLabel>
					<h2 className="font-heading font-bold text-3xl sm:text-4xl mb-14 reveal">
						From a busy kitchen to a working platform.
					</h2>

					<div className="journey-track relative pl-10 sm:pl-14">
						<div
							className="journey-line absolute left-[7px] sm:left-[11px] top-1 bottom-1 w-px bg-ember/40"
							style={{ transformOrigin: "top" }}
						/>
						<div className="space-y-9">
							{JOURNEY.map((step) => (
								<div key={step.hash} className="journey-node relative">
									<span className="absolute -left-10 sm:-left-14 top-1 w-3.5 h-3.5 rounded-full bg-ember ring-4 ring-cream" />
									<p className="font-mono text-[11px] text-ember/70 mb-1">
										{step.hash}
									</p>
									<p className="font-body text-base sm:text-lg text-char">
										{step.msg}
									</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* ============================================================ */}
			{/* 4. SOLUTION OVERVIEW                                           */}
			{/* ============================================================ */}
			{/* <section className="px-6 sm:px-10 lg:px-16 py-20 sm:py-28 bg-sand">
				<div className="max-w-6xl mx-auto">
					<SectionLabel>Solution Overview</SectionLabel>
					<h2 className="font-heading font-bold text-3xl sm:text-4xl mb-14 reveal">
						How the pieces fit together.
					</h2>

					<div className="grid sm:grid-cols-2 gap-8 reveal-group">
						{SOLUTION_FLOW.map((flow) => (
							<div
								key={flow.role}
								className="reveal-item rounded-2xl bg-cream border border-char/10 p-7 sm:p-8">
								<p className="font-mono text-xs uppercase tracking-[0.2em] text-ember mb-5">
									{flow.role}
								</p>
								<div className="flex flex-col">
									{flow.steps.map((step, i) => (
										<div key={step}>
											<p className="font-body text-lg text-char">{step}</p>
											{i < flow.steps.length - 1 && (
												<div className="my-3 ml-2 h-5 w-px bg-char/20" />
											)}
										</div>
									))}
								</div>
							</div>
						))}
					</div>

					<div className="mt-12 reveal">
						<p className="font-heading font-semibold text-xl mb-5">
							What the system does
						</p>
						<div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
							{SYSTEM_DOES.map((item) => (
								<div
									key={item}
									className="rounded-xl bg-cream border border-char/10 px-4 py-4 text-sm font-medium text-char/80">
									{item}
								</div>
							))}
						</div>
					</div>
				</div>
			</section> */}

			{/* ============================================================ */}
			{/* 5. FEATURE SHOWCASE                                            */}
			{/* ============================================================ */}
			<section className="px-6 sm:px-10 lg:px-16 py-20 sm:py-28">
				<div className="max-w-6xl mx-auto">
					<SectionLabel>Feature Showcase</SectionLabel>
					<h2 className="font-heading font-bold text-3xl sm:text-4xl mb-16 reveal">
						What it actually does, day to day.
					</h2>

					<div className="space-y-20 sm:space-y-28">
						{FEATURES.map((f, i) => {
							const Icon = f.icon;
							const reversed = i % 2 === 1;
							return (
								<div
									key={f.title}
									className={`reveal grid md:grid-cols-2 gap-10 md:gap-14 items-center ${
										reversed ? "md:[&>*:first-child]:order-2" : ""
									}`}>
									<ImgPlaceholder
										label={`Screenshot — ${f.title}`}
										className="aspect-[16/10] w-full"
									/>
									<div>
										<div className="w-11 h-11 rounded-lg bg-ember/10 text-ember flex items-center justify-center mb-5">
											<Icon className="text-lg" />
										</div>
										<h3 className="font-heading font-semibold text-2xl mb-3">
											{f.title}
										</h3>
										<p className="font-body text-char/70 leading-relaxed max-w-md">
											{f.copy}
										</p>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</section>

			{/* ============================================================ */}
			{/* 6. BEHIND THE SCENES                                           */}
			{/* ============================================================ */}
			<section className="px-6 sm:px-10 lg:px-16 py-20 sm:py-28 bg-char text-cream">
				<div className="max-w-6xl mx-auto">
					<SectionLabel>Behind The Scenes</SectionLabel>
					<h2 className="font-heading font-bold text-3xl sm:text-4xl mb-14 reveal">
						The technical decisions.
					</h2>

					<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 reveal-group">
						{BEHIND_SCENES.map((b) => {
							const Icon = b.icon;
							return (
								<div
									key={b.title}
									className="reveal-item rounded-xl bg-cream/5 border border-cream/10 p-6">
									<Icon className="text-ember text-xl mb-4" />
									<p className="font-heading font-semibold mb-2">{b.title}</p>
									<p className="text-sm text-cream/65 leading-relaxed">
										{b.copy}
									</p>
								</div>
							);
						})}
					</div>
				</div>
			</section>

			{/* ============================================================ */}
			{/* 7. AI COLLABORATION                                            */}
			{/* ============================================================ */}
			<section className="px-6 sm:px-10 lg:px-16 py-20 sm:py-28 bg-sand">
				<div className="max-w-5xl mx-auto">
					<SectionLabel>Building Alongside AI</SectionLabel>
					<h2 className="font-heading font-bold text-3xl sm:text-4xl mb-8 reveal">
						I didn&apos;t hide AI from this project. I used it well.
					</h2>
					<p className="reveal font-body text-char/70 leading-relaxed max-w-2xl mb-10">
						This project was developed through a collaborative workflow between
						human problem-solving and AI-assisted development.
					</p>

					<div className="grid md:grid-cols-2 gap-10 md:gap-16">
						<div className="reveal">
							<p className="font-heading font-semibold text-lg mb-4">
								AI helped accelerate
							</p>
							<div className="flex flex-wrap gap-2.5">
								{AI_ASSISTED.map((a) => (
									<span
										key={a}
										className="font-mono text-xs px-3 py-1.5 rounded-full bg-cream border border-char/10 text-char/70">
										{a}
									</span>
								))}
							</div>
							<p className="font-body text-char/70 leading-relaxed mt-7">
								Final business logic, requirements, and technical decisions were
								validated and adapted to real operational workflows.
							</p>
						</div>

						<div className="reveal-group flex flex-col gap-0">
							{AI_FLOW.map((step, i) => (
								<div key={step} className="reveal-item">
									<div className="rounded-lg bg-cream border border-char/10 px-4 py-3 text-sm font-medium text-char">
										{step}
									</div>
									{i < AI_FLOW.length - 1 && (
										<div className="h-5 w-px bg-char/20 ml-4" />
									)}
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* ============================================================ */}
			{/* 8. CHALLENGES SOLVED                                           */}
			{/* ============================================================ */}
			<section className="px-6 sm:px-10 lg:px-16 py-20 sm:py-28">
				<div className="max-w-6xl mx-auto">
					<SectionLabel>Challenges Solved</SectionLabel>
					<h2 className="font-heading font-bold text-3xl sm:text-4xl mb-14 reveal">
						Friction, and what removed it.
					</h2>

					<div className="grid sm:grid-cols-3 gap-5 reveal-group">
						{CHALLENGES.map((c) => (
							<div
								key={c.challenge}
								className="reveal-item rounded-xl border border-char/10 p-6 bg-sand/60">
								<p className="font-mono text-[10px] uppercase tracking-[0.2em] text-char/40 mb-2">
									Challenge
								</p>
								<p className="font-body text-char mb-5 leading-snug">
									{c.challenge}
								</p>
								<p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ember mb-2">
									Solution
								</p>
								<p className="font-body text-char/75 leading-snug">
									{c.solution}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* ============================================================ */}
			{/* 9. WHAT I LEARNED                                              */}
			{/* ============================================================ */}
			<section className="px-6 sm:px-10 lg:px-16 py-20 sm:py-28 bg-char text-cream">
				<div className="max-w-4xl mx-auto">
					<SectionLabel>What I Learned</SectionLabel>
					<p className="reveal font-heading font-bold text-2xl sm:text-3xl leading-snug mb-10">
						Building software for real users is different from building
						tutorials.
					</p>
					<div className="flex flex-wrap gap-3 reveal-group">
						{LEARNED.map((l) => (
							<span
								key={l}
								className="reveal-item font-body text-sm sm:text-base px-4 py-2 rounded-full bg-cream/8 border border-cream/15 text-cream/85">
								{l}
							</span>
						))}
					</div>
				</div>
			</section>

			{/* ============================================================ */}
			{/* 10. FUTURE VISION                                              */}
			{/* ============================================================ */}
			<section className="px-6 sm:px-10 lg:px-16 py-20 sm:py-28">
				<div className="max-w-4xl mx-auto">
					<SectionLabel>Future Vision</SectionLabel>
					<h2 className="font-heading font-bold text-3xl sm:text-4xl mb-14 reveal">
						The roadmap stays alive.
					</h2>

					<div className="roadmap-track relative">
						<div className="absolute top-[7px] left-0 right-0 h-px bg-char/15" />
						<div className="roadmap-line-fill absolute top-[7px] left-0 h-px bg-ember w-full" />
						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-6">
							{ROADMAP.map((r) => (
								<div key={r.label} className="relative pt-6">
									<span
										className={`absolute top-0 left-0 w-3.5 h-3.5 rounded-full -translate-y-1/2 ${
											r.done ? "bg-ember" : "bg-cream border-2 border-char/25"
										}`}
									/>
									<p
										className={`text-sm sm:text-base font-medium ${
											r.done ? "text-char" : "text-char/45"
										}`}>
										{r.label}
									</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* ============================================================ */}
			{/* 11. CLOSING                                                    */}
			{/* ============================================================ */}
			<section className="px-6 sm:px-10 lg:px-16 py-24 sm:py-32 bg-sand text-center">
				<div className="max-w-2xl mx-auto reveal">
					<p className="font-body text-char/70 leading-relaxed mb-3">
						This project represents my approach to software development:
					</p>
					<p className="font-heading font-semibold text-xl sm:text-2xl leading-relaxed text-char mb-12">
						Identify a real problem. Understand the workflow. Design a solution.
						Use modern tools and AI effectively. Ship practical software.
					</p>

					<div className="flex flex-wrap items-center justify-center gap-4">
						<Link
							href="/#projects"
							className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-char text-cream font-medium hover:bg-ember transition-colors">
							<FaArrowLeft className="text-xs" />
							Back to Portfolio
						</Link>
						<a
							href="https://github.com/OakSoeHtooAung/shal-phyoke-pos"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-char/20 text-char font-medium hover:border-ember hover:text-ember transition-colors">
							<FaGithub />
							View Github
						</a>
						<a
							href="https://shal-phyoke-pos.netlify.app/order"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-char/20 text-char font-medium hover:border-ember hover:text-ember transition-colors">
							<FaPlay className="text-xs" />
							Live Demo
						</a>
					</div>
				</div>
			</section>
		</div>
	);
}
