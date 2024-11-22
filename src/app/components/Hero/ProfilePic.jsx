import Image from "next/image";

const ProfilePic = () => {
	return (
		<div className="w-[450px] aspect-square relative">
			<Image
				src="/images/profile-background.jpg"
				alt="profile-pic"
				fill
				className="object-cover object-center rounded-full bg-black"
			/>
		</div>
	);
};

export default ProfilePic;
