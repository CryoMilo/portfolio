import Image from "next/image";

const ProfileNav = () => {
	return (
		<div className="min-w-[300px] w-[30vw] aspect-square relative">
			<Image
				src="/images/profile-background.jpg"
				alt="profile-pic"
				fill
				className="object-cover object-center rounded-full bg-black"
			/>
		</div>
	);
};

export default ProfileNav;
