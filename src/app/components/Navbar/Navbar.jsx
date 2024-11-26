import { MdFileDownload } from "react-icons/md";

const Navbar = () => {
	return (
		<div className="container my-4 flex justify-between items-center">
			<p>Oak</p>
			<div className="flex gap-2 items-center">
				<button>Download CV</button>
				<MdFileDownload className="text-xl" />
			</div>
		</div>
	);
};

export default Navbar;
