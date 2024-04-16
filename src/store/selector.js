import { createSelector } from '@reduxjs/toolkit';

export const selectCatalog = state => state.catalog.items;
export const selectPage = state => state.catalog.page;
export const selectIsLoading = state => state.catalog.isLoading;
export const selectError = state => state.catalog.error;
// export const selectFilter = state => state.filter;
