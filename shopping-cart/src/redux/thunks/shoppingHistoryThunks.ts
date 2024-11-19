import { createAsyncThunk } from '@reduxjs/toolkit';
import { setShoppingHistory } from '../slices/shoppingHistorySlice';
import { getShoppingHistoryByUserId } from '../../services/mocks/shoppingHistoryService';

export const fetchShoppingHistory = createAsyncThunk(
  'shoppingHistory/fetchShoppingHistory',
  async (userId: string, { dispatch }) => {
    try {
      const history = await getShoppingHistoryByUserId(userId);
      return dispatch(setShoppingHistory(history));
    } catch (error) {
      console.error('Failed to fetch shopping history:', error);
    }
  }
);
