const ProjectDetails = () => {
	return (
		<section className="container pt-10">
			<div className="w-full h-[400px] bg-gray-400"></div>
			<div className="flex justify-between items-center py-5">
				<p>linktowebsite.github.repo</p>
				<div className="flex gap-2">
					<div className="bg-gray-400 w-10 h-10"></div>
					<div className="bg-gray-400 w-10 h-10"></div>
					<div className="bg-gray-400 w-10 h-10"></div>
					<div className="bg-gray-400 w-10 h-10"></div>
				</div>
			</div>
			<div className="grid grid-cols-2 mt-20 divide-x-2 relative">
				{/* Colors Section */}
				<div className=" pb-64 pr-10">
					<p className="text-2xl font-semibold mb-4">Colors</p>
					<div className="flex gap-5">
						<div className="flex flex-col items-center">
							<div className="w-20 h-20 bg-gray-300"></div>
							<p className="mt-2">Primary</p>
						</div>
						<div className="flex flex-col items-center">
							<div className="w-20 h-20 bg-gray-300"></div>
							<p className="mt-2">Secondary</p>
						</div>
						<div className="flex flex-col items-center">
							<div className="w-20 h-20 bg-gray-300"></div>
							<p className="mt-2">Accent</p>
						</div>
					</div>
				</div>
				<article className="text-right">
					<p className="text-2xl font-semibold mb-4">About</p>
					<p className="pl-10 pb-64">
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
