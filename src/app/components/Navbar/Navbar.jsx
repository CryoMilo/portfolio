import { PiDownloadSimpleThin } from "react-icons/pi";

const Navbar = () => {
	return (
		<nav className="container my-4 flex justify-end items-center">
			<div className="flex gap-2 items-center">
				<a
					href="/documents/resume.pdf"
					download="Oak_Soe_Htoo_Aung_Resume.pdf"
					className="flex items-center gap-1"
				>
					Resume
					<PiDownloadSimpleThin className="text-xl" />
				</a>
			</div>
		</nav>
	);
};

export default Navbar;
