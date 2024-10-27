import React from 'react';
import { StoryFn, StoryContext } from '@storybook/react';
import Profile from '../components/Profile';
import { User } from '../types/User';

export default {
  title: 'Components/Profile',
  component: Profile,
} as StoryContext<typeof Profile>;

const Template: StoryFn<typeof Profile> = (args) => <Profile {...args} />;

const user: User = {
  username: 'johndoe',
  role: 'customer',
  password: '',
  name: 'John Doe',
  email: 'johndoe@example.com',
  history: ['Item 1', 'Item 2', 'Item 3'],
};

export const Default = Template.bind({});
Default.args = {
  user,
};
