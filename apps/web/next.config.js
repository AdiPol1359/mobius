/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
		typedRoutes: true,
	},
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/i,
			issuer: /\.[jt]sx?$/,
			use: [
				{
					loader: '@svgr/webpack',
					options: {
						svgoConfig: {
							plugins: [
								{
									name: 'preset-default',
									params: {
										overrides: {
											removeViewBox: false,
										},
									},
								},
							],
						},
					},
				},
			],
		});

		config.externals.push({
			bufferutil: 'commonjs bufferutil',
			'utf-8-validate': 'commonjs utf-8-validate',
		});

		return config;
	},
	async redirects() {
		return [
			{
				source: '/',
				destination: '/sign-in',
				permanent: false,
			},
			{
				source: '/dashboard',
				destination: '/dashboard/teams',
				permanent: false,
			},
		];
	},
};

module.exports = nextConfig;
