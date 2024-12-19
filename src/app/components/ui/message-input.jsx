import { useFormContext } from "react-hook-form";
import { IoSend } from "react-icons/io5";

const MessageInput = () => {
	const {
		register,
		formState: { errors },
	} = useFormContext();

	return (
		<div className="p-4 border-y bg-white rounded-b-xl">
			<div className="flex items-center">
				<input
					{...register("msg", { required: "Message is required" })}
					type="text"
					placeholder="Write your message..."
					className="flex-1 p-3 border rounded-full focus:outline-none"
				/>
				<button
					type="submit"
					className="ml-4 bg-primary-light text-white p-3 rounded-full hover:bg-primary">
					<IoSend size={20} />
				</button>
			</div>
			<p className="text-red-500 text-sm pl-4 pt-2">
				{errors.msg?.message || errors.msg?.message}
			</p>
		</div>
	);
};

export default MessageInput;
