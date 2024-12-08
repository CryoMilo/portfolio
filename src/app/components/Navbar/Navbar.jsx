import { PiDownloadSimpleThin } from "react-icons/pi";

const Navbar = () => {
	return (
		<nav className="container my-4 flex justify-end items-center">
			<div className="flex gap-2 items-center">
				<button>Resume</button>
				<PiDownloadSimpleThin className="text-xl" />
			</div>
		</nav>
	);
};

export default Navbar;
