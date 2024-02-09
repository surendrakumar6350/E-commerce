import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    userss : [],
  };
  
  const usersSlice = createSlice({
    name: 'adminusers',
    initialState,
    reducers: {
      addusers: (state, action) => {
        state.userss = [...action.payload]
      },
    },
  });
  
  export const { addusers } = usersSlice.actions;
  export default usersSlice.reducer;