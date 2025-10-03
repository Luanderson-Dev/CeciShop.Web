export default function UnauthorizedPage() {
	return (
		<main className='flex min-h-screen flex-col items-center justify-center p-24 bg-red-50'>
			<div className='bg-white p-8 rounded-lg shadow-md text-center'>
				<h1 className='text-4xl font-bold text-red-600 mb-4'>
					Acesso Não Autorizado
				</h1>
				<p className='text-gray-700 text-lg'>
					Você não tem permissão para acessar esta página!
				</p>
			</div>
		</main>
	);
}
