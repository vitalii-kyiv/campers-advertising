import { catalogSliceReducer } from './catalogSlice/catalogSlice';
import { favoritesSliceReducer } from './favoritesSlice/favoritesSlice';
import { modalSliceReducer } from './modalSlice/modalSlice';
// import { filterSliceReducer } from './filterSlice/filterSlice';

export const reducer = {
  catalog: catalogSliceReducer,
  favorites: favoritesSliceReducer,
  modal: modalSliceReducer,
};
