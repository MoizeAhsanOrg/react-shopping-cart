import { Meta, StoryFn } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { MemoryRouter } from 'react-router-dom';
import Store from '../pages/Store';
import inventoryReducer from '../redux/slices/inventorySlice';
import cartReducer from '../redux/slices/cartSlice';
import { Item } from '../types/Item';

// Mock data
const mockItems: Item[] = [
  {
    id: 1,
    name: 'Item 1',
    category: 'Category 1',
    price: 10.0,
    stock: 5,
    image: 'https://placehold.co/600x400/orange/white?text=Item+1',
    quantity: 0
  },
  {
    id: 2,
    name: 'Item 2',
    category: 'Category 2',
    price: 20.0,
    stock: 3,
    image: 'https://placehold.co/600x400/black/white?text=Item+2',
    quantity: 0
  },
  // Add more mock items as needed
];

interface PreloadedState {
  inventory: {
    items: Array<Item>,
  },
  cart: {
    items: Array<Item>,
  },
}
const createMockStore = (props: PreloadedState) => {
  return configureStore({
    reducer: {
      inventory: inventoryReducer,
      cart: cartReducer,
    },
    preloadedState: props,
  });
};

export default {
  title: 'Pages/Store',
  component: Store,
} as Meta;

const Template: StoryFn<{ args: PreloadedState }> = ({ args }) => (
  <Provider store={createMockStore(args)}>
    <MemoryRouter>
      <Store />
    </MemoryRouter>
  </Provider>
);

const defaultArgs: PreloadedState = {
  inventory: {
    items: [],
  },
  cart: {
    items: [],
  },
};

export const DefaultNoProductListing = Template.bind({});
DefaultNoProductListing.args = { args: defaultArgs };

export const WithItemsAndInCart = Template.bind({});
WithItemsAndInCart.args = {
  args: {
    inventory: {
      items: mockItems,
    },
    cart: {
      items: [mockItems[0]],
    },
  },
};
