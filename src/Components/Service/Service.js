import React from 'react';
import './Service.css'; // Import the corresponding CSS file

const Service = () => {
  return (
    <div className='service-container'>
      <div className='service-card'>
        <h3>Card 1</h3>
        <p>Description for card 1 goes here.</p>
      </div>
      <div className='service-card'>
        <h3>Card 2</h3>
        <p>Description for card 2 goes here.</p>
      </div>
      <div className='service-card'>
        <h3>Card 3</h3>
        <p>Description for card 3 goes here.</p>
      </div>
    </div>
  );
};

export default Service;
