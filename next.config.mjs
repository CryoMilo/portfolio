/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "ssnrczwkkznqqygncxti.supabase.co", // Supabase Storage domain
				pathname: "/storage/v1/object/public/media/**", // Adjust to match your storage path
			},
		],
	},
};

export default nextConfig;
