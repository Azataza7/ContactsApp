import {createAsyncThunk} from '@reduxjs/toolkit';
import axiosApi from '../../axiosApi';
import {ApiContacts, Contact, ContactsJson} from '../../types';

export const fetchContactsData = createAsyncThunk<ApiContacts[], void>(
  'contacts',
  async () => {
    const response = await axiosApi.get<ContactsJson | null>('/contacts.json');
    const contactsJson = response.data;

    let contacts: ApiContacts[] = [];

    if (contactsJson) {
      contacts = Object.keys(contactsJson).map(key => {
        const contact = contactsJson[key];
        return {
          id: key,
          ...contact
        };
      });
    }
    return contacts;
  }
);

export const createContact = createAsyncThunk<void, Contact>(
  'contacts/create',
  async (data) => {
    await axiosApi.post('/contacts.json', data)
  }
)