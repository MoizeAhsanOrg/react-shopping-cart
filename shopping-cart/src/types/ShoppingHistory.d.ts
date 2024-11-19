import { Order } from './Order';
import { Item } from './Item';

export interface ShoppingHistoryItem extends Omit<Item, 'stock'> {
  quantity: number;
  totalAmount: number;
}

export interface ShoppingHistory {
  orderId: string;
  userId: string;
  date: string;
  items: ShoppingHistoryItem[];
  totalAmount: number;
  status: 'pending' | 'completed' | 'cancelled' | 'shipped';
}

export interface ShoppingHistoryAPIResponse {
  data: ShoppingHistory[];
  error: string;
}
