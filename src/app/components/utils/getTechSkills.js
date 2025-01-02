import {
	Css3Original,
	ExpressOriginal,
	FigmaOriginal,
	Html5Original,
	JavascriptOriginal,
	MongodbOriginal,
	NextjsOriginal,
	ReactOriginal,
	TailwindcssOriginal,
} from "devicons-react";

const techSkillIcons = {
	css: Css3Original,
	express: ExpressOriginal,
	figma: FigmaOriginal,
	html: Html5Original,
	javascript: JavascriptOriginal,
	mongodb: MongodbOriginal,
	nextjs: NextjsOriginal,
	react: ReactOriginal,
	tailwind: TailwindcssOriginal,
};

export const getTechSkillIcon = (skillName) => {
	if (techSkillIcons.hasOwnProperty(skillName)) {
		return techSkillIcons[skillName];
	}

	return null;
};
