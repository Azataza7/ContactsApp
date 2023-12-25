import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ApiContacts, Contact} from '../../types';
import {createContact, deleteContact, fetchContactsData, fetchOneContact, updateContact} from './contactsThunks';
import {RootState} from '../../app/store';

interface contactsState {
  contacts: ApiContacts[];
  fetchContactsLoading: boolean;
  creatingLoading: boolean;
  oneContactLoading: boolean;
  updateContact: boolean;
  deleteContact: boolean;
  selectedContact: ApiContacts | null;
  selectOneContact: Contact | null;
  isModalOpen: boolean;
}

const initialState: contactsState = {
  contacts: [],
  fetchContactsLoading: false,
  creatingLoading: false,
  oneContactLoading: false,
  updateContact: false,
  deleteContact: false,
  selectedContact: null,
  selectOneContact: null,
  isModalOpen: false,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<ApiContacts>) => {
      state.selectedContact = action.payload;
      state.isModalOpen = true;
    },
    closeModal: (state) => {
      state.selectedContact = null;
      state.isModalOpen = false;
    },
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
    builder.addCase(fetchOneContact.pending, (state: contactsState) => {
      state.oneContactLoading = true;
    });
    builder.addCase(fetchOneContact.fulfilled, (state: contactsState, {payload: contact}) => {
      state.oneContactLoading = false;
      state.selectOneContact = contact;
    });
    builder.addCase(fetchOneContact.rejected, (state: contactsState) => {
      state.oneContactLoading = false;
    });
    builder.addCase(updateContact.pending, (state: contactsState) => {
      state.updateContact = true;
    });
    builder.addCase(updateContact.fulfilled, (state: contactsState) => {
      state.updateContact = false;
    });
    builder.addCase(updateContact.rejected, (state: contactsState) => {
      state.updateContact = false;
    });
    builder.addCase(deleteContact.pending, (state: contactsState) => {
      state.deleteContact = true;
    });
    builder.addCase(deleteContact.fulfilled, (state: contactsState) => {
      state.deleteContact = false;
    });
    builder.addCase(deleteContact.rejected, (state: contactsState) => {
      state.deleteContact = false;
    });
  },
});

export const contactsReducer = contactsSlice.reducer;
export const {openModal, closeModal} = contactsSlice.actions;

export const selectContact = (state: RootState) => state.contacts.contacts;
export const selectOneContact = (state: RootState) => state.contacts.selectOneContact;
export const selectFetchContactsLoading = (state: RootState) => state.contacts.fetchContactsLoading;
export const selectCreatingLoading = (state: RootState) => state.contacts.creatingLoading;
export const selectOneContactLoading = (state: RootState) => state.contacts.oneContactLoading;
export const selectUpdateLoading = (state: RootState) => state.contacts.updateContact;
export const selectDeleteLoading = (state: RootState) => state.contacts.deleteContact;

