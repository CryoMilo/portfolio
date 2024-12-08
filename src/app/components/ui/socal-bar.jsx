import { LuFacebook, LuInstagram, LuGithub, LuLinkedin } from "react-icons/lu";

const SocialBar = () => {
	return (
		<div className="flex flex-col gap-4 items-center text-2xl">
			<LuGithub />
			<LuLinkedin />
			<LuInstagram />
			<LuFacebook />
			<div className="border-l-2 border-gray-500 h-[100px]"></div>
		</div>
	);
};

export default SocialBar;
