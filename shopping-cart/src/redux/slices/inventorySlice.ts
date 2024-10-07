import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Item } from '../../types/Item';
import { items } from '../../services/mocks/data/items';

interface InventoryState {
    items: Item[];
}

const initialState: InventoryState = {
  items: items,
};

const inventorySlice = createSlice({
  name: 'inventory',
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<Item[]>) {
      state.items = action.payload;
    },
    addItem(state, action: PayloadAction<Item>) {
      state.items.push(action.payload);
    },
    updateItem(state, action: PayloadAction<Item>) {
      const index = state.items.findIndex(item => item.id === action.payload.id);
      if (index >= 0) state.items[index] = action.payload;
    },
    deleteItem(state, action: PayloadAction<number>) {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    updateStock: (state, action: PayloadAction<{ id: number; quantity: number }>) => {
      const item = state.items.find(item => item.id === action.payload.id);
      if (item) {
        item.stock -= action.payload.quantity;
      }
    },
  },
});

export const { setItems, addItem, updateItem, deleteItem, updateStock } = inventorySlice.actions;
export default inventorySlice.reducer;
