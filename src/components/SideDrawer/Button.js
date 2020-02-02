import React from 'react';
import './Drawer.css';

const Button = ({ click }) => {
  return (
    <button className="Toggle" onClick={click}>
      <div className="btn-line" />
      <div className="btn-line" />
      <div className="btn-line" />
    </button>
  );
};

export default Button;
