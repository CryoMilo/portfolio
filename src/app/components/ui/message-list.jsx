import Image from "next/image";

const IncomingMsg = ({ text }) => (
	<div className="flex items-start gap-4">
		<div className="w-12 h-12 relative">
			<Image
				src="/images/profile-placeholder.png"
				alt="Profile"
				fill
				className="rounded-full object-cover"
			/>
		</div>
		<div className="bg-white p-3 rounded-lg shadow-sm max-w-md">
			<p>{text}</p>
		</div>
	</div>
);

const OutgoingMsg = ({ text }) => (
	<div className="flex justify-end">
		<div className="bg-purple-200 p-3 rounded-lg shadow-sm max-w-md">
			<p>{text}</p>
		</div>
	</div>
);

const MessageList = ({ messages }) => {
	return (
		<div className="flex-1 overflow-y-auto p-6 bg-gray-50 space-y-4">
			{messages.map((message, index) =>
				message.type === "outgoing" ? (
					<OutgoingMsg key={index} text={message.text} />
				) : (
					<IncomingMsg key={index} text={message.text} />
				)
			)}
		</div>
	);
};

export default MessageList;
