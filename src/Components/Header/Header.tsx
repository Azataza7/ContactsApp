import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <div className="header-title">
        <NavLink to="/" className="header-logo">Contacts</NavLink>
      </div>
      <div className="add-new-contact-button">
        <NavLink to='/add-contact' className="btn btn-primary">Add new contact</NavLink>
      </div>
    </div>
  );
};

export default Header;