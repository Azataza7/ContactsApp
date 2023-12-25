import React from 'react';
import {Link} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {deleteContact, fetchContactsData} from '../../store/contacts/contactsThunks';
import {RootState} from '../../app/store';

interface Props {
  closeModal: () => void;
}

const ContactInfoModal: React.FC<Props> = ({closeModal}) => {
  const dispatch = useAppDispatch();
  const contact = useAppSelector((state: RootState) => state.contacts.selectedContact);

  const handleDelete = async (id: string) => {
    try {
      await dispatch(deleteContact(id));
      await dispatch(fetchContactsData());
      closeModal();
    } catch (e) {
      console.log('Error: ' + e);
    }
  };

  if (!contact) return null;

  return (
    <div className="contact-modal-window">
      <div className="photo-profile">
        <img src={contact.photo} alt={contact.name + ' photo'}/>
      </div>
      <div className="profile-body">
        <p className="name">Name: {contact.name}</p>
        <a className="email">Email: {contact.email}</a>
        <a className="phone">Phone: {contact.phone}</a>
      </div>
      <div className="modal-buttons">
        <a className="btn close-btn" onClick={closeModal}/>
        <Link to={'/edit/' + contact.id} onClick={closeModal} className="btn btn-secondary edit-btn"/>
        <a className="btn btn-danger delete-btn" onClick={() => handleDelete(contact?.id)}/>
      </div>
    </div>
  );
};

export default ContactInfoModal;