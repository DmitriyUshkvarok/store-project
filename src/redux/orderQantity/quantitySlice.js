import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const quantityPersistConfig = {
  key: 'quantity',
  storage,
};

const quantitySlice = createSlice({
  name: 'quantity',
  initialState: {},
  reducers: {
    incrementQuantity: (state, action) => {
      const { itemId } = action.payload;
      state[itemId] = (state[itemId] || 0) + 1;
    },
    decrementQuantity: (state, action) => {
      const { itemId } = action.payload;
      if (state[itemId] && state[itemId] > 0) {
        state[itemId]--;
      }
    },
    clearQuantityById: (state, action) => {
      const { itemId } = action.payload;
      delete state[itemId];
    },
    setQuantityById: (state, action) => {
      const { itemId, quantity } = action.payload;
      state[itemId] = Number(quantity);
    },
  },
});

export const {
  incrementQuantity,
  decrementQuantity,
  clearQuantityById,
  setQuantityById,
} = quantitySlice.actions;

const persisteQuantityReducer = persistReducer(
  quantityPersistConfig,
  quantitySlice.reducer
);

export default persisteQuantityReducer;
