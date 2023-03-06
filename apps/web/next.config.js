/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
		typedRoutes: true,
		fontLoaders: [
			{ loader: 'next/font/google', options: { subsets: ['latin'] } },
		],
	},
};

module.exports = nextConfig;
