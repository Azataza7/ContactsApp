import React, {useEffect} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import ContactForm from '../../Components/ContactForm/ContactForm';
import {selectOneContact, selectUpdateLoading} from '../../store/contacts/contactsSlice';
import {fetchContactsData, fetchOneContact, updateContact} from '../../store/contacts/contactsThunks';

const EditContactForm = () => {
  const {id} = useParams() as { id: string };
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const onLoading = useAppSelector(selectUpdateLoading);
  const contact = useAppSelector(selectOneContact);

  useEffect(() => {
    dispatch(fetchOneContact(id));
  }, [dispatch, id]);

  const onSubmit = (updatedContact) => {
    dispatch(updateContact({id: id, data: updatedContact}));
    dispatch(fetchContactsData())
    navigate('/');
  };

  return (
    <>
      <ContactForm onSubmit={onSubmit} isLoading={onLoading} contact={contact}/>
    </>
  );
};

export default EditContactForm;