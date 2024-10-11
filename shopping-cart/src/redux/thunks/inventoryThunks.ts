import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { setItems } from '../slices/inventorySlice';
import { getItems } from '../../services/mocks/itemService';

export const fetchItems = createAsyncThunk('inventory/fetchItems', async (_, { dispatch }) => {
  try {
    const response = await axios.get('/api/items');
    console.log(response.status);
    return dispatch(setItems(response.data));
  }
  catch (error) {
    console.error(error);
  }
  // Mock API call
  const items = getItems();
  return dispatch(setItems(items));
});
