import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ApiContacts} from '../../types';
import {createContact, fetchContactsData} from './contactsThunks';
import {RootState} from '../../app/store';

interface contactsState {
  contacts: ApiContacts[];
  fetchContactsLoading: boolean;
  creatingLoading: boolean;
}

const initialState: contactsState = {
  contacts: [],
  fetchContactsLoading: false,
  creatingLoading: false,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    getContacts: (state, action) => {
      state.contacts = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchContactsData.pending, (state: contactsState) => {
      state.fetchContactsLoading = true;
    });
    builder.addCase(fetchContactsData.fulfilled, (state: contactsState, {payload: contacts}) => {
      state.fetchContactsLoading = false;
      state.contacts = contacts;
    });
    builder.addCase(fetchContactsData.rejected, (state: contactsState) => {
      state.fetchContactsLoading = false;
    });
    builder.addCase(createContact.pending, (state: contactsState) => {
      state.creatingLoading = true;
    });
    builder.addCase(createContact.fulfilled, (state: contactsState) => {
      state.creatingLoading = false;
    });
    builder.addCase(createContact.rejected, (state: contactsState) => {
      state.creatingLoading = false;
    });
  },
});

export const contactsReducer = contactsSlice.reducer;
export const selectContact = (state: RootState) => state.contacts.contacts;
export const selectFetchContactsLoading = (state: RootState) => state.contacts.fetchContactsLoading;
export const selectCreatingLoading = (state: RootState) => state.contacts.creatingLoading;

