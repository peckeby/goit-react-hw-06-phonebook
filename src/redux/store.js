import { persistStore, persistReducer, REGISTER, PERSIST } from 'redux-persist';

import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';
import { nameReducer } from './nameSlice';
import { numberReducer } from './numberSlice';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';

const reducers = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  name: nameReducer,
  number: numberReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['name', 'number', 'filter'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [REGISTER, PERSIST],
    },
  }),
});
export const persistor = persistStore(store);
