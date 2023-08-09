import { createSlice } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const ofertaPersistConfig = {
  key: 'oferta',
  storage,
};
const ofertaSlice = createSlice({
  name: 'oferta',
  initialState: {
    countrie: { name: '', id: null },
    categoty: { name: '', id: null },
    subcategory: { name: '', id: null },
  },
  reducers: {
    setDataAndId: (state, action) => {
      state.countrie.name = action.payload.name;
      state.countrie.id = action.payload._id;
    },
    setDataAndIdCategoty: (state, action) => {
      state.categoty.name = action.payload.name;
      state.categoty.id = action.payload._id;
    },
    setDataAndIdSubCategoty: (state, action) => {
      state.subcategory.name = action.payload.name;
      state.subcategory.id = action.payload._id;
    },
  },
});

export const { setDataAndId, setDataAndIdCategoty, setDataAndIdSubCategoty } =
  ofertaSlice.actions;

const persistedOfertaReducer = persistReducer(
  ofertaPersistConfig,
  ofertaSlice.reducer
);
export default persistedOfertaReducer;
