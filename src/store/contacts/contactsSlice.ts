import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState = {}

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {},
});

export const contactsReducer = contactsSlice.reducer;
