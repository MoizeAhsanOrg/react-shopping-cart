import { Meta, StoryObj } from '@storybook/react';
import Profile from '../components/Profile';
import { User } from '../types/User';
import { ShoppingHistory } from '../types/ShoppingHistory';

const meta: Meta<typeof Profile> = {
  title: 'Components/Profile',
  component: Profile,
};

export default meta;

type Story = StoryObj<typeof Profile>;

const user: User = {
  username: 'johndoe',
  role: 'customer',
  password: '',
  name: 'John Doe',
  email: 'johndoe@example.com',
};
const historyItems: Array<ShoppingHistory> = [
  {
    date: '2023-01-01',
    items: ['Item 1', 'Item 2'],
  },
  {
    date: '2023-02-01',
    items: ['Item 3', 'Item 4'],
  },
];


const admin: User = {
  username: 'admin',
  role: 'admin',
  password: '',
  name: 'Admin',
  email: 'admin@example.com',
};

export const Customer: Story = {
  args: {
    user,
    history: historyItems,
  },
};

export const Admin: Story = {
  args: {
    user: {
      ...admin,
    },
  },
};
