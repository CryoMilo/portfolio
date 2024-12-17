import Image from "next/image";

const MessageList = () => {
	return (
		<div className="flex-1 overflow-y-auto p-6 bg-gray-50 space-y-4">
			{/* Incoming Message */}
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
					<p>
						Recently I saw properties in a great location that I did not pay
						attention to before 🌞
					</p>
				</div>
			</div>

			{/* Outgoing Message */}
			<div className="flex justify-end">
				<div className="bg-purple-200 p-3 rounded-lg shadow-sm max-w-md">
					<p>He creates an atmosphere of mystery 👏</p>
				</div>
			</div>
		</div>
	);
};

export default MessageList;
