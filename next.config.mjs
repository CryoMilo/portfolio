/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		optimizePackageImports: ["devicons-react"],
	},
	images: {
		remotePatterns: [],
	},
};

export default nextConfig;
