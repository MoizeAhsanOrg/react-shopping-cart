import { items } from './data/items';

export const getItemById = (id: number) => {
  return items.find(item => item.id === id) || null;
};

export const getItems = () => {
  return items;
};
