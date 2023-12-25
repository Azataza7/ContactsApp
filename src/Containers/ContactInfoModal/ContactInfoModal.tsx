import React from 'react';
import {ApiContacts} from '../../types';

interface Props {
  contact: ApiContacts | null;
  closeModal: () => void;
}

const ContactInfoModal: React.FC<Props> = ({contact, closeModal}) => {
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
        <button className="btn close-btn" onClick={closeModal}/>
        <button className="btn btn-secondary edit-btn"/>
        <button className="btn btn-danger delete-btn"/>
      </div>
    </div>
  );
};

export default ContactInfoModal;