import { catalogSliceReducer } from './catalogSlice/catalogSlice';
import { favoritesSliceReducer } from './favoritesSlice/favoritesSlice';
import { bookingsSliceReducer } from './bookingsSlice/bookingsSlice';
// import { filterSliceReducer } from './filterSlice/filterSlice';

export const reducer = {
  catalog: catalogSliceReducer,
  favorites: favoritesSliceReducer,
  bookings: bookingsSliceReducer,
};
