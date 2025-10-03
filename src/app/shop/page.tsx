'use client'; // <-- ESSA LINHA É MUITO IMPORTANTE!

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

// Este é um componente React que representa sua página
export default function ShopPage() {
	// Hooks para pegar os parâmetros da URL e guardar os valores
	const searchParams = useSearchParams();
	const [userId, setUserId] = useState<string | null>(null);
	const [accountId, setAccountId] = useState<string | null>(null);

	// O useEffect é executado no lado do cliente, após o componente ser renderizado.
	// É o lugar perfeito para ler dados do navegador, como a URL.
	useEffect(() => {
		const capturedUserId = searchParams.get('userId');
		const capturedAccountId = searchParams.get('accountId');

		// Guarda os valores no estado do componente
		setUserId(capturedUserId);
		setAccountId(capturedAccountId);

		// Exibe os valores no console do navegador para debug
		console.log('--- Informações Capturadas da URL (Next.js) ---');
		console.log('User ID:', capturedUserId);
		console.log('Account ID:', capturedAccountId);
		console.log('-----------------------------------------------');

		// Próximo passo: Chamar sua API de backend com esses dados.
	}, [searchParams]); // O efeito roda novamente se os parâmetros da URL mudarem

	// Renderiza a interface da página
	return (
		<main className='flex min-h-screen flex-col items-center justify-center p-24 bg-gray-100'>
			<div className='bg-white p-8 rounded-lg shadow-md text-center'>
				<h1 className='text-3xl font-bold text-gray-800 mb-4'>
					Bem-vindo ao Shop!
				</h1>

				{userId && accountId ? (
					<div>
						<p className='text-gray-600'>
							Credenciais recebidas com sucesso.
						</p>
						<div className='mt-4 text-left inline-block'>
							<p>
								<strong>UserID:</strong>{' '}
								<code className='bg-gray-200 p-1 rounded'>
									{userId}
								</code>
							</p>
							<p>
								<strong>AccountID:</strong>{' '}
								<code className='bg-gray-200 p-1 rounded'>
									{accountId}
								</code>
							</p>
						</div>
					</div>
				) : (
					<p className='text-red-500'>
						Aguardando ou não foram encontrados os parâmetros na
						URL...
					</p>
				)}
			</div>
		</main>
	);
}
