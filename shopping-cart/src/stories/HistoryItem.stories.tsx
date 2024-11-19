
import { Meta, StoryObj } from '@storybook/react';
import HistoryItem from '../components/HistoryItem';
import { ShoppingHistory } from '../types/ShoppingHistory';

const meta: Meta<typeof HistoryItem> = {
  title: 'Components/History/HistoryItem',
  component: HistoryItem,
};

export default meta;

type Story = StoryObj<typeof HistoryItem>;

const historyItem: ShoppingHistory = {
  orderId: 'ORD125',
  userId: 'customer',
  date: '2023-03-01',
  items: [
    {
      id: 0,
      name: 'Item 5',
      price: 30.0,
      quantity: 1,
      totalAmount: 30.0,
      category: 'Category 3',
    },
    {
      id: 1,
      name: 'Item 6',
      price: 40.0,
      quantity: 2,
      totalAmount: 80.0,
      category: 'Category 4',
    },
  ],
  totalAmount: 110.0,
  status: 'shipped',
};

export const Default: Story = {
  args: {
    historyItem,
  },
};
