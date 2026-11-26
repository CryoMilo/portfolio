"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

const FloatingMilo = () => {
	const [showPopup, setShowPopup] = useState(false);
	const [playCount, setPlayCount] = useState(0);
	// Hidden while the chat itself is on screen (the button would cover its send button),
	// and on phones until the visitor scrolls past the hero (it would cover the hero's button).
	const [hidden, setHidden] = useState(false);
	const videoRef = useRef(null);
	const router = useRouter();

	useEffect(() => {
		const showTimer = setTimeout(() => {
			setShowPopup(true);
		}, 1000);

		const hideTimer = setTimeout(() => {
			setShowPopup(false);
		}, 6000); // 1s delay + 5s visibility

		return () => {
			clearTimeout(showTimer);
			clearTimeout(hideTimer);
		};
	}, []);

	useEffect(() => {
		let contactVisible = false;
		const update = () => {
			const isPhone = window.innerWidth < 768;
			const pastHero = window.scrollY > window.innerHeight * 0.6;
			setHidden(contactVisible || (isPhone && !pastHero));
		};

		const contact = document.getElementById("contact");
		let observer;
		if (contact) {
			observer = new IntersectionObserver(
				([entry]) => {
					contactVisible = entry.isIntersecting;
					update();
				},
				{ threshold: 0.15 }
			);
			observer.observe(contact);
		}

		update();
		window.addEventListener("scroll", update, { passive: true });
		window.addEventListener("resize", update);
		return () => {
			observer?.disconnect();
			window.removeEventListener("scroll", update);
			window.removeEventListener("resize", update);
		};
	}, []);

	const handleClick = () => {
		const contactSection = document.getElementById("contact");
		if (contactSection) {
			contactSection.scrollIntoView({ behavior: "smooth" });
			setShowPopup(false);
		} else {
			router.push("/#contact");
			setShowPopup(false);
		}
	};

	const handleVideoEnd = () => {
		if (playCount < 3) {
			setPlayCount((prev) => prev + 1);
			if (videoRef.current) {
				videoRef.current.play();
			}
		}
	};

	return (
		<div
			className={`fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50 flex items-center gap-4 pointer-events-none transition-opacity duration-300 ${
				hidden ? "opacity-0 invisible" : "opacity-100 visible"
			}`}
			aria-hidden={hidden}>
			<div
				className={`relative group transition-all duration-700 ease-out ${
					showPopup ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
				}`}>
				<div className="bg-white/80 backdrop-blur-md px-4 py-2 rounded-xl shadow-lg border border-white/50 text-gray-800 text-sm font-medium whitespace-nowrap">
					Talk with Milo?
					{/* Little arrow pointing to Milo */}
					<div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-white/80 rotate-45 border-t border-r border-white/50" />
				</div>
			</div>
			<button
				onClick={handleClick}
				tabIndex={hidden ? -1 : 0}
				className="w-14 h-14 md:w-20 md:h-20 rounded-full overflow-hidden shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-md bg-gray-400/30 border border-white/20 transition-transform hover:scale-110 active:scale-95 group relative pointer-events-auto"
				aria-label="Scroll to Chat">
				<video
					ref={videoRef}
					src="/videos/milo.mov"
					autoPlay
					muted
					playsInline
					onEnded={handleVideoEnd}
					className="w-full h-full object-cover rounded-full pt-3"
				/>
				{/* Glossy overlay */}
				<div className="absolute inset-0 bg-gradient-to-tr from-white/30 to-transparent pointer-events-none" />
			</button>
		</div>
	);
};

export default FloatingMilo;
