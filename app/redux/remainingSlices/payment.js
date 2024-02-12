import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    payment: [],
  };
  
  const paymentSlice = createSlice({
    name: 'payment',
    initialState,
    reducers: {
      addpayment: (state, action) => {
        state.payment.push(...action.payload);
      }
    },
  });
  
  export const { addpayment } = paymentSlice.actions;
  export default paymentSlice.reducer;