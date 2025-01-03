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
	TypescriptOriginal,
} from "devicons-react";
import StrapiOriginal from "../../../../public/icons/StrapiOriginal";
import GsapOriginal from "../../../../public/icons/GsapOriginal";

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
	typescript: TypescriptOriginal,
	strapi: StrapiOriginal,
	gsap: GsapOriginal,
};

export const getTechSkillIcon = (skillName) => {
	if (techSkillIcons.hasOwnProperty(skillName)) {
		return techSkillIcons[skillName];
	}

	return null;
};
