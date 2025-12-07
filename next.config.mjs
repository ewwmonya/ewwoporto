/** @type {import('next').NextConfig} */
const nextConfig = {
	eslint: {
		ignoreDuringBuilds: true, // 👈 allows build to succeed even if ESLint fails
	},
	images: {
		remotePatterns: [
			new URL('https://cdn.sanity.io/images/v8d7sfn1/production/**'),
			new URL('https://www.sea-elite.com'),
		],
	},
};

export default nextConfig;
