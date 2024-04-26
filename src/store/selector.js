import { createSelector } from '@reduxjs/toolkit';

export const selectCatalog = state => state.catalog.items;
export const selectHasMore = state => state.catalog.hasMore;
export const selectPage = state => state.catalog.page;
export const selectIsLoading = state => state.catalog.isLoading;
export const selectError = state => state.catalog.error;
export const selectFavorites = state => state.favorites.favorites;
export const selectIsFavorite = _id => state =>
  state.favorites.favorites.some(favItem => favItem._id === _id);
export const selectFilters = state => state.filter;

export const selectFilteredItems = createSelector(
  [selectCatalog, selectFilters],
  (items, filter) => {
    const isAnyFilterActive =
      filter.location ||
      filter.hasAirConditioner ||
      filter.hasTransmission ||
      filter.hasKitchen ||
      filter.hasTV ||
      filter.hasShower ||
      filter.form !== 'all';

    if (!isAnyFilterActive) {
      return items; // Якщо жоден фільтр не активний, повертаємо усі елементи
    }

    return items.filter(item => {
      const matchesLocation = filter.location
        ? item.location.toLowerCase().includes(filter.location.toLowerCase())
        : true;
      const matchesAC =
        !filter.hasAirConditioner ||
        (filter.hasAirConditioner &&
          item.details &&
          item.details.airConditioner > 0);
      const matchesTransmission =
        !filter.hasTransmission ||
        (filter.hasTransmission && item && item.transmission > 0);
      const matchesKitchen =
        !filter.hasKitchen || (item.details && item.details.hob > 0);
      const matchesTV = !filter.hasTV || (item.details && item.details.TV > 0);
      const matchesShower =
        !filter.hasShower || (item.details && item.details.shower > 0);
      const matchesForm = filter.form === 'all' || item.form === filter.form;

      return (
        matchesLocation &&
        matchesAC &&
        matchesTransmission &&
        matchesKitchen &&
        matchesTV &&
        matchesShower &&
        matchesForm
      );
    });
  }
);
