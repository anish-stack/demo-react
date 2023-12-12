import React from 'react';
import './Footer.css'; // Import the corresponding CSS file

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='footer-column'>
        <h4>Column 1</h4>
        <p>Content for column 1 goes here.</p>
      </div>
      <div className='footer-column'>
        <h4>Column 2</h4>
        <p>Content for column 2 goes here.</p>
      </div>
      <div className='footer-column'>
        <h4>Column 3</h4>
        <p>Content for column 3 goes here.</p>
      </div>
      <div className='footer-column'>
        <h4>Column 4</h4>
        <p>Content for column 4 goes here.</p>
      </div>
    </div>
  );
};

export default Footer;
