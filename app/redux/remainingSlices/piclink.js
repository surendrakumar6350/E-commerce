import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    piclink : {},
  };
  
  const piclinkSlice = createSlice({
    name: 'piclink',
    initialState,
    reducers: {
      addpiclink: (state, action) => {
        // if((Object.keys(state.piclink)).length == 0) {
        //     state.piclink = {url : action.payload }
        // }
        // if((Object.keys(state.piclink)).length == 1) {
        //     state.piclink = {url2 : action.payload , ...(state.piclink)}
        // }
        // if((Object.keys(state.piclink)).length == 2) {
        //     state.piclink = {url3 : action.payload , ...(state.piclink)}
        // }
        console.log("hii")
      },
    },
  });
  
  export const { addpiclink } = piclinkSlice.actions;
  export default piclinkSlice.reducer;