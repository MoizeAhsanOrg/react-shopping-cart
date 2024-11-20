import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ItemCard from '../components/ItemCard';
import { Item } from '../types/Item';

export default {
  title: 'Components/ItemCard',
  component: ItemCard,
} as Meta;

const Template: StoryFn<{
  item: Item;
  onAddToCart: (item: Item) => void
}> = (args: { item: Item; onAddToCart: (item: Item) => void }) => <ItemCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  item: {
    id: 1,
    name: 'Sample Item',
    category: 'Sample Category',
    price: 19.99,
    stock: 10,
    quantity: 1,
    image: '',
  },
  onAddToCart: (item: Item) => alert(`Added ${item.name} to cart`),
};

export const WithImage = Template.bind({});
WithImage.args = {
  item: {
    id: 2,
    name: 'Sample Item with Image',
    category: 'Sample Category',
    price: 29.99,
    stock: 5,
    quantity: 1,
    image: 'https://placehold.co/600x400/orange/white',
  },
  onAddToCart: (item: Item) => alert(`Added ${item.name} to cart`),
};
