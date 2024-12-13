import Link from "next/link";
import { LuFacebook, LuInstagram, LuGithub, LuLinkedin } from "react-icons/lu";

const socialLinks = [
	{
		id: 1,
		name: "GitHub",
		url: "https://github.com/CryoMilo",
		icon: <LuGithub />,
	},
	{
		id: 2,
		name: "LinkedIn",
		url: "https://www.linkedin.com/in/oak-soe-htoo-aung/",
		icon: <LuLinkedin />,
	},
	{
		id: 3,
		name: "Instagram",
		url: "https://www.instagram.com/damian_needsleep/",
		icon: <LuInstagram />,
	},
	{
		id: 4,
		name: "Facebook",
		url: "https://www.facebook.com/damianNeedSleep",
		icon: <LuFacebook />,
	},
];

const SocialBar = () => {
	return (
		<div className="flex flex-col gap-4 items-center text-2xl">
			{socialLinks.map((link) => (
				<Link key={link.id} target="__blank" href={link.url}>
					{link.icon}
				</Link>
			))}
			<div className="border-l-2 border-gray-500 h-[100px]"></div>
		</div>
	);
};

export default SocialBar;
