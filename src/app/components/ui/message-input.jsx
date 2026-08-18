import { IoSend } from "react-icons/io5";

const MessageInput = ({ msg, setMsg, error }) => {
	return (
		<div className="p-4 border-y bg-white rounded-b-xl">
			<div className="flex items-center">
				<input
					type="text"
					value={msg}
					onChange={(e) => setMsg(e.target.value)}
					placeholder="Write your message..."
					className="flex-1 p-3 border rounded-full focus:outline-none"
				/>
				<button
					type="submit"
					className="ml-4 bg-primary-light text-white p-3 rounded-full hover:bg-primary">
					<IoSend size={20} />
				</button>
			</div>
			{error === "msg" && (
				<p className="text-red-500 text-sm pl-4 pt-2">Message is required</p>
			)}
		</div>
	);
};

export default MessageInput;
