"use client";

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import OutgoingCallModal from "./OutgoingCall";
import ChatPage from "./ChatPage";

const Contact = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [callEnded, setCallEnded] = useState(false);
	const buttonRef = useRef(null);
	const magneticRef = useRef(null);

	const openModal = () => setIsModalOpen(true);
	const closeModal = () => setIsModalOpen(false);

	// GSAP Magnetic Effect
	useEffect(() => {
		const button = buttonRef.current;

		// Add mousemove listener
		const handleMouseMove = (e) => {
			const { clientX, clientY } = e;

			// Get button position and dimensions
			const rect = button.getBoundingClientRect();
			const centerX = rect.left + rect.width / 2;
			const centerY = rect.top + rect.height / 2;

			// Calculate offset relative to cursor
			const deltaX = (clientX - centerX) * 0.5;
			const deltaY = (clientY - centerY) * 0.5;

			// GSAP Animation
			gsap.to(button, {
				x: deltaX,
				y: deltaY,
				duration: 0.2,
				ease: "none",
			});
		};

		// Add event listeners
		if (button) {
			button.addEventListener("mousemove", handleMouseMove);
			button.addEventListener("mouseleave", () => {
				gsap.to(button, { x: 0, y: 0, duration: 0.3, ease: "none" });
			});
		}

		// Cleanup listeners
		return () => {
			if (button) {
				button.removeEventListener("mousemove", handleMouseMove);
			}
		};
	}, []);

	return (
		<div id="contact" className="container min-h-[60vh] relative">
			{!callEnded && (
				<div
					ref={magneticRef}
					className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
					<button
						ref={buttonRef}
						onClick={openModal}
						className="bg-primary-light hover:bg-primary text-white font-semibold py-2 px-4 rounded-full h-36 w-36 transition-transform">
						Contact Me
					</button>
				</div>
			)}

			{callEnded && (
				<>
					<h3 className="text-4xl pb-10 font-body">
						Contact <span className="text-primary-light">Me</span>
					</h3>

					<ChatPage />
				</>
			)}

			{/* Modal */}
			<OutgoingCallModal
				isOpen={isModalOpen}
				onClose={closeModal}
				callEnded={callEnded}
				setCallEnded={setCallEnded}
			/>
		</div>
	);
};

export default Contact;
