// Em: src/middleware.ts

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
	if (request.nextUrl.pathname.startsWith('/unauthorized')) {
		return NextResponse.next();
	}

	const allowedReferer = 'https://app.ceci.chat';
	const referer = request.headers.get('referer');

	if (!referer || new URL(referer).origin !== allowedReferer) {
		console.warn(
			`[MIDDLEWARE] Bloqueado acesso com Referer: ${referer || 'Nenhum'}`
		);
		const unauthorizedUrl = new URL('/unauthorized', request.url);
		return NextResponse.redirect(unauthorizedUrl);
	}

	console.log(`[MIDDLEWARE] Acesso permitido com Referer: ${referer}`);
	return NextResponse.next();
}

export const config = {
	matcher: [
		/*
		 * Corresponde a todos os caminhos de requisição, exceto para aqueles que começam com:
		 * - api (rotas de API)
		 * - _next/static (arquivos estáticos)
		 * - _next/image (arquivos de otimização de imagem)
		 * - favicon.ico (arquivo do favicon)
		 */
		'/((?!api|_next/static|_next/image|favicon.ico).*)',
	],
};
