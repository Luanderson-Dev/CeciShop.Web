// Em: next.config.ts

import type { NextConfig } from 'next';

const config: NextConfig = {
	// Configuração de imagens que já fizemos
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'via.placeholder.com',
				port: '',
				pathname: '/**',
			},
		],
	},

	// Suas outras configurações, como os headers, continuam aqui
	async headers() {
		return [
			{
				source: '/:path*',
				headers: [
					{
						key: 'Content-Security-Policy',
						value: 'frame-ancestors https://app.ceci.chat;',
					},
				],
			},
		];
	},
};

export default config;
