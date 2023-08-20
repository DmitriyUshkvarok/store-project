import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const cartPersistConfig = {
  key: 'cart',
  storage,
  whitelist: ['items'],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalPrice: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    updateTotalPrice: (state, action) => {
      state.totalPrice = action.payload;
    },
    removeAllFromCart: (state) => {
      state.items = [];
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  updateTotalPrice,
  removeAllFromCart,
} = cartSlice.actions;

const persisteCartReducer = persistReducer(
  cartPersistConfig,
  cartSlice.reducer
);

export default persisteCartReducer;
