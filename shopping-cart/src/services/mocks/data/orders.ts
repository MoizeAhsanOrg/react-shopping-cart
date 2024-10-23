import { Order } from '../../../types/Order';

export const orders: Order[] = [
  { 
    id: 1, 
    userId: 'admin', 
    itemIds: [1, 2], 
    total: 30.0, 
    date: new Date('2023-01-01') 
  },
  { 
    id: 2, 
    userId: 'customer', 
    itemIds: [2], 
    total: 20.0, 
    date: new Date('2023-01-02') 
  },
];