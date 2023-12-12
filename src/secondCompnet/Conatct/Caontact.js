import React from 'react';
import './Contact.css'; // Import the corresponding CSS file

const Contact = () => {
  return (
    <div className='contact-container'>
      <h2>Contact Us</h2>
      <form>
        <label htmlFor='name'>Name:</label>
        <input type='text' id='name' name='name' />

        <label htmlFor='email'>Email:</label>
        <input type='email' id='email' name='email' />

        <label htmlFor='message'>Message:</label>
        <textarea id='message' name='message'></textarea>

        <button type='submit'>Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
