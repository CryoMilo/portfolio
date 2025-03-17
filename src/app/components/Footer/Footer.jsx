"use client";

import { socialLinks } from "../ui/socal-bar";
import footerLinks from "./footerLinks.json";
import { FaCoffee } from "react-icons/fa";

export default function Footer() {
	return (
		<footer className="text-black py-10 font-primary-light">
			<div className="max-w-5xl mx-auto text-center flex flex-col gap-5 items-center">
				{/* Brand Name */}
				<div className="select-none text-black font-primary uppercase font-bold text-3xl">
					Oak
				</div>

				{/* Navigation Links */}
				<nav className="mb-6">
					<ul className="flex flex-wrap justify-center gap-6">
						{footerLinks.navigationLinks.map((link, index) => (
							<li key={index}>
								<a
									href={link.url}
									className="text-black hover:text-gray-400 transition">
									{link.name.toUpperCase()}
								</a>
							</li>
						))}
					</ul>
				</nav>

				{/* Social Icons */}
				<div className="flex justify-center gap-6 text-accent mb-6">
					{socialLinks.map((social, index) => (
						<a
							key={index}
							href={social.url}
							target="_blank"
							rel="noopener noreferrer"
							className="text-2xl hover:text-primary-light transition">
							{social.icon}
						</a>
					))}
				</div>

				{/* Copyright Text */}
				<div className="flex gap-2 items-center">
					<p className="text-sm text-gray">
						Crafted with Caffine and Sleepless Nights by Oak
					</p>
					<FaCoffee />
				</div>
			</div>
		</footer>
	);
}
