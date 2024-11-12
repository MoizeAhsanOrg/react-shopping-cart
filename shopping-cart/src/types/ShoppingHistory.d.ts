import { Order } from './Order';
import { Item } from './Item';

export interface ShoppingHistoryItem extends Omit<Item, 'stock'> {
  quantity: number;
  totalAmount: number;
}

export interface ShoppingHistory {
    orderId: Order['id'];
    date: string;
    items: ShoppingHistoryItem[];
    totalAmount: Order['total'];
    status: 'pending' | 'completed' | 'cancelled' | 'shipped';
}
