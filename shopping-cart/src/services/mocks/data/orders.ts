import { Order } from '../../../types/Order';

export const orders: Order[] = [
  { 
    id: 'ORDRADMIN-1', 
    userId: 'admin', 
    itemIds: [1, 2], 
    total: 30.0, 
    date: new Date('2023-01-01') 
  },
  { 
    id: 'ORDRCUSTOMER-1', 
    userId: 'customer', 
    itemIds: [2], 
    total: 20.0, 
    date: new Date('2023-01-02') 
  },
];
