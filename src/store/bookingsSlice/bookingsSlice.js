import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  details: [],
};

export const bookingsSlice = createSlice({
  name: 'bookings',
  initialState,
  reducers: {
    addBookingDetails: (state, { payload }) => {
      state.details.push(payload);
    },
  },
});

export const { addBookingDetails } = bookingsSlice.actions;

export const bookingsSliceReducer = bookingsSlice.reducer;
