import React from 'react';
import {ApiContacts} from '../../types';

interface Props {
  contact: ApiContacts;
  onContactClick: (contact: ApiContacts) => void;
}

const ContactItem: React.FC<Props> = ({contact, onContactClick}) => {
  const handleClick = () => {
    onContactClick(contact);
  };

  return (
    <div className="contact-item" onClick={handleClick}>
      <div className="contact-profile">
        <img src={contact.photo} alt={contact.name + 'photo'}/>
      </div>
      <div className="contact-body">
        <span className="name-contact">{contact.name}</span>
      </div>
    </div>
  );
};

export default ContactItem;