import { createSlice } from '@reduxjs/toolkit';

const numberSlice = createSlice({
  name: 'number',
  initialState: '',
  reducers: {
    setUserNumber: {
      reducer(_, action) {
        return action.payload.toLowerCase();
      },
    },
  },
});

export const { setUserNumber } = numberSlice.actions;
export const numberReducer = numberSlice.reducer;
