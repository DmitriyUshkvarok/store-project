import { configureStore } from '@reduxjs/toolkit';
import persisteAuthReducer from './adminAuthApi/authSlice';
import persisteCartReducer from './cart/cartSlise';
import persisteQuantityReducer from './orderQantity/quantitySlice';
import { authApi } from './adminAuthApi/authApi';
import { ofertaApi } from './ofertaApi/ofertaApi';
import { galleryApi } from './galleryApi/galleryApi';

import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const store = configureStore({
  reducer: {
    auth: persisteAuthReducer,
    cart: persisteCartReducer,
    quantity: persisteQuantityReducer,
    [authApi.reducerPath]: authApi.reducer,
    [ofertaApi.reducerPath]: ofertaApi.reducer,
    [galleryApi.reducerPath]: galleryApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(authApi.middleware, ofertaApi.middleware, galleryApi.middleware),
});

export const persistor = persistStore(store);

export default store;
