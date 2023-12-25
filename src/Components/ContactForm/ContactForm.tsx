import React, { useState } from 'react';
import { Contact } from '../../types';

const DEFAULTPHOTO = 'https://static.thenounproject.com/png/854888-200.png';

interface Props {
  onSubmit: (contact: Contact) => void;
  isLoading: boolean;
  contact: Contact | null;
}

const ContactForm: React.FC<Props> = ({ onSubmit, isLoading, contact }) => {
  const [contactData, setContactData] = useState<Contact | null>(contact || {
    name: '',
    phone: '',
    email: '',
    photo: '',
  });

  const changeDish = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    setContactData((prevData) => ({
      ...prevData!,
      [name]: value,
    }));
  };

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLoading || !contactData) return;

    onSubmit(contactData);
  };

  return (
    <form className="form" onSubmit={onFormSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          className="form-control"
          value={contactData?.name}
          onChange={changeDish}
        />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone</label>
        <input
          type="text"
          name="phone"
          id="phone"
          className="form-control"
          value={contactData?.phone}
          onChange={changeDish}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          className="form-control"
          value={contactData?.email}
          onChange={changeDish}
        />
      </div>
      <div className="form-group">
        <label htmlFor="photo">Photo</label>
        <input
          type="url"
          name="photo"
          id="photo"
          className="form-control"
          value={contactData?.photo}
          onChange={changeDish}
        />
      </div>
      <div className="photo-preview save-btn">
        <div className="photo-preview-item">
          <img src={contactData?.photo || DEFAULTPHOTO} alt={(contactData?.name || '') + ' preview-photo'} />
        </div>
        <button className="btn btn-success" type="submit" disabled={isLoading}>
          {isLoading ? 'Saving...' : 'Save'}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
