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

// export const addContactThunk = createAsyncThunk(
//   'contacts/addContact',
//   async contact => {
//     const response = await addContactApi(contact);
//     return response;
//   }
// );

// export const deleteContactThunk = createAsyncThunk(
//   'contacts/deleteContact',
//   async contactId => {
//     await deleteContactApi(contactId);
//     return contactId;
//   }
// );
