import { PiDownloadSimpleThin } from "react-icons/pi";

const Navbar = () => {
	return (
		<nav className="w-full absolute top-0 left-0">
			<div className="container my-4 flex justify-between items-center">
				<div className="flex gap-2 items-center">
					<button>Resume</button>
					<PiDownloadSimpleThin className="text-xl" />
				</div>
				<div>theme switch</div>
			</div>
		</nav>
	);
};

export default Navbar;
