import { PiDownloadSimpleThin } from "react-icons/pi";

const Navbar = () => {
	return (
		<nav className="container my-4 flex justify-between items-center">
			<div className="flex gap-2 items-center">
				<button>Resume</button>
				<PiDownloadSimpleThin className="text-xl" />
			</div>
			<div>theme switch</div>
		</nav>
	);
};

export default Navbar;
