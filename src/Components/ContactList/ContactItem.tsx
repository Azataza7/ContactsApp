import React from 'react';
import {ApiContacts} from '../../types';

interface Props {
  contact: ApiContacts;
}

const ContactItem: React.FC<Props> = ({contact}) => {
  return (
    <div className="contact-item">
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