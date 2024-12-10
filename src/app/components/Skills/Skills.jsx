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
		size: 100,
		position: { top: "15%", left: "10%" },
		animation: "animate-float-1",
	},
	{
		component: TailwindcssOriginal,
		size: 100,
		position: { top: "20%", left: "60%" },
		animation: "animate-float-2",
	},
	{
		component: JavascriptOriginal,
		size: 100,
		position: { top: "50%", left: "10%" },
		animation: "animate-float-3",
	},
	{
		component: NextjsOriginal,
		size: 100,
		position: { top: "20%", left: "80%" },
		animation: "animate-float-4",
	},
	{
		component: MongodbOriginal,
		size: 100,
		position: { top: "70%", left: "40%" },
		animation: "animate-float-5",
	},
	{
		component: ExpressOriginal,
		size: 100,
		position: { top: "18%", left: "30%" },
		animation: "animate-float-6",
	},
	{
		component: Html5Original,
		size: 100,
		position: { top: "80%", left: "70%" },
		animation: "animate-float-6",
	},
	{
		component: Css3Original,
		size: 100,
		position: { top: "60%", left: "80%" },
		animation: "animate-float-6",
	},
	{
		component: FigmaOriginal,
		size: 100,
		position: { top: "80%", left: "20%" },
		animation: "animate-float-6",
	},
];

const Skills = () => {
	return (
		<div className="container my-24">
			<div className="h-[80vh] relative overflow-hidden">
				<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
					<p className="text-5xl">My Skills</p>
					<p>I am confident in these</p>
				</div>
				{skillIcons.map(
					({ component: Icon, size, position, animation }, index) => (
						<div
							key={index}
							className={`icon absolute ${animation}`}
							style={{ top: position.top, left: position.left }}>
							<Icon size={size} />
						</div>
					)
				)}
			</div>
		</div>
	);
};

export default Skills;
