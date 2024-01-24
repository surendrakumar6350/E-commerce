import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    Reviews : [],
  };
  
  const reviewSlice = createSlice({
    name: 'Reviews',
    initialState,
    reducers: {
      addreview: (state, action) => {
        // state.Reviews.push(action.payload);
        state.Reviews = [action.payload , ...(state.Reviews)]
      },
    },
  });
  
  export const { addreview } = reviewSlice.actions;
  export default reviewSlice.reducer;