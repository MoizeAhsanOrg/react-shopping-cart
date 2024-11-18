
import { Meta, StoryObj } from '@storybook/react';
import ShoppingHistory from '../components/ShoppingHistory';
import { ShoppingHistory as ShoppingHistoryType } from '../types/ShoppingHistory';

const meta: Meta<typeof ShoppingHistory> = {
  title: 'Components/History/ShoppingHistory',
  component: ShoppingHistory,
};

export default meta;

type Story = StoryObj<typeof ShoppingHistory>;

const historyItems: ShoppingHistoryType[] = [
  {
    orderId: 'ORD123',
    date: '2023-01-01',
    items: [
      {
        id: 0,
        name: 'Item 1',
        price: 10.0,
        quantity: 2,
        totalAmount: 20.0,
        category: 'Category 1',
      },
      {
        id: 1,
        name: 'Item 2',
        price: 15.0,
        quantity: 1,
        totalAmount: 15.0,
        category: 'Category 2',
      },
    ],
    totalAmount: 35.0,
    status: 'completed',
  },
  {
    orderId: 'ORD124',
    date: '2023-02-01',
    items: [
      {
        id: 0,
        name: 'Item 3',
        price: 20.0,
        quantity: 1,
        totalAmount: 20.0,
        category: 'Category 1',
      },
      {
        id: 1,
        name: 'Item 4',
        price: 25.0,
        quantity: 2,
        totalAmount: 50.0,
        category: 'Category 2',
      },
    ],
    totalAmount: 70.0,
    status: 'pending',
  },
];

export const Default: Story = {
  args: {
    history: historyItems,
  },
};
