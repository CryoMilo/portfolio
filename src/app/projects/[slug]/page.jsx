const ProjectDetails = () => {
	const projectData = {
		projectName: "Urban Coffee Club",
		colors: [
			{
				name: "Primary",
				color: "bg-[#1f232c]",
			},
			{
				name: "Secondary",
				color: "bg-[#dfd6d1]",
			},
			{
				name: "Accent",
				color: "bg-[#83746e]",
			},
		],
		techList: [],
		demoLink: "",
		githubLink: "",
		description: "",
		images: [],
	};

	return (
		<section className="container pt-10">
			<div className="w-full h-[400px] bg-white relative overflow-hidden">
				<h1 className="text-6xl w-[40%]">{projectData.projectName}</h1>
				<div className="absolute right-0 bottom-0 w-[40%] h-full grid grid-cols-3 gap-5 -rotate-[28deg]">
					<div className="bg-pink-300 col-span-2 w-full h-40"></div>
					<div className="bg-pink-300 w-full h-40"></div>
					<div className="bg-pink-300 w-full h-40"></div>
					<div className="bg-pink-300 col-span-2 w-full h-40"></div>
					<div className="bg-pink-300 w-full h-40"></div>
					<div className="bg-pink-300 w-full h-40"></div>
					<div className="bg-pink-300 w-full h-40"></div>
					<div className="bg-pink-300 w-full h-40"></div>
					<div className="bg-pink-300 w-full h-40"></div>
				</div>
			</div>
			<div className="flex justify-between items-start md:items-center py-5 flex-col-reverse md:flex-row gap-5">
				<p>linktowebsite.github.repo</p>
				<div className="flex gap-2">
					<div className="bg-gray-400 w-10 h-10"></div>
					<div className="bg-gray-400 w-10 h-10"></div>
					<div className="bg-gray-400 w-10 h-10"></div>
					<div className="bg-gray-400 w-10 h-10"></div>
				</div>
			</div>
			<div className="flex flex-col-reverse md:grid md:grid-cols-2 mt-20 md:divide-x-2 relative">
				{/* Colors Section */}
				<div className="pb-64 pr-10">
					<p className="text-2xl font-semibold mb-4">Colors</p>
					<div className="flex gap-5 flex-wrap">
						{/* <div className="flex flex-col items-center">
							<div className="w-20 h-20 bg-gray-300"></div>
							<p className="mt-2">Primary</p>
						</div>
						<div className="flex flex-col items-center">
							<div className="w-20 h-20 bg-gray-300"></div>
							<p className="mt-2">Secondary</p>
						</div> */}
						{projectData.colors.map((color, index) => (
							<div key={index} className="flex flex-col items-center">
								<div className={`w-20 h-20 ${color.color}`}></div>
								<p className="mt-2">{color.name}</p>
							</div>
						))}
					</div>
				</div>
				<article className="md:text-right">
					<p className="text-2xl font-semibold mb-4">About</p>
					<p className="md:pl-10 pb-20 md:pb-64">
						Lorem ipsum odor amet, consectetuer adipiscing elit. Pellentesque
						quis est scelerisque faucibus sodales ultrices. Viverra himenaeos
						sem lobortis fames arcu nascetur habitant fringilla. Pulvinar proin
						mi pellentesque condimentum turpis. Fringilla etiam at interdum,
						inceptos sem leo. Diam in non neque hendrerit ante odio nascetur.
					</p>
				</article>
				<div className="w-[200px] h-[100px] rounded-tr-full rounded-tl-full bg-gray-400 absolute left-1/2 bottom-0 -translate-x-1/2 grid place-items-center">
					<p className="text-lg translate-y-1/2">Demo</p>
				</div>
			</div>
		</section>
	);
};

export default ProjectDetails;
