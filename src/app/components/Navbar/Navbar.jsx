"use client";

import { PiDownloadSimpleThin } from "react-icons/pi";
import { myData } from "@/app/lib/myData";

const Navbar = () => {
	const handleDownload = () => {
		const resumePath = myData.resume;
		const link = document.createElement("a");
		link.href = resumePath;
		link.download = "Oak_Soe_Htoo_Aung_Resume.pdf";
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};

	return (
		<nav className="container my-4 flex justify-end items-center">
			<div className="flex gap-2 items-center">
				<button onClick={handleDownload} className="flex items-center gap-1">
					Resume
					<PiDownloadSimpleThin className="text-xl" />
				</button>
			</div>
		</nav>
	);
};

export default Navbar;
