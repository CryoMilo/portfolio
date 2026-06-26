import {
	FaDatabase,
	FaShieldAlt,
	FaBolt,
	FaCloud,
	FaChartBar,
} from "react-icons/fa";
import { LuLayoutGrid, LuPrinter, LuBox } from "react-icons/lu";

export const STACK = ["react", "vite", "supabase", "zustand", "tailwind"];

export const STATS = [
	{ value: "18", label: "Database Tables" },
	{ value: "17", label: "Routes" },
	{ value: "05", label: "Major Features" },
	{ value: "02", label: "User Roles" },
];

export const PROBLEMS = [
	"Orders were tracked by hand, on paper, under pressure.",
	"Kitchen communication broke down during the rush.",
	"Every menu change meant repetitive manual work.",
	"Business data was scattered across five different tools.",
];

export const JOURNEY = [
	{ hash: "a1f9c2e", msg: "Opened a Burmese food business" },
	{ hash: "c44e810", msg: "Managed every order by hand" },
	{ hash: "7b03d5a", msg: "Built first menu management tools" },
	{ hash: "e29f114", msg: "Shipped a rough POS prototype" },
	{ hash: "f5a8b3c", msg: "Wired up real-time kitchen printing" },
	{ hash: "9d2c6f0", msg: "Designed the complete restaurant platform" },
];

export const FEATURES = [
	{
		icon: LuLayoutGrid,
		title: "High-Speed POS",
		copy: "Staff create orders, customize dishes, split items, assign tables, and process payments in seconds.",
		imgKey: "/images/pos-showcase/feature-1.png",
	},
	{
		icon: FaChartBar,
		title: "Dynamic Weekly Menu",
		copy: "Managers schedule menus for different days of the week without touching a single line of code.",
		imgKey: "/images/pos-showcase/feature-2.png",
	},
	{
		icon: LuPrinter,
		title: "Real-Time Kitchen Printing",
		copy: "Orders appear in the kitchen automatically through a cloud-based printing workflow.",
		imgKey: "/images/pos-showcase/feature-3.png",
	},
	{
		icon: LuBox,
		title: "Inventory",
		copy: "Administrators and Staffs control exactly what to buy for next grocery cycle.",
		imgKey: "/images/pos-showcase/feature-4.png",
	},
	{
		icon: FaBolt,
		title: "Analytics Dashboard",
		copy: "Full visibility into sales, expenses, and operational performance, at a glance.",
		imgKey: "/images/pos-showcase/feature-5.png",
	},
];

export const BEHIND_SCENES = [
	{
		icon: FaDatabase,
		title: "Database Design",
		copy: "18 PostgreSQL tables, modeled directly around how a restaurant actually runs.",
	},
	{
		icon: FaBolt,
		title: "State Management",
		copy: "Built on Zustand for fast order creation and snappy, predictable interactions.",
	},
	{
		icon: FaShieldAlt,
		title: "Role-Based Access",
		copy: "Dynamic permissions implemented with Supabase authentication metadata.",
	},
	{
		icon: FaCloud,
		title: "Cloud Infrastructure",
		copy: "A serverless architecture on Supabase — no dedicated backend server required.",
	},
];

export const AI_FLOW = [
	"Restaurant Problems",
	"My Requirements",
	"AI-Assisted Development",
	"Testing In Real Workflows",
	"Final Product",
];

export const AI_ASSISTED = [
	"Research",
	"Architecture exploration",
	"Refactoring",
	"UI generation",
	"Documentation",
];

export const CHALLENGES = [
	{
		challenge: "Managing complex order modifications.",
		solution: "A custom order-splitting system.",
	},
	{
		challenge: "Printing kitchen tickets instantly.",
		solution: "A cloud-based print queue.",
	},
	{
		challenge: "Managing staff permissions.",
		solution: "A dynamic, role-based access system.",
	},
	{
		challenge: "Kitchen communication during rush hours.",
		solution: "Color-coded order cards prioritizing oldest tickets.",
	},
	{
		challenge: "Tracking floating cash and registers.",
		solution: "A secure digital register with daily audit trails.",
	},
	{
		challenge: "Keeping menu items and stock in sync.",
		solution: "Instant, real-time sync across all staff devices.",
	},
	{
		challenge: "Scattered daily sales analytics.",
		solution: "A consolidated dashboard showing cost vs revenue.",
	},
];

export const LEARNED = [
	"Product thinking",
	"Database design",
	"Role management",
	"State architecture",
	"Operational workflows",
	"Balancing business and technical requirements",
];

export const ROADMAP_NODES = [
	{ label: "Analyze Business Needs", description: "Research & planning" },
	{ label: "Research Tech Stacks", description: "Technology selection" },
	{ label: "Create MVP of POS", description: "Core feature development" },
	{ label: "Trials and Errors", description: "Testing & iteration" },
	{ label: "Fully Working POS", description: "Live system" },
	{ label: "Inventory Management", description: "Stock control" },
	{ label: "AI Self Order System", description: "Future enhancement" },
];
