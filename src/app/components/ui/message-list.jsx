import IncomingMsg from "./incoming-msg";

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
				message.type === "incoming" ? (
					<IncomingMsg key={index} text={message.text} />
				) : (
					<OutgoingMsg key={index} text={message.text} />
				)
			)}
		</div>
	);
};

export default MessageList;
