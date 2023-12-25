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
    await axiosApi.post('/contacts.json', data);
  }
);

export const fetchOneContact = createAsyncThunk<Contact, string>(
  'contacts/oneContact',
  async (id) => {
    const response = await axiosApi.get(`contacts/${id}.json`);
    return response.data;
  }
);

export const updateContact = createAsyncThunk<void, {id: string, data: ApiContacts}>(
  'contacts/update',
  async ({ id, data }) => {
    await axiosApi.put(`/contacts/${id}.json`, data);
  }
);

export const deleteContact = createAsyncThunk<void, string>(
  'contacts/deleteContact',
  async (id) => {
    await axiosApi.delete(`/contacts/${id}.json`)
  }
)