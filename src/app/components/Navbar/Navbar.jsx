"use client";

import { PiDownloadSimpleThin } from "react-icons/pi";

const Navbar = () => {
	const handleDownload = () => {
		const resumePath =
			"https://ssnrczwkkznqqygncxti.supabase.co/storage/v1/object/public/media/resume/Software%20Engineer%20Resume%20-%20Oak%20Soe%20Htoo%20Aung.pdf";
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
