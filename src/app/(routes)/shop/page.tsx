// Em: src/app/shop/page.tsx

import ProductCard from '@/app/components/shop/ProductCard';

// Dados de exemplo. No futuro, isso virá de uma API.
const sampleProducts = [
	{
		id: 1,
		name: 'Produto Incrível 1',
		price: 'R$ 99,90',
		imageUrl: 'https://via.placeholder.com/300',
	},
	{
		id: 2,
		name: 'Item Fantástico 2',
		price: 'R$ 149,90',
		imageUrl: 'https://via.placeholder.com/300',
	},
	{
		id: 3,
		name: 'Solução Perfeita 3',
		price: 'R$ 79,90',
		imageUrl: 'https://via.placeholder.com/300',
	},
	{
		id: 4,
		name: 'Produto Premium 4',
		price: 'R$ 199,90',
		imageUrl: 'https://via.placeholder.com/300',
	},
	{
		id: 5,
		name: 'Gadget Moderno 5',
		price: 'R$ 299,90',
		imageUrl: 'https://via.placeholder.com/300',
	},
	{
		id: 6,
		name: 'Acessório Essencial 6',
		price: 'R$ 49,90',
		imageUrl: 'https://via.placeholder.com/300',
	},
];

export default function ShopPage() {
	return (
		// Layout principal da página
		<div className='bg-gray-50 min-h-screen'>
			{/* Cabeçalho */}
			<header className='bg-white shadow-md'>
				<nav className='container mx-auto px-6 py-4'>
					<h1 className='text-2xl font-bold text-gray-800'>
						CeciShop
					</h1>
				</nav>
			</header>

			{/* Conteúdo Principal */}
			<main className='container mx-auto px-6 py-8'>
				<h2 className='text-3xl font-bold text-gray-800 mb-6'>
					Nossos Produtos
				</h2>

				{/* Grade de Produtos Responsiva */}
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
					{sampleProducts.map((product) => (
						<ProductCard
							key={product.id}
							product={product}
						/>
					))}
				</div>
			</main>

			{/* Rodapé */}
			<footer className='bg-white mt-12 py-6'>
				<div className='container mx-auto px-6 text-center text-gray-600'>
					<p>&copy; 2024 CeciShop. Todos os direitos reservados.</p>
				</div>
			</footer>
		</div>
	);
}
