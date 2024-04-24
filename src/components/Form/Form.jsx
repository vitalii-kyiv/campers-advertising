import { useState } from 'react';
import css from './Form.module.css';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  console.log('name', name);
  console.log('email', email);
  const handleSubmit = evt => {
    evt.preventDefault();
    const { name, value } = evt.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'email') {
      setEmail(value);
    }
  };

  const handleBlur = evt => {
    const { name, value } = evt.target;
    if (name === 'name') {
      if (!/^[a-zA-Zа-яА-Я\s-]{2,30}$/.test(value)) {
        alert(
          'Invalid name: Only letters and spaces allowed (2-30 characters).'
        );
      }
    } else if (name === 'email') {
      if (!/^\S+@\S+\.\S+$/.test(value)) {
        alert('Invalid email: Please enter a valid email address.');
      }
    }
  };

  const handleChange = evt => {
    const { name, value } = evt.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'email') {
      setEmail(value);
    }
  };

  return (
    <div className={css.formContainer}>
      <form action="" onSubmit={handleSubmit}>
        <h2 className={css.formTitle}>Book your campervan now</h2>
        <p className={css.formText}>
          Stay connected! We are always ready to help you.
        </p>
        <div className={css.formElementWrapper}>
          {' '}
          <label htmlFor="name"></label>
          <input
            className={css.formElementInput}
            placeholder="name"
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
          <label htmlFor="email"></label>
          <input
            className={css.formElementInput}
            placeholder="Email"
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
          <label htmlFor="bookingDate"></label>
          <input
            className={css.formElementInput}
            placeholder="Booking date"
            type="date"
            name="bookingDate"
            id="bookingDate"
            required
          />
          <label htmlFor="comment"></label>
          <textarea
            className={css.formElementText}
            placeholder="Comment"
            type="textarea"
            name="comment"
            id="comment"
          ></textarea>
        </div>

        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Form;
