import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    data : [],
  };
  
  const HomeProductSlice = createSlice({
    name: 'homeproducts',
    initialState,
    reducers: {
      addhomeproducts: (state, action) => {
        state.data.push(action.payload);
      },
    },
  });
  
  export const { addhomeproducts } = HomeProductSlice.actions;
  export default HomeProductSlice.reducer;