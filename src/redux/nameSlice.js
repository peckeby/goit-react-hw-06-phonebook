import { createSlice } from '@reduxjs/toolkit';

const nameSlice = createSlice({
  name: 'name',
  initialState: '',
  reducers: {
    setUserName: {
      reducer(_, action) {
        return action.payload.toLowerCase();
      },
    },
  },
});

export const { setUserName } = nameSlice.actions;
export const nameReducer = nameSlice.reducer;
