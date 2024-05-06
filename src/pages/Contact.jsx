// src/pages/Contact.jsx
import { useState } from 'react';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let validationErrors = {};
    if (!name) validationErrors.name = 'Name is required';
    if (!email) validationErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(email))
      validationErrors.email = 'Invalid email address';
    if (!message) validationErrors.message = 'Message is required';
    return validationErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      alert('Form submitted successfully!');
      setName('');
      setEmail('');
      setMessage('');
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <section>
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='name'>Name:</label>
          <input
            type='text'
            id='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            onBlur={() =>
              setErrors((prev) => ({
                ...prev,
                name: !name ? 'Name is required' : '',
              }))
            }
          />
          {errors.name && <p className='error'>{errors.name}</p>}
        </div>
        <div>
          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={() =>
              setErrors((prev) => ({
                ...prev,
                email: !/\S+@\S+\.\S+/.test(email)
                  ? 'Invalid email address'
                  : '',
              }))
            }
          />
          {errors.email && <p className='error'>{errors.email}</p>}
        </div>
        <div>
          <label htmlFor='message'>Message:</label>
          <textarea
            id='message'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onBlur={() =>
              setErrors((prev) => ({
                ...prev,
                message: !message ? 'Message is required' : '',
              }))
            }
          />
          {errors.message && <p className='error'>{errors.message}</p>}
        </div>
        <button type='submit'>Submit</button>
      </form>
    </section>
  );
}

export default Contact;
