import { configureStore } from '@reduxjs/toolkit';
import persisteAuthReducer from './adminAuthApi/authSlice';
import persisteCartReducer from './cart/cartSlise';
import persisteQuantityReducer from './orderQantity/quantitySlice';
import persisteOrderStatusReducer from './statusOrder/statusOrderSlice';
import { authApi } from './adminAuthApi/authApi';
import { ofertaApi } from './ofertaApi/ofertaApi';
import { galleryApi } from './galleryApi/galleryApi';
import { ordersApi } from './ordersApi/ordersApi';
import { adminOrdersApi } from './adminOrdersApi/adminOrdersApi';

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
    status: persisteOrderStatusReducer,
    [authApi.reducerPath]: authApi.reducer,
    [ofertaApi.reducerPath]: ofertaApi.reducer,
    [galleryApi.reducerPath]: galleryApi.reducer,
    [ordersApi.reducerPath]: ordersApi.reducer,
    [adminOrdersApi.reducerPath]: adminOrdersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(
      authApi.middleware,
      ofertaApi.middleware,
      galleryApi.middleware,
      ordersApi.middleware,
      adminOrdersApi.middleware
    ),
});

export const persistor = persistStore(store);

export default store;
