"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { IoCallOutline, IoVideocamOutline } from "react-icons/io5";
import ContactSidebar from "../ui/contact-sidebar";
import MessageInput from "../ui/message-input";
import MessageList from "../ui/message-list";

import IncomingMsg from "../ui/incoming-msg";

const ChatPage = ({ openModal }) => {
	const chatContainerRef = useRef(null);
	const messagesEndRef = useRef(null);
	const [msg, setMsg] = useState("");
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);
	const [messages, setMessages] = useState([
		{
			type: "incoming",
			text: "Hi! I am Milo. Oak's Personal Assistant. What Can I help you today?",
		},
	]);

	const onSubmit = (e) => {
		e.preventDefault();
		if (loading) return;
		if (!msg.trim()) {
			setError("msg");
			return;
		}
		setError("");

		setMessages((prev) => [...prev, { type: "outgoing", text: msg }]);
		sendMessage(msg);
		setMsg("");
	};

	const sendMessage = async (text) => {
		setLoading(true);
		try {
			const history = messages.slice(1).map((m) => ({
				role: m.type === "outgoing" ? "user" : "model",
				text: m.text,
			}));
			const res = await fetch("/api/chat", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ message: text, history }),
			});
			if (!res.ok) throw new Error(`Chat request failed: ${res.status}`);
			const { reply } = await res.json();
			setMessages((prev) => [...prev, { type: "incoming", text: reply }]);
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
		messagesEndRef.current?.scrollIntoView({ block: "nearest" });
	}, [messages, loading]);

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
		<form
			className="flex flex-col lg:flex-row h-[80vh] mb-20 gap-8"
			ref={chatContainerRef}
			onSubmit={onSubmit}>
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
							aria-label="Start voice call"
							className="font-medium"
							onClick={() => openModal()}>
							<IoCallOutline size={20} />
						</button>
						<button
							type="button"
							aria-label="Start video call"
							className="font-medium">
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
				<MessageInput msg={msg} setMsg={setMsg} error={error} disabled={loading} />
			</div>
		</form>
	);
};

export default ChatPage;
