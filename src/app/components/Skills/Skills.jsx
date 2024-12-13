import {
	Css3Original,
	ExpressOriginal,
	FigmaOriginal,
	Html5Original,
	JavascriptOriginal,
	MongodbOriginal,
	NextjsOriginal,
	ReactOriginal,
	TailwindcssOriginal,
} from "devicons-react";

const skillIcons = [
	{
		component: ReactOriginal,
		size: "5em",
		position: { top: "15%", left: "10%" },
		animation: "md:animate-float-1",
	},
	{
		component: TailwindcssOriginal,
		size: "5em",
		position: { top: "10%", left: "60%" },
		animation: "md:animate-float-2",
	},
	{
		component: JavascriptOriginal,
		size: "5em",
		position: { top: "50%", left: "10%" },
		animation: "md:animate-float-3",
	},
	{
		component: NextjsOriginal,
		size: "5em",
		position: { top: "20%", left: "80%" },
		animation: "md:animate-float-4",
	},
	{
		component: MongodbOriginal,
		size: "5em",
		position: { top: "70%", left: "45%" },
		animation: "md:animate-float-5",
	},
	{
		component: Html5Original,
		size: "5em",
		position: { top: "13%", left: "30%" },
		animation: "md:animate-float-4",
	},
	{
		component: ExpressOriginal,
		size: "5em",
		position: { top: "80%", left: "70%" },
		animation: "md:animate-float-2",
	},
	{
		component: Css3Original,
		size: "5em",
		position: { top: "60%", left: "80%" },
		animation: "md:animate-float-5",
	},
	{
		component: FigmaOriginal,
		size: "5em",
		position: { top: "80%", left: "20%" },
		animation: "md:animate-float-1",
	},
];

const Skills = () => {
	return (
		<div className="my-40 md:mb-36 md:mt-0 container">
			<div className="md:h-[70vh] relative overflow-hidden">
				<div className="md:absolute top-1/2 left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:text-center pb-20">
					<p className="text-4xl md:text-5xl font-bold font-body">
						My <span className="text-primary-light">Skills</span>
					</p>
					<p>I am confident in these</p>
				</div>
				<div className="flex flex-wrap gap-8 justify-evenly">
					{skillIcons.map(
						({ component: Icon, size, position, animation }, index) => (
							<div
								key={index}
								className={`icon md:absolute ${animation}`}
								style={{ top: position.top, left: position.left }}>
								<Icon size={size} />
							</div>
						)
					)}
				</div>
			</div>
		</div>
	);
};

export default Skills;
