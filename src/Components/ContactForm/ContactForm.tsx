import React, {useState} from 'react';
import {Contact} from '../../types';

interface Props {
  onSubmit: (contact: Contact) => void;
  isLoading: boolean;
}

const initialState: Contact = {
  name: '',
  phone: '',
  email: '',
  photo: '',
};

const ContactForm: React.FC<Props> = ({onSubmit, isLoading}) => {
  const [contact, setContact] = useState(initialState);

  const changeDish = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setContact((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };


  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLoading) return;

    onSubmit(contact);
  };

  let form = (
    <form className="form" onSubmit={onFormSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          className="form-control"
          value={contact?.name}
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
          value={contact?.phone}
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
          value={contact?.email}
          onChange={changeDish}
        />
      </div>
      <div className="form-group">
        <label htmlFor="Photo">Photo</label>
        <input
          type="url"
          name="photo"
          id="photo"
          className="form-control"
          value={contact?.photo}
          onChange={changeDish}
        />
      </div>
      <button className="btn btn-success" type="submit" disabled={isLoading}>
        {isLoading ? 'Saving...' : 'Save'}
      </button>
    </form>
  )
  return (
    <>
      {form}
    </>
  );
};

export default ContactForm;