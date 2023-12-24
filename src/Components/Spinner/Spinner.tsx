import React from 'react';

const Spinner = () => {
  return (
    <div className="preloader spinner-border text-primary" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  );
};

export default Spinner;