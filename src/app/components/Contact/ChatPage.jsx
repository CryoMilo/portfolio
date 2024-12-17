"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { IoCallOutline, IoVideocamOutline } from "react-icons/io5";
import ContactSidebar from "../ui/contact-sidebar";
import MessageInput from "../ui/message-input";
import MessageList from "../ui/message-list";

const ChatPage = () => {
	// Ref to target the main container
	const chatContainerRef = useRef(null);

	useEffect(() => {
		gsap.fromTo(
			chatContainerRef.current,
			{ opacity: 0, y: 50 },
			{
				opacity: 1,
				y: 0,
				duration: 1,
				delay: 1,
				ease: "power2.out",
			}
		);
	}, []);

	return (
		<div className="mb-20">
			<div className="flex h-[80vh]" ref={chatContainerRef}>
				{/* Sidebar */}
				<ContactSidebar />

				{/* Main Chat */}
				<div className="flex flex-col flex-1 bg-white rounded-xl border-2 m-4">
					{/* Header */}
					<div className="flex items-center justify-between border-b p-4">
						<h2 className="text-lg font-semibold">Oak Soe Htoo Aung</h2>
						<div className="flex gap-4">
							<button className="font-medium">
								<IoCallOutline size={20} />
							</button>
							<button className="font-medium">
								<IoVideocamOutline size={24} />
							</button>
						</div>
					</div>

					{/* Messages */}
					<MessageList />

					{/* Input */}
					<MessageInput />
				</div>
			</div>
		</div>
	);
};

export default ChatPage;
