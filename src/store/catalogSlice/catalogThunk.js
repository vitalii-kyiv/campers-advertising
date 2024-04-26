import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCatalogDataApi } from '../../API/advertsServices';

export const fetchCatalogThunk = createAsyncThunk(
  'catalog/fetchAll',
  async (page, { getState }) => {
    const pageNumber = page || getState().catalog.page;
    const response = await fetchCatalogDataApi(pageNumber);
    return response;
  }
);
