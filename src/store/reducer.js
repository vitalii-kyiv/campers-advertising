import { catalogSliceReducer } from './catalogSlice/catalogSlice';
import { favoritesSliceReducer } from './favoritesSlice/favoritesSlice';
import { bookingsSliceReducer } from './bookingsSlice/bookingsSlice';
import { combineReducers } from '@reduxjs/toolkit';
import { filterSliceReducer } from './filterSlice/filterSlice';

export const reducer = combineReducers({
  catalog: catalogSliceReducer,
  favorites: favoritesSliceReducer,
  bookings: bookingsSliceReducer,
  filter: filterSliceReducer,
});
