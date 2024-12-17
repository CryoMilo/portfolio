import { IoSend } from "react-icons/io5";

const MessageInput = () => {
	return (
		<div className="p-4 border-y bg-white rounded-b-xl flex items-center">
			<input
				type="text"
				placeholder="Write your message..."
				className="flex-1 p-3 border rounded-full focus:outline-none"
			/>
			<button className="ml-4 bg-primary-light text-white p-3 rounded-full hover:bg-primary">
				<IoSend size={20} />
			</button>
		</div>
	);
};

export default MessageInput;
