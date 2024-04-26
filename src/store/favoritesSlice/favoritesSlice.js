import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favorites: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleFavorite: (state, { payload }) => {
      const index = state.favorites.findIndex(item => item._id === payload._id);
      if (index >= 0) {
        state.favorites.splice(index, 1);
      } else {
        state.favorites.push(payload);
      }
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export const favoritesSliceReducer = favoritesSlice.reducer;
