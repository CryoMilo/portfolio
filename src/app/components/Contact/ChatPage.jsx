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

import { GoogleGenerativeAI } from "@google/generative-ai";

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

	// Let's set up Gemini with a clear identity
	const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY);
	const model = genAI.getGenerativeModel({
		model: "gemini-2.5-flash-lite",
		systemInstruction: `You are Milo, the friendly and professional AI assistant for Oak Soe Htoo Aung (Oak). 
		Your job is to help visitors learn about Oak's skills, projects, and experience.
		
		Here is the "source of truth" about Oak: ${JSON.stringify(myData)}.
		
		Keep your responses helpful, concise, and stay in character as Milo. 
		If you don't know something, just say so politely and suggest they contact Oak directly via email.`,
	});

	const onSubmit = (data) => {
		if (data.msg) {
			const userMessage = { type: "outgoing", text: data.msg };
			// We update the UI immediately
			setMessages((prev) => [...prev, userMessage]);

			// And then we trigger the API call with the full context
			sendMessage(data.msg, data.name);
			methods.reset({ msg: "" });
		}
	};

	const sendMessage = async (text, sender) => {
		setLoading(true);
		try {
			const history = messages.slice(1).map((m) => ({
				role: m.type === "outgoing" ? "user" : "model",
				parts: [{ text: m.text }],
			}));

			// Start a fresh chat session with the existing history
			const chat = model.startChat({ history });

			// Send the new message and wait for the magic
			const result = await chat.sendMessage(text);
			const response = await result.response;
			const botText = response.text();

			setMessages((prev) => [...prev, { type: "incoming", text: botText }]);
		} catch (error) {
			console.error("Milo had a hiccup:", error);
			setMessages((prev) => [
				...prev,
				{
					type: "incoming",
					text: "I'm having a bit of trouble connecting right now. Maybe try again in a second?",
				},
			]);
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
				<div className="flex h-[80vh] flex-col flex-1 bg-white rounded-xl border-2">
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
							<div className="p-3">
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
