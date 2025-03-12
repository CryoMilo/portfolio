"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { IoCallOutline, IoVideocamOutline } from "react-icons/io5";
import ContactSidebar from "../ui/contact-sidebar";
import MessageInput from "../ui/message-input";
import MessageList from "../ui/message-list";
import { FormProvider, useForm } from "react-hook-form";
import { myData } from "@/app/lib/myData";
import IncomingMsg from "../ui/incoming-msg";

const ChatPage = ({ openModal }) => {
	const chatContainerRef = useRef(null);
	const messagesEndRef = useRef(null);
	const methods = useForm();
	const [loading, setLoading] = useState(false);
	const [messages, setMessages] = useState([
		{
			type: "incoming",
			text: "Hi! I am Milo. Oak's Personal Assistant. What Can I help you today?",
		},
	]);

	const scrollToBottom = () => {
		messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
	};

	useEffect(() => {
		scrollToBottom();
	}, [messages]);

	const onSubmit = (data) => {
		if (data.msg) {
			setMessages((prevMessages) => [
				...prevMessages,
				{ type: "outgoing", text: data.msg },
			]);
			sendMessage({ text: data.msg, sender: data.name });
			methods.reset({ msg: "" });
		}
	};

	const sendMessage = async ({ text, sender }) => {
		setLoading(true);
		try {
			const response = await fetch(
				"https://openrouter.ai/api/v1/chat/completions",
				{
					method: "POST",
					headers: {
						Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENROUTER_KEY}`,
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
										text: `You are Milo, the assistant of Oak, the owner of this portfolio. Your role is to provide detailed and accurate information about Oak to visitors. You are currently chatting with a visitor (${sender}).
Here is Oak’s information to assist you in responding: ${JSON.stringify(
											myData
										)}.
Additionally, here is the conversation history for context: ${JSON.stringify(
											messages
										)}.
Now, based on this, generate an appropriate response to the following message from the visitor: ${text}.
`,
									},
								],
							},
						],
					}),
				}
			);

			const data = await response.json();

			const markdownText =
				data.choices?.[0]?.message.content ||
				"Looks like Milo is Busy. Please return later!";

			setMessages((prevMessages) => [
				...prevMessages,
				{ type: "incoming", text: markdownText },
			]);
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
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
						<h2 className="text-lg font-semibold">Milo</h2>
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
					<div className="flex-1 overflow-y-auto bg-gray-50">
						<MessageList messages={messages} />
						{loading && (
							<div className="p-6">
								<IncomingMsg text="Typing..." />
							</div>
						)}
						<div ref={messagesEndRef}></div>
					</div>

					{/* Input */}
					<MessageInput />
				</div>
			</form>
		</FormProvider>
	);
};

export default ChatPage;
