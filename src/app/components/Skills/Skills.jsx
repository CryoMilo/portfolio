import {
	JavascriptOriginal,
	MongodbOriginal,
	NextjsOriginal,
	NodejsOriginal,
	ReactOriginal,
	TailwindcssOriginal,
} from "devicons-react";

const Skills = () => {
	return (
		<div className="container my-24">
			<div className="h-[80vh] relative overflow-hidden">
				<div
					className="icon absolute animate-float-1"
					style={{ top: "10%", left: "20%" }}>
					<ReactOriginal size={100} />
				</div>
				<div
					className="icon absolute animate-float-2"
					style={{ top: "30%", left: "60%" }}>
					<TailwindcssOriginal size={100} />
				</div>
				<div
					className="icon absolute animate-float-3"
					style={{ top: "50%", left: "40%" }}>
					<JavascriptOriginal size={100} />
				</div>
				<div
					className="icon absolute animate-float-4"
					style={{ top: "20%", left: "80%" }}>
					<NextjsOriginal size={100} />
				</div>
				<div
					className="icon absolute animate-float-5"
					style={{ top: "70%", left: "30%" }}>
					<MongodbOriginal size={100} />
				</div>
				<div
					className="icon absolute animate-float-6"
					style={{ top: "60%", left: "10%" }}>
					<NodejsOriginal size={100} />
				</div>
			</div>
		</div>
	);
};

export default Skills;
