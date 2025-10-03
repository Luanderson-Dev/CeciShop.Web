// Em: src/app/dashboard/page.tsx
'use client'; // Essencial para usar hooks como useState

import { useState } from 'react';
import OrderCard, {
	Order,
	OrderStatus,
} from '@/app/components/dashboard/OrderCard';

// Dados de exemplo (viriam de um banco de dados em uma aplicação real)
const initialOrders: Order[] = [
	{
		id: 'a1b2c3d4',
		customerName: 'João Silva',
		items: [{ name: 'Produto Incrível 1', quantity: 2 }],
		total: 'R$ 199,80',
		status: 'Pendente',
	},
	{
		id: 'e5f6g7h8',
		customerName: 'Maria Oliveira',
		items: [{ name: 'Item Fantástico 2', quantity: 1 }],
		total: 'R$ 149,90',
		status: 'Pendente',
	},
	{
		id: 'i9j0k1l2',
		customerName: 'Carlos Pereira',
		items: [
			{ name: 'Solução Perfeita 3', quantity: 1 },
			{ name: 'Acessório Essencial 6', quantity: 1 },
		],
		total: 'R$ 129,80',
		status: 'Em Preparo',
	},
	{
		id: 'm3n4o5p6',
		customerName: 'Ana Costa',
		items: [{ name: 'Produto Premium 4', quantity: 1 }],
		total: 'R$ 199,90',
		status: 'Saiu para Entrega',
	},
];

const orderStatuses: OrderStatus[] = [
	'Pendente',
	'Em Preparo',
	'Saiu para Entrega',
	'Entregue',
];

export default function DashboardPage() {
	// Hook useState para gerenciar a lista de pedidos.
	const [orders, setOrders] = useState<Order[]>(initialOrders);

	// Função para lidar com a mudança de status de um pedido
	const handleStatusChange = (orderId: string, newStatus: OrderStatus) => {
		setOrders((currentOrders) =>
			currentOrders.map((order) =>
				order.id === orderId ? { ...order, status: newStatus } : order
			)
		);
		console.log(`Pedido ${orderId} movido para ${newStatus}`);
	};

	return (
		<div className='bg-gray-100 min-h-screen font-sans'>
			<header className='bg-white shadow-sm'>
				<div className='container mx-auto px-4 py-4'>
					<h1 className='text-2xl font-bold text-gray-800'>
						Dashboard de Pedidos
					</h1>
				</div>
			</header>

			<main className='container mx-auto p-4'>
				{/* Container para as colunas */}
				<div className='flex flex-col md:flex-row md:space-x-4'>
					{/* Mapeia cada status para criar uma coluna */}
					{orderStatuses.map((status) => (
						<div
							key={status}
							className='flex-1 bg-gray-200 p-3 rounded-lg mb-4 md:mb-0'
						>
							<h2 className='text-lg font-semibold mb-4 text-gray-700'>
								{status}
							</h2>
							<div>
								{/* Filtra e exibe os pedidos que correspondem ao status da coluna */}
								{orders
									.filter((order) => order.status === status)
									.map((order) => (
										<OrderCard
											key={order.id}
											order={order}
											onStatusChange={handleStatusChange}
										/>
									))}
							</div>
						</div>
					))}
				</div>
			</main>
		</div>
	);
}
