// Em: next.config.ts

import type { NextConfig } from 'next';

const config: NextConfig = {
	// ... outras configurações do seu projeto podem estar aqui

	async headers() {
		return [
			{
				// Aplica estes cabeçalhos para todas as rotas da sua aplicação
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
