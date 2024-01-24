import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    product: [],
  };
  
  const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
      addProduct: (state, action) => {
        state.product.push(action.payload);
      },
      removeProduct: (state, action) => {
        state.product = state.product.filter(product => product.id !== action.payload);
      },
      updateProduct: (state, action) => {
        const { id, updatedProduct } = action.payload;
        const index = state.product.findIndex(productss => productss.id === id);
        if (index !== -1) {
          state.product[index] = { ...state.product[index], ...updatedProduct };
        }
      },
    },
  });
  
  export const { addProduct, removeProduct, updateProduct } = productSlice.actions;
  export default productSlice.reducer;