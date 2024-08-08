import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/slice'
import contactsReducer from './contacts/slice';
import filtersReducer from './filters/slice';

const authPersistConfig = {
  key: 'auth-token',
  storage,
  whitelist: ["token"],
}

const persistedAuthReducer = persistReducer(authPersistConfig, authReducer)

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filtersReducer,
    auth: persistedAuthReducer,
  },
});

export const persistor = persistStore(store);
