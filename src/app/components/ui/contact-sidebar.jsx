import Image from "next/image";

const ContactSidebar = () => {
	return (
		<div className="w-80 bg-white flex-col border-2 m-4 rounded-xl hidden lg:flex">
			{/* Profile */}
			<div className="p-6 text-center border-b">
				<div className="flex justify-center mb-2">
					<Image
						src="/images/profile-placeholder.png"
						alt="Profile"
						width={60}
						height={60}
						className="rounded-full"
					/>
				</div>
				<h3 className="font-semibold">Anonymous</h3>
				<span className="text-sm">anonymous@gmail.com</span>
			</div>

			{/* Chat List */}
			<div className="flex-1 overflow-y-auto">
				<div className="m-4 p-3 gap-4 flex items-center bg-gray-200 rounded-md">
					<div className="w-12 h-12 relative">
						<Image
							src="/images/profile-background.jpg"
							alt="Profile"
							fill
							className="rounded-full object-cover"
						/>
					</div>
					<div className="flex items-center justify-between">
						<div>
							<h4 className="font-semibold">Oak Soe Htoo Aung</h4>
							<p className="text-sm text-gray-400">Active 2min ago</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactSidebar;
