"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaArrowLeft, FaMapMarkerAlt } from "react-icons/fa";
import { LuLayoutGrid } from "react-icons/lu";
import { getTechSkillIcon } from "@/app/components/utils/getTechSkills";
import Image from "next/image";
import {
	STACK,
	STATS,
	PROBLEMS,
	JOURNEY,
	FEATURES,
	BEHIND_SCENES,
	AI_ASSISTED,
	AI_FLOW,
	CHALLENGES,
	LEARNED,
	ROADMAP_NODES,
} from "./constants";
import Roadmap from "@/app/components/Showcase/Roadmap";

gsap.registerPlugin(ScrollTrigger);

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
	const carouselRef = useRef(null);
	const carouselInnerRef = useRef(null);
	const CURRENT_NODE = 4;
	const progress = (CURRENT_NODE / (ROADMAP_NODES.length - 1)) * 100;

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

			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: ".roadmap-track",
					start: "top 70%",
				},
			});

			tl.from(".roadmap-card", {
				y: 40,
				opacity: 0,
				stagger: 0.12,
				duration: 0.7,
				ease: "power3.out",
			});

			tl.from(
				".roadmap-node",
				{
					scale: 0,
					stagger: 0.12,
					duration: 0.45,
					ease: "back.out(2)",
				},
				"-=0.4"
			);

			tl.to(
				".roadmap-progress-line",
				{
					width: "66.666%",
					duration: 1.8,
					ease: "power3.inOut",
				},
				"-=0.5"
			);

			tl.from(
				".roadmap-pin",
				{
					y: -30,
					scale: 0,
					opacity: 0,
					duration: 0.7,
					ease: "back.out(2)",
				},
				"-=0.2"
			);

			/* Challenges Carousel - Infinite Flow */
			const carousel = carouselRef.current;
			const inner = carouselInnerRef.current;

			if (carousel && inner) {
				// Duplicate cards for infinite effect
				const cards = inner.querySelectorAll(".challenge-card");
				const totalWidth = inner.scrollWidth / 2;

				// Create the animation
				const tl = gsap.to(inner, {
					x: -totalWidth,
					duration: 30,
					ease: "none",
					repeat: -1,
					modifiers: {
						x: (x) => {
							// When we've scrolled far enough, wrap around
							if (parseFloat(x) <= -totalWidth) {
								return 0;
							}
							return x;
						},
					},
				});

				// Pause on hover
				carousel.addEventListener("mouseenter", () => tl.pause());
				carousel.addEventListener("mouseleave", () => tl.play());

				return () => {
					tl.kill();
					carousel.removeEventListener("mouseenter", () => tl.pause());
					carousel.removeEventListener("mouseleave", () => tl.play());
				};
			}
		}, rootRef);

		return () => ctx.revert();
	}, []);

	// Duplicate challenges for infinite scroll
	const infiniteChallenges = [...CHALLENGES, ...CHALLENGES, ...CHALLENGES];

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
			<section className="relative sm:mt-10 pt-16 pb-12 sm:pb-12 px-6 sm:px-10 lg:px-16">
				<div className="max-w-6xl mx-auto">
					<h1 className="hero-title font-heading text-primary font-bold text-4xl sm:text-5xl leading-[1.05] max-w-3xl">
						Building a Restaurant
						<span className="block text-ember">Operating System.</span>
					</h1>
					<p className="hero-subtitle font-body text-base sm:text-md text-char/70 max-w-4xl mt-6 leading-relaxed">
						A real-world POS and restaurant management platform, built from
						challenges I encountered while operating my own Burmese food
						business.
					</p>

					{/* Hero media — video */}
					<div className="hero-media relative mt-6 rounded-2xl overflow-hidden border border-char/10 shadow-[0_30px_60px_-25px_rgba(28,25,23,0.35)] bg-char">
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
					<div className="mt-10 sm:mt-6 grid grid-cols-2 sm:grid-cols-4 sm:place-items-center sm:justify-center gap-6 sm:gap-4 border-y border-char/10 py-7">
						{STATS.map((s) => (
							<div
								key={s.label}
								className="hero-stat text-center sm:text-center">
								<p className="font-mono text-2xl sm:text-3xl font-medium text-ember">
									{s.value}
								</p>
								<p className="text-xs sm:text-sm text-char/60 mt-1">
									{s.label}
								</p>
							</div>
						))}
					</div>

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
			{/* 4. FEATURE SHOWCASE                                            */}
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
									<div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl shadow-[0_30px_60px_-25px_rgba(28,25,23,0.35)]">
										<Image
											src={f.imgKey}
											alt={f.title}
											fill
											className="object-fit"
										/>
									</div>
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
			{/* 5. BEHIND THE SCENES                                           */}
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
			{/* 6. AI COLLABORATION                                            */}
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
			{/* 7. CHALLENGES SOLVED - INFINITE CAROUSEL                       */}
			{/* ============================================================ */}
			<section className="px-6 sm:px-10 lg:px-16 py-20 sm:py-28 overflow-hidden">
				<div className="max-w-6xl mx-auto">
					<SectionLabel>Challenges Solved</SectionLabel>
					<h2 className="font-heading font-bold text-3xl sm:text-4xl mb-14 reveal">
						Friction, and what removed it.
					</h2>

					{/* Carousel Container with Faded Ends */}
					<div className="relative">
						{/* Left fade */}
						<div className="absolute left-0 top-0 bottom-0 w-24 sm:w-32 bg-gradient-to-r from-cream via-cream/80 to-transparent z-10 pointer-events-none" />

						{/* Right fade */}
						<div className="absolute right-0 top-0 bottom-0 w-24 sm:w-32 bg-gradient-to-l from-cream via-cream/80 to-transparent z-10 pointer-events-none" />

						{/* Carousel */}
						<div
							ref={carouselRef}
							className="overflow-hidden cursor-grab active:cursor-grabbing">
							<div
								ref={carouselInnerRef}
								className="flex gap-5 will-change-transform"
								style={{ width: "max-content" }}>
								{infiniteChallenges.map((c, index) => (
									<div
										key={`${c.challenge}-${index}`}
										className="challenge-card flex-shrink-0 w-[280px] sm:w-[320px] rounded-xl border border-char/10 p-6 bg-sand/60 hover:border-ember/30 transition-colors">
										<p className="font-mono text-[10px] uppercase tracking-[0.2em] text-char/40 mb-2">
											Challenge
										</p>
										<p className="font-body text-char mb-5 leading-snug min-h-[48px]">
											{c.challenge}
										</p>
										<div className="border-t border-char/5 pt-4">
											<p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ember mb-2">
												Solution
											</p>
											<p className="font-body text-char/75 leading-snug">
												{c.solution}
											</p>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>

					{/* Optional: Scroll indicator */}
					<div className="flex justify-center gap-1.5 mt-8">
						<span className="w-1.5 h-1.5 rounded-full bg-ember" />
						<span className="w-1.5 h-1.5 rounded-full bg-ember/30" />
						<span className="w-1.5 h-1.5 rounded-full bg-ember/30" />
						<span className="w-1.5 h-1.5 rounded-full bg-ember/30" />
						<span className="w-1.5 h-1.5 rounded-full bg-ember/30" />
					</div>
				</div>
			</section>

			{/* ============================================================ */}
			{/* 8. WHAT I LEARNED                                              */}
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
			{/* 9. FUTURE VISION                                              */}
			{/* ============================================================ */}
			<section className="px-6 sm:px-10 lg:px-16 py-24">
				<div className="max-w-7xl mx-auto">
					<SectionLabel>Future Vision</SectionLabel>

					<h2 className="font-heading font-bold text-4xl mb-5 reveal">
						From Restaurant POS to Restaurant OS
					</h2>

					<p className="text-char/60 max-w-2xl mb-20 reveal">
						Every version solves a real operational problem. The goal is to
						evolve beyond a POS into a complete operating system for
						restaurants.
					</p>

					<Roadmap nodes={ROADMAP_NODES} current={4} />
				</div>
			</section>

			{/* ============================================================ */}
			{/* 10. CLOSING                                                    */}
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
					</div>
				</div>
			</section>
		</div>
	);
}
