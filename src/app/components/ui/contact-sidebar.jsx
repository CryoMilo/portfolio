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
					<p className="text-red-500 text-sm">{errors.name?.message}</p>
				</div>
			</div>

			<div className="flex-1 overflow-y-auto hidden lg:block">
				<div className="w-full h-full">
					<div className="flex justify-left gap-2 items-center m-4 rounded-md bg-gray-200 border">
						<div className="relative rounded-full">
							<Image
								src="/images/Milo.png"
								alt="milo"
								width={100}
								height={100}
							/>
						</div>
						<div className="flex flex-col">
							<h3>Milo</h3>
							<p className="text-xs opacity-50 flex gap-1 items-center">
								<span className="w-2 h-2 bg-success rounded-full"></span>
								Active 24/7
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactSidebar;
