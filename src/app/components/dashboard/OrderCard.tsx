// Em: src/components/dashboard/OrderCard.tsx

// Define os possíveis status de um pedido
export type OrderStatus =
	| 'Pendente'
	| 'Em Preparo'
	| 'Saiu para Entrega'
	| 'Entregue';

// Define a estrutura de um item dentro do pedido
interface OrderItem {
	name: string;
	quantity: number;
}

// Define a estrutura completa de um pedido
export interface Order {
	id: string;
	customerName: string;
	items: OrderItem[];
	total: string;
	status: OrderStatus;
}

// Define as propriedades que o componente receberá
interface OrderCardProps {
	order: Order;
	onStatusChange: (orderId: string, newStatus: OrderStatus) => void;
}

export default function OrderCard({ order, onStatusChange }: OrderCardProps) {
	// Funções auxiliares para determinar o próximo e o anterior status
	const getNextStatus = (): OrderStatus | null => {
		if (order.status === 'Pendente') return 'Em Preparo';
		if (order.status === 'Em Preparo') return 'Saiu para Entrega';
		if (order.status === 'Saiu para Entrega') return 'Entregue';
		return null;
	};

	const nextStatus = getNextStatus();

	return (
		<div className='bg-white p-4 rounded-lg shadow-md border border-gray-200 mb-4'>
			<div className='flex justify-between items-center mb-2'>
				<h3 className='font-bold text-gray-800'>
					Pedido #{order.id.substring(0, 6)}
				</h3>
				<span className='text-sm font-medium text-gray-600'>
					{order.customerName}
				</span>
			</div>

			<ul className='list-disc list-inside text-gray-700 mb-3'>
				{order.items.map((item) => (
					<li key={item.name}>
						{item.quantity}x {item.name}
					</li>
				))}
			</ul>

			<p className='font-semibold text-right mb-4'>
				Total: {order.total}
			</p>

			{/* Renderiza o botão para avançar o status, se houver um próximo status */}
			{nextStatus && (
				<button
					onClick={() => onStatusChange(order.id, nextStatus)}
					className='w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition-colors'
				>
					Mover para &quot;{nextStatus}&quot;
				</button>
			)}
		</div>
	);
}
