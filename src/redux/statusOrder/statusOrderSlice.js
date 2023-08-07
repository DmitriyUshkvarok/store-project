import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const statusOrderPersistConfig = {
  key: 'status',
  storage,
};

const statusOrderSlice = createSlice({
  name: 'status',
  initialState: {
    isPending: true,
  },
  reducers: {
    toggleStatus: (state) => {
      state.isPending = !state.isPending;
    },
  },
});

export const { toggleStatus } = statusOrderSlice.actions;

const persisteOrderStatusReducer = persistReducer(
  statusOrderPersistConfig,
  statusOrderSlice.reducer
);

export default persisteOrderStatusReducer;
