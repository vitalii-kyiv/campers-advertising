import { createSlice } from '@reduxjs/toolkit';
import { fetchCatalogThunk } from './catalogThunk';
import {
  handleFulfilled,
  handlePending,
  handleRejected,
} from './catalogHandlers';

const catalogSlice = createSlice({
  name: 'catalog',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    page: 1,
    hasMore: true,
  },

  extraReducers: builder => {
    builder
      .addCase(fetchCatalogThunk.fulfilled, (state, { payload }) => {
        console.log('payload', payload.length);
        state.items.push(...payload);
        state.page += 1;
        const expectedItemsPerPage = 4;
        state.hasMore = payload.length === expectedItemsPerPage;
      })
      // .addCase(addContactThunk.fulfilled, (state, { payload }) => {
      //   state.items = [...state.items, payload];
      // })
      // .addCase(deleteContactThunk.fulfilled, (state, { payload }) => {
      //   state.items = state.items.filter(contact => contact.id !== payload);
      // })
      .addMatcher(action => action.type.endsWith('pending'), handlePending)
      .addMatcher(action => action.type.endsWith('rejected'), handleRejected)
      .addMatcher(action => action.type.endsWith('fulfilled'), handleFulfilled);
  },
});

export const catalogSliceReducer = catalogSlice.reducer;
