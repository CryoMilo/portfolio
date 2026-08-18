"use client";

import { useState } from "react";
import OutgoingCallModal from "./OutgoingCall";
import ChatPage from "./ChatPage";

const Contact = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [callEnded, setCallEnded] = useState(false);

	const openModal = () => setIsModalOpen(true);
	const closeModal = () => setIsModalOpen(false);

	return (
		<div id="contact" className="container relative">
			<>
				<h3 className="text-4xl pb-10 font-body">
					Get To Know <span className="text-primary-light">Me</span> Better
				</h3>

				<ChatPage openModal={openModal} />
			</>

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
