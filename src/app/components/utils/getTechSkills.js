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
	SupabaseOriginal,
	ReduxOriginal,
	PostgresqlOriginal,
	NodejsOriginal,
	VitejsOriginal,
	GitOriginal,
} from "devicons-react";
import StrapiOriginal from "../../../../public/icons/StrapiOriginal";
import GsapOriginal from "../../../../public/icons/GsapOriginal";

export const techSkillIcons = {
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
	supabase: SupabaseOriginal,
	redux: ReduxOriginal,
	postgres: PostgresqlOriginal,
	nodejs: NodejsOriginal,
	vite: VitejsOriginal,
	git: GitOriginal,
};

export const getTechSkillIcon = (skillName) => {
	if (techSkillIcons.hasOwnProperty(skillName)) {
		return techSkillIcons[skillName];
	}

	return null;
};
