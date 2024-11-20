import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SalesState {
    salesData: { [category: string]: number };
}

const initialState: SalesState = {
  salesData: {},
};

const salesSlice = createSlice({
  name: 'sales',
  initialState,
  reducers: {
    updateSales(state, action: PayloadAction<{ category: string; quantity: number }>) {
      const { category, quantity } = action.payload;
      state.salesData[category] = (state.salesData[category] || 0) + quantity;
    },
    setSalesData(state, action: PayloadAction<{ [category: string]: number }>) {
      state.salesData = action.payload;
    },
  },
});

export const { updateSales, setSalesData } = salesSlice.actions;
export default salesSlice.reducer;
