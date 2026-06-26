"use client";

import { FaMapMarkerAlt } from "react-icons/fa";

export default function RoadmapNode({ node, index, current }) {
	const isTop = index % 2 === 0;
	const isPast = index <= current;
	const isCurrent = index === current;

	return (
		<div className="roadmap-node relative flex justify-center">
			{/* ================================================= */}
			{/* TOP CARD */}
			{/* ================================================= */}

			{isTop && (
				<div className="absolute bottom-12 w-56">
					<div
						className={`
							group
							relative
							rounded-3xl
							border
							p-6
							backdrop-blur-xl
							transition-all
							duration-300
							hover:-translate-y-2
							hover:shadow-2xl

							${isPast ? "border-ember/30 bg-white shadow-xl" : "border-char/10 bg-white/70"}
						`}>
						<div className="text-xs tracking-[0.25em] text-ember font-mono mb-3">
							STEP {String(index + 1).padStart(2, "0")}
						</div>

						<h3
							className={`
								font-heading
								font-bold
								text-lg
								leading-tight
								mb-2

								${isPast ? "text-char" : "text-char/40"}
							`}>
							{node.label}
						</h3>

						<p className="text-sm text-char/60 leading-relaxed">
							{node.description}
						</p>
					</div>
				</div>
			)}

			{/* ================================================= */}
			{/* BOTTOM CARD */}
			{/* ================================================= */}

			{!isTop && (
				<div className="absolute top-12 w-56">
					<div
						className={`
							group
							relative
							rounded-3xl
							border
							p-6
							backdrop-blur-xl
							transition-all
							duration-300
							hover:translate-y-2
							hover:shadow-2xl

							${isPast ? "border-ember/30 bg-white shadow-xl" : "border-char/10 bg-white/70"}
						`}>
						<div className="text-xs tracking-[0.25em] text-ember font-mono mb-3">
							STEP {String(index + 1).padStart(2, "0")}
						</div>

						<h3
							className={`
								font-heading
								font-bold
								text-lg
								leading-tight
								mb-2

								${isPast ? "text-char" : "text-char/40"}
							`}>
							{node.label}
						</h3>

						<p className="text-sm text-char/60 leading-relaxed">
							{node.description}
						</p>
					</div>
				</div>
			)}

			{/* ================================================= */}
			{/* DOTTED GUIDE */}
			{/* ================================================= */}

			<div
				className={`
					absolute
					left-1/2
					-translate-x-1/2
					border-l-2
					border-dashed
					border-char/15

					${isTop ? "bottom-6 h-8" : "top-6 h-8"}
				`}
			/>

			{/* ================================================= */}
			{/* MAP PIN */}
			{/* ================================================= */}

			{isCurrent && (
				<div className="roadmap-pin absolute -top-16">
					<div className="relative">
						<div className="absolute inset-0 blur-xl bg-ember/30 rounded-full" />
					</div>
				</div>
			)}

			{/* ================================================= */}
			{/* NODE */}
			{/* ================================================= */}

			<div
				className={`
					relative
					z-20
					w-7
					h-7
					rounded-full
					border-[3px]
					bg-white
					transition-all
					duration-300

					${isPast ? "border-ember" : "border-char/20"}

					${isCurrent ? "ring-8 ring-primary-light" : ""}
				`}>
				<div
					className={`
						absolute
						inset-[5px]
						rounded-full

						${isPast ? "bg-ember" : "bg-char/15"}
					`}
				/>
			</div>
		</div>
	);
}
