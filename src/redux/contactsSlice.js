import { createSlice, nanoid } from '@reduxjs/toolkit';

const persistedContacts = localStorage.getItem('contacts');
const contactsInitialState = () => {
  if (persistedContacts) {
    return JSON.parse(persistedContacts);
  }
  return [];
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        return [...state, action.payload];
      },
      prepare(nameUser, number) {
        return {
          payload: {
            name: nameUser,
            id: nanoid(),
            tel: number,
          },
        };
      },
    },
    deleteContact: {
      reducer(state, action) {
        return state.filter(contact => contact.id !== action.payload);
      },
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
