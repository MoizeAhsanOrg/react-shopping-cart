import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { setItems } from '../slices/inventorySlice';

export const fetchItems = createAsyncThunk('inventory/fetchItems', async (_, { dispatch }) => {
    // Mock API call
    const response = await axios.get('/api/items');
    dispatch(setItems(response.data));
});
