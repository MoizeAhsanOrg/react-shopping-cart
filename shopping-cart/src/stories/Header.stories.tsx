import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import Header from '../components/Header';
import { StoryFn } from '@storybook/react';
import authReducer from '../redux/slices/authSlice';
import cartReducer from '../redux/slices/cartSlice';
import { User } from '../types/User';
import { Item } from '../types/Item';

export default {
  title: 'Components/Header',
  component: Header,
};

interface preloadedState {
  auth: {
    user: User,
  },
  cart: {
    items: Array<Item>,
  },
}

const createMockStore = (props: preloadedState) => {
  return configureStore({
    reducer: {
      auth: authReducer,
      cart: cartReducer,
    },
    preloadedState: props,
  });
};

const Template: StoryFn<{ args: preloadedState }> = ({ args }) => (
  <Provider store={createMockStore(args)}>
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  </Provider>
);

const defaultArgs: preloadedState = {
  auth: {
    user: {
      username: 'customer',
      role: 'customer',
      password: '',
      name: 'customer',
      email: 'customer@example.com',
    },
  },
  cart: {
    items: [],
  },
};

export const Default = Template.bind({});
Default.args = { args: defaultArgs };

const adminArgs: preloadedState = {
  auth: {
    user: {
      username: 'admin',
      role: 'admin',
      password: '',
      name: 'admin',
      email: 'admin@example.com',
    },
  },
  cart: {
    items: [],
  },
};

export const Admin = Template.bind({});
Admin.args = { args: adminArgs };
