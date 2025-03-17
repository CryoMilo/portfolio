import Image from "next/image";
import { useFormContext } from "react-hook-form";

const ContactSidebar = () => {
	const {
		register,
		formState: { errors },
	} = useFormContext();

	return (
		<div className="lg:w-80 bg-white flex-col border-2 rounded-xl">
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
				<div className="flex items-center flex-col">
					<input
						{...register("name", { required: "Please insert your name" })}
						type="text"
						defaultValue=""
						placeholder="You are?"
						className="font-semibold text-center bg-transparent border-none outline-none"
					/>
					{/* <input
						{...register("email", {
							required: "Please insert your email",
							pattern: {
								value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
								message: "Invalid email format",
							},
						})}
						type="email"
						defaultValue=""
						placeholder="anonymous@gmail.com"
						className="text-sm text-center bg-transparent border-none outline-none"
					/> */}
					<p className="text-red-500 text-sm">{errors.name?.message}</p>
				</div>
			</div>

			{/* Chat List */}
			<div className="flex-1 overflow-y-auto hidden lg:block">
				<div className="w-full h-full pt-[50%]">
					<video
						autoPlay
						muted
						playsInline
						src="/videos/milo.mov"
						className="rounded-md object-cover w-auto h-auto max-w-full max-h-full"
					/>
				</div>
			</div>
		</div>
	);
};

export default ContactSidebar;
