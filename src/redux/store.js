import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';
import { nameReducer } from './nameSlice';
import { numberReducer } from './numberSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
    name: nameReducer,
    number: numberReducer,
  },
});
