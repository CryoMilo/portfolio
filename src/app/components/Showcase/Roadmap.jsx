"use client";

import RoadmapLine from "./RoadmapLine";
import RoadmapNode from "./RoadmapNode";

export default function Roadmap({ nodes, current = 0 }) {
	return (
		<div className="overflow-x-auto overflow-y-visible pb-12 hide-scrollbar">
			<div
				className="
					roadmap-track
					relative
					min-w-[1150px]
					h-[520px]
					px-16
				">
				<RoadmapLine />

				<div
					className="
						grid
						grid-cols-7
						h-full
						items-center
						relative
						z-10
					">
					{nodes.map((node, index) => (
						<RoadmapNode
							key={node.label}
							node={node}
							index={index}
							current={current}
						/>
					))}
				</div>
			</div>
		</div>
	);
}
