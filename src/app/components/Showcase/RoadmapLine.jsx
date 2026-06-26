"use client";

export default function RoadmapLine() {
	return (
		<>
			{/* Base Line */}

			<div
				className="
					absolute
					left-16
					right-16
					top-1/2
					-translate-y-1/2
					h-px
					bg-primary
				"
			/>

			{/* Progress */}

			<div
				className="
					roadmap-progress-line
					absolute
					left-16
					top-1/2
					-translate-y-1/2
					h-[3px]
					bg-ember
					rounded-full
				"
				style={{ width: 0 }}
			/>

			{/* Glow */}

			<div
				className="
					roadmap-progress-line
					absolute
					left-16
					top-1/2
					-translate-y-1/2
					h-4
					bg-primary-light
					blur-3xl
					rounded-full
					pointer-events-none
				"
				style={{ width: 0 }}
			/>
		</>
	);
}
