// Em: src/components/shop/ProductCard.tsx

import Image from 'next/image';

// A interface Product continua a mesma
interface Product {
	id: number;
	name: string;
	price: string;
	imageUrl: string;
}

interface ProductCardProps {
	product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
	return (
		<div className='border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white'>
			{/* Imagem do Produto */}
			<div className='relative w-full h-48'>
				<Image
					src={product.imageUrl}
					alt={`Imagem do produto ${product.name}`}
					fill // A propriedade 'fill' substitui 'layout="fill"'
					className='object-cover' // AQUI ESTÁ A MUDANÇA!
				/>
			</div>

			{/* Informações do Produto */}
			<div className='p-4'>
				<h3 className='text-lg font-semibold text-gray-800 truncate'>
					{product.name}
				</h3>
				<p className='text-gray-600 mt-1'>{product.price}</p>
				<button className='mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors'>
					Adicionar ao Carrinho
				</button>
			</div>
		</div>
	);
}
