import React from 'react';
import ContactForm from '../../Components/ContactForm/ContactForm';
import {createContact, fetchContactsData} from '../../store/contacts/contactsThunks';
import {ApiContacts} from '../../types';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {useNavigate} from 'react-router-dom';
import {selectCreatingLoading} from '../../store/contacts/contactsSlice';

const NewContactForm = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const createLoading = useAppSelector(selectCreatingLoading);

  const onSubmit = (contact: ApiContacts) => {
    dispatch(createContact(contact));
    dispatch(fetchContactsData())
  };

  return (
    <>
      <ContactForm onSubmit={onSubmit} isLoading={createLoading}/>
    </>
  );
};

export default NewContactForm;