"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { IoCallOutline, IoVideocamOutline } from "react-icons/io5";
import ContactSidebar from "../ui/contact-sidebar";
import MessageInput from "../ui/message-input";
import MessageList from "../ui/message-list";
import { FormProvider, useForm } from "react-hook-form";

const ChatPage = ({ openModal }) => {
	const chatContainerRef = useRef(null);
	const methods = useForm();
	const [messages, setMessages] = useState([]);

	const onSubmit = (data) => {
		if (data.msg) {
			setMessages((prevMessages) => [
				...prevMessages,
				{ type: "outgoing", text: data.msg },
			]);
			sendMessage(data.msg);
			methods.reset({ msg: "" });
		}
	};

	const sendMessage = async (text) => {
		try {
			const response = await fetch(
				"https://openrouter.ai/api/v1/chat/completions",
				{
					method: "POST",
					headers: {
						Authorization:
							"Bearer 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",
						// "HTTP-Referer": "<YOUR_SITE_URL>",
						// "X-Title": "<YOUR_SITE_NAME>",
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						model: "google/gemma-3-27b-it:free",
						messages: [
							{
								role: "user",
								content: [
									{
										type: "text",
										text: text,
									},
								],
							},
						],
					}),
				}
			);

			const data = await response.json();

			const markdownText =
				data.choices?.[0]?.message.content || "No Response Recieved";

			setMessages((prevMessages) => [
				...prevMessages,
				{ type: "incoming", text: markdownText },
			]);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		gsap.fromTo(
			chatContainerRef.current,
			{ opacity: 0, y: 50 },
			{
				opacity: 1,
				y: 0,
				duration: 1,
				delay: 0.5,
				ease: "power2.out",
			}
		);
	}, []);

	return (
		<FormProvider {...methods}>
			<form
				className="flex flex-col lg:flex-row h-[80vh] mb-20 gap-8"
				ref={chatContainerRef}
				onSubmit={methods.handleSubmit(onSubmit)}>
				{/* Sidebar */}
				<ContactSidebar />

				{/* Main Chat */}
				<div className="flex flex-col flex-1 bg-white rounded-xl border-2">
					{/* Header */}
					<div className="flex items-center justify-between border-b p-4">
						<h2 className="text-lg font-semibold">Oak Soe Htoo Aung</h2>
						<div className="flex gap-4">
							<button
								type="button"
								className="font-medium"
								onClick={() => openModal()}>
								<IoCallOutline size={20} />
							</button>
							<button type="button" className="font-medium">
								<IoVideocamOutline size={24} />
							</button>
						</div>
					</div>

					{/* Messages */}
					<MessageList messages={messages} />

					{/* Input */}
					<MessageInput />
				</div>
			</form>
		</FormProvider>
	);
};

export default ChatPage;
