import { Meta, StoryObj } from '@storybook/react';
import Profile from '../components/Profile';
import { User } from '../types/User';

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
  history: ['Item 1', 'Item 2', 'Item 3'],
};

const admin: User = {
  username: 'admin',
  role: 'admin',
  password: '',
  name: 'Admin',
  email: 'admin@example.com',
  history: ['Item 1', 'Item 2', 'Item 3'],
};

export const Customer: Story = {
  args: {
    user,
  },
};

export const Admin: Story = {
  args: {
    user: {
      ...admin,
    },
  },
};
