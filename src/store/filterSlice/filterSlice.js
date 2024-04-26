import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  location: '',
  hasAirConditioner: false,
  transmission: false,
  hasKitchen: false,
  hasTV: false,
  hasShower: false,
  form: 'all',
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    setAirConditioner: (state, action) => {
      state.hasAirConditioner = action.payload;
    },
    setTransmission: (state, action) => {
      state.transmission = action.payload;
    },
    setHasKitchen: (state, action) => {
      state.hasKitchen = action.payload;
    },
    setHasTV: (state, action) => {
      state.hasTV = action.payload;
    },
    setHasShower: (state, action) => {
      state.hasShower = action.payload;
    },
    setForm: (state, action) => {
      state.form = action.payload;
    },
    resetFilters: () => initialState,
  },
});

export const {
  setLocation,
  setAirConditioner,
  setCamperType,
  setTransmission,
  setHasKitchen,
  setHasTV,
  setHasShower,
  setForm,
  resetFilters,
} = filterSlice.actions;

export const filterSliceReducer = filterSlice.reducer;
