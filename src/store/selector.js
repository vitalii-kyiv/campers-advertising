export const selectCatalog = state => state.catalog.items;
export const selectHasMore = state => state.catalog.hasMore;
export const selectPage = state => state.catalog.page;
export const selectIsLoading = state => state.catalog.isLoading;
export const selectError = state => state.catalog.error;
export const selectFavorites = state => state.favorites.favorites;
export const selectIsFavorite = _id => state =>
  state.favorites.favorites.some(favItem => favItem._id === _id);

// export const removeFromFavorites = state => state.filter.addToFavorites;
