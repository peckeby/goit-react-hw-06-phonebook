import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilter: {
      reducer(_, action) {
        return action.payload.toLowerCase();
      },
    },
  },
});

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
