import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {selectContact, selectFetchContactsLoading} from '../../store/contacts/contactsSlice';
import {fetchContactsData} from '../../store/contacts/contactsThunks';
import Spinner from '../Spinner/Spinner';
import {ApiContacts} from '../../types';
import ContactItem from './ContactItem';


const ContactList = () => {
  const contacts: ApiContacts[] = useAppSelector(selectContact);
  const isLoading = useAppSelector(selectFetchContactsLoading);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchContactsData())
  }, [dispatch])

  return (
    <>
      {isLoading ? <Spinner/> : contacts.map((contact) => (
        <ContactItem
          key={contact.id}
          contact={contact}
        />
      ))}
    </>
  );
};

export default ContactList;