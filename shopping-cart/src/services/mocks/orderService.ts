import { Order } from '../../types/Order';
import { orders } from './data/orders';

export const getOrders = (): Order[] => {
  return orders;
};

export const getOrderById = (id: string): Order | null => {
  return orders.find(order => order.id === id) || null;
};

export const getOrdersByUserId = (userId: string): Order[] => {
  return orders.filter(order => order.userId === userId);
};
