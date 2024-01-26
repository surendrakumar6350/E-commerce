import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: { items: [] , steps: 1, address: {}, ordersuccess: {} },
  reducers: {
    addsteps: (state, action) => {
      state.steps = action.payload;
    },
addaddress: (state, action) => {
  state.address = action.payload;
},
addordersuccess: (state, action) => {
  state.ordersuccess = action.payload;
},



    
    changeProductquantity: (state, action) => {
      state.items = state.items.map((e)=> {
        if (e._id == action.payload.id) {
          if (action.payload.operation == "+") {
            let rahul = { ...e, totalmoneyforcart: e.money + e.totalmoneyforcart, count: e.count + 1 }
            return rahul;
          }
          else {
            if (e.count > 1) {
              let rahul = { ...e, totalmoneyforcart: e.totalmoneyforcart - e.money, count: e.count - 1 }
              return rahul;
            }
            else {
              return e
            }
          }
        }
        else {
          return e;
        }
      })
    },
    addToCart: (state, action) => {
      state.items.push(action.payload); 
    },
    addCart: (state, action) => {
      state.items = action.payload;
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item._id !== action.payload.id);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addaddress, addToCart,addordersuccess, removeFromCart, clearCart, addCart,  changeProductquantity, addsteps } = cartSlice.actions;
export default cartSlice.reducer;
