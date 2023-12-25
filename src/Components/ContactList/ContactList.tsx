import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {openModal, closeModal, selectContact, selectFetchContactsLoading} from '../../store/contacts/contactsSlice';
import {fetchContactsData} from '../../store/contacts/contactsThunks';
import Spinner from '../Spinner/Spinner';
import {ApiContacts} from '../../types';
import ContactItem from './ContactItem';
import ContactInfoModal from '../../Containers/ContactInfoModal/ContactInfoModal';
import {RootState} from '../../app/store';
import {useSelector} from 'react-redux';


const ContactList = () => {
  const contacts: ApiContacts[] = useAppSelector(selectContact);
  const isLoading = useAppSelector(selectFetchContactsLoading);
  const dispatch = useAppDispatch();
  const isModalOpen = useSelector((state: RootState) => state.contacts.isModalOpen);

  const handleContactClick = (contact: ApiContacts) => {
    dispatch(openModal(contact))
  };

  useEffect(() => {
    dispatch(fetchContactsData())
  }, [dispatch])

  return (
    <div className="contact-block">
      {isLoading ? <Spinner/> : contacts.map((contact) => (
        <ContactItem
          key={contact.id}
          contact={contact}
          onContactClick={handleContactClick}
        />
      ))}
      {isModalOpen && (
        <ContactInfoModal closeModal={() => dispatch(closeModal())}/>
      )}
    </div>
  );
};

export default ContactList;