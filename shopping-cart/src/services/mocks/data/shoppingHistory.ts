import { ShoppingHistoryAPIResponse } from '../../../types/ShoppingHistory';

export const shoppingHistoryData: ShoppingHistoryAPIResponse = {
  data: [
    {
      orderId: 'ORDRCUSTOMER-1',
      userId: 'customer',
      date: '2023-10-01',
      items: [
        { id: 1, category: 'Fruit', name: 'Apple', quantity: 3, price: 1.2, totalAmount: 3.6 },
        { id: 2, category: 'Fruit', name: 'Banana', quantity: 2, price: 0.5, totalAmount: 1.0 },
      ],
      totalAmount: 4.6,
      status: 'shipped',
    },
    {
      orderId: 'ORDRCUSTOMER-2',
      userId: 'customer',
      date: '2023-10-05',
      items: [
        { id: 3, category: 'Fruit', name: 'Orange', quantity: 5, price: 0.8, totalAmount: 4.0 },
        { id: 4, category: 'Dairy', name: 'Milk', quantity: 1, price: 1.5, totalAmount: 1.5 },
      ],
      totalAmount: 5.5,
      status: 'completed',
    },
    {
      orderId: 'ORDRCUSTOMER-3',
      userId: 'customer',
      date: '2023-10-10',
      items: [
        { id: 5, category: 'Bakery', name: 'Bread', quantity: 2, price: 2.0, totalAmount: 4.0 },
        { id: 6, category: 'Dairy', name: 'Eggs', quantity: 12, price: 3.0, totalAmount: 3.0 },
      ],
      totalAmount: 7.0,
      status: 'cancelled',
    },
  ],
  error: '',
};
