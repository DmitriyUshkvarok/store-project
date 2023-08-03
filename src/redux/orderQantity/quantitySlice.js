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
  },
});

export const { incrementQuantity, decrementQuantity } = quantitySlice.actions;

const persisteQuantityReducer = persistReducer(
  quantityPersistConfig,
  quantitySlice.reducer
);

export default persisteQuantityReducer;
