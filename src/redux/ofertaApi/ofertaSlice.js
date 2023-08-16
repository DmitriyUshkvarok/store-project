import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const ofertaPersistConfig = {
  key: 'oferta',
  storage,
};
const ofertaSlice = createSlice({
  name: 'oferta',
  initialState: {
    product: { name: '', id: null },
    category: { name: '', id: null },
  },
  reducers: {
    setDataAndId: (state, action) => {
      state.category.name = action.payload.name;
      state.category.id = action.payload._id;
    },
    setDataAndIdProduct: (state, action) => {
      state.product.name = action.payload.name;
      state.product.id = action.payload._id;
    },
  },
});

export const { setDataAndId, setDataAndIdProduct } = ofertaSlice.actions;

const persistedOfertaReducer = persistReducer(
  ofertaPersistConfig,
  ofertaSlice.reducer
);
export default persistedOfertaReducer;
