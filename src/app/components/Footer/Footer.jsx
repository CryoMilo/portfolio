"use client";

import footerLinks from "./footerLinks.json";
import { FaTwitter, FaFacebook, FaInstagram, FaCoffee } from "react-icons/fa";

export default function Footer() {
	const socialIcons = {
		twitter: <FaTwitter />,
		facebook: <FaFacebook />,
		instagram: <FaInstagram />,
	};

	return (
		<footer className="bg-black text-white py-10 font-primary-light">
			<div className="max-w-5xl mx-auto text-center flex flex-col gap-5 items-center">
				{/* Brand Name */}
				<div className="select-none text-white font-primary uppercase font-bold text-3xl">
					Oak
				</div>

				{/* Navigation Links */}
				<nav className="mb-6">
					<ul className="flex flex-wrap justify-center gap-6">
						{footerLinks.navigationLinks.map((link, index) => (
							<li key={index}>
								<a
									href={link.url}
									className="text-gray-300 hover:text-white transition">
									{link.name.toUpperCase()}
								</a>
							</li>
						))}
					</ul>
				</nav>

				{/* Social Icons */}
				<div className="flex justify-center gap-6 text-accent mb-6">
					{footerLinks.socialLinks.map((social, index) => (
						<a
							key={index}
							href={social.url}
							target="_blank"
							rel="noopener noreferrer"
							className="text-2xl hover:text-primary-light transition">
							{socialIcons[social.icon]}
						</a>
					))}
				</div>

				{/* Copyright Text */}
				<div className="flex gap-2 items-center">
					<p className="text-sm text-gray">
						Copyright ©{new Date().getFullYear()} All rights reserved | Urban
						Coffee Club{" "}
					</p>
					<FaCoffee />
				</div>
			</div>
		</footer>
	);
}
