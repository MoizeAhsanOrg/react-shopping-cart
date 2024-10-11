import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { setSalesData } from '../slices/salesSlice';
import { getSalesData } from '../../services/mocks/salesService';

export const fetchSalesData = createAsyncThunk('sales/fetchSalesData', async (_, { dispatch }) => {
  try {
    const response = await axios.get('/api/sales');
    console.log(response.status);
    return dispatch(setSalesData(response.data));
  }
  catch (error) {
    console.error(error);
  }
  // Mock API call
  const salesData = await getSalesData();
  return dispatch(setSalesData(salesData));
});
