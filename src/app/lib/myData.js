export const myData = {
	name: "Oak Soe Htoo Aung",
	title: "Software Engineer",
	location: "Bangkok, Thailand",
	contact: {
		email: "damianaung2k7@gmail.com",
		linkedin: "https://www.linkedin.com/in/oak-soe-htoo-aung",
		phone: "+66-9-42101324",
	},
	top_skills: [
		"Responsive Web Development",
		"UI/UX Design",
		"Problem-Solving",
		"Attention to Detail",
		"Teamwork",
	],
	languages: {
		English: "Upper Intermediate",
		Burmese: "Native or Bilingual",
		Thai: "Beginner",
		Japanese: "N4",
	},
	certifications: [],
	summary:
		"Software Engineer with a strong foundation in JavaScript, React, and modern web development practices. Experienced in building responsive and accessible user interfaces. Passionate about writing clean, maintainable code and learning new technologies.",
	experience: [
		{
			company: "High Ground Co. Ltd (formerly DSS Corp)",
			positions: [
				{
					title: "Junior React Developer (Part-time)",
					duration: "March 2022 - March 2024",
					location: "Remote",
					time_period: "2 years",
				},
				{
					title: "Intern",
					duration: "December 2021 - March 2022",
					location: "Remote",
					time_period: "4 months",
				},
			],
		},
	],
	education: {
		institution: "Stamford International University",
		degree: "Bachelor of Science",
		field: "Information Technology",
		years: "2016 - 2022",
		gpa: "3.07 / 4.0",
	},
	technical_skills: [
		"JavaScript",
		"TypeScript",
		"React",
		"Next.js",
		"Redux",
		"React Native",
		"Tailwind CSS",
		"SCSS",
		"Bootstrap",
		"Node.js",
		"Express",
		"RESTful APIs",
		"Strapi CMS",
		"MongoDB",
		"PostgreSQL",
		"Supabase",
		"HTML5",
		"CSS",
		"PHP",
		"SQL",
		"Python",
		"Git",
		"GitHub",
		"Docker",
		"Postman",
		"Figma",
		"OOP",
	],
	activities: [
		{
			role: "Mentor & Guest Speaker",
			events: [
				"Mentor in 'Basic Web Development' workshop",
				"Guest Speaker and Mentor in 'Git and GitHub Fundamentals' workshop",
			],
		},
	],
	project_highlights: [
		{
			name: "Portfolio Website",
			description:
				"Designed and developed a minimalist, SEO-optimized portfolio site using Next.js. Integrated a chatbot using Gemini AI via OpenRouter and added smooth transitions with GSAP. Visuals were AI-generated for consistency.",
			stack: ["JavaScript", "Next.js", "GSAP"],
			url: "https://portfolio-de-oak.netlify.app/",
		},
		{
			name: "Urban Coffee Club Website",
			description:
				"Created a responsive, animation-rich coffee shop website using Vite.js and GSAP. Focused on showcasing animation design skills and clean UX.",
			stack: ["JavaScript", "Vite.js", "GSAP"],
			url: "https://urban-coffee-club.vercel.app/",
		},
		{
			name: "Shal Phyoke POS Web App (MVP)",
			description:
				"Built a functional POS system for a real Burmese restaurant using Next.js and Supabase. Included features like inventory, order handling, and authentication. UI was enhanced with GSAP.",
			stack: ["JavaScript", "Next.js", "Supabase", "GSAP", "Tailwind"],
			url: "https://shal-phyoke-pos.netlify.app/order",
		},
	],
	resume: "/documents/resume.pdf",
	projects: [
		{
			project_name: "ShalPhyoke OS",
			intro_text:
				"An Operating System for a real-life Burmese restaurant with inventory and order handling.",
			description:
				"Built a functional POS system for a real Burmese restaurant using Vite and Supabase. Included features like inventory, order handling, and authentication.",
			demo_link: "https://shal-phyoke-pos.netlify.app/order",
			github_link: null,
			document_id: "shal-phyoke-pos",
			responsive: true,
			splash_video: { url: "/videos/pos.mov" },
			mockup_images: [
				{ url: "/images/pos-showcase/pos-1.png", width: 1000, height: 600 },
				{ url: "/images/pos-showcase/pos-2.png", width: 1000, height: 600 },
				{ url: "/images/pos-showcase/pos-3.png", width: 1000, height: 600 },
			],
			highlight_images: [
				{ url: "/images/pos-showcase/feature-1.png" },
				{ url: "/images/pos-showcase/pos-hl-2.png" },
				{ url: "/images/pos-showcase/pos-hl-3.png" },
				{ url: "/images/pos-showcase/feature-3.png" },
			],
			tech_list: ["javascript", "vite", "supabase", "tailwind"],
			palette: [
				{ name: "Brand", color: "#FCC700" },
				{ name: "Accent", color: "#FFFFFF" },
				{ name: "Text", color: "#2F2F2F" },
			],
		},
		{
			project_name: "Portfolio Website",
			intro_text:
				"A minimalist, SEO-optimized portfolio site built with Next.js and GSAP.",
			description:
				"Designed and developed a minimalist, SEO-optimized portfolio site using Next.js. Integrated a chatbot using Gemini AI via OpenRouter and added smooth transitions with GSAP. Visuals were AI-generated for consistency.",
			demo_link: "https://portfolio-de-oak.netlify.app/",
			github_link: "https://github.com/OakSoeHtooAung/portfolio",
			document_id: "portfolio-website",
			responsive: true,
			splash_video: { url: "/videos/me-working-fast.webm" },
			mockup_images: [
				{
					url: "/images/portfolio-showcase/portfolio-1.webp",
					width: 1000,
					height: 600,
				},
				{
					url: "/images/portfolio-showcase/portfolio-2.webp",
					width: 400,
					height: 200,
				},
				{
					url: "/images/portfolio-showcase/portfolio-3.webp",
					width: 200,
					height: 100,
				},
			],
			highlight_images: [
				{ url: "/images/portfolio-showcase/portfolio-hl-1.png" },
				{ url: "/images/portfolio-showcase/portfolio-hl-2.png" },
				{ url: "/images/portfolio-showcase/portfolio-hl-3.png" },
				{ url: "/images/portfolio-showcase/portfolio-hl-4.jpeg" },
			],
			tech_list: ["javascript", "nextjs", "gsap", "tailwind"],
			palette: [
				{ name: "Primary", color: "#000000" },
				{ name: "Accent", color: "#8B5CF6" },
				{ name: "Background", color: "#FFFFFF" },
			],
		},
		{
			project_name: "Urban Coffee Club",
			intro_text:
				"Responsive, animation-rich coffee shop website with clean UX.",
			description:
				"Created a responsive, animation-rich coffee shop website using Vite.js and GSAP. Focused on showcasing animation design skills and clean UX.",
			demo_link: "https://urban-coffee-club.vercel.app/",
			github_link: "https://github.com/OakSoeHtooAung/urban-coffee-club",
			document_id: "urban-coffee-club",
			responsive: true,
			splash_video: { url: "/videos/urban-coffee-club-hero.mp4" },
			mockup_images: [
				{ url: "/images/urban-showcase/urban-1.png", width: 1000, height: 600 },
				{ url: "/images/urban-showcase/urban-2.png", width: 400, height: 200 },
				{ url: "/images/urban-showcase/urban-3.png", width: 200, height: 100 },
			],
			highlight_images: [
				{ url: "/images/urban-showcase/urban-hl-1.png" },
				{ url: "/images/urban-showcase/urban-hl-2.png" },
				{ url: "/images/urban-showcase/urban-hl-3.png" },
				{ url: "/images/urban-showcase/urban-hl-4.png" },
			],
			tech_list: ["javascript", "gsap", "tailwind"],
			palette: [
				{ name: "Coffee", color: "#4B2C20" },
				{ name: "Accent", color: "#D4A373" },
				{ name: "Cream", color: "#FAEDCD" },
			],
		},
	],
};
