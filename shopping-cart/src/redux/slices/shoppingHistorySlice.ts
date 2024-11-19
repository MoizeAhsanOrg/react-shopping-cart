import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ShoppingHistory } from '../../types/ShoppingHistory';

interface ShoppingHistoryState {
  history: ShoppingHistory[];
}

const initialState: ShoppingHistoryState = {
  history: [],
};

const shoppingHistorySlice = createSlice({
  name: 'shoppingHistory',
  initialState,
  reducers: {
    setShoppingHistory(state, action: PayloadAction<ShoppingHistory[]>) {
      state.history = action.payload;
    },
    addShoppingHistory(state, action: PayloadAction<ShoppingHistory>) {
      state.history.push(action.payload);
    },
  },
});

export const { setShoppingHistory, addShoppingHistory } = shoppingHistorySlice.actions;
export default shoppingHistorySlice.reducer;
