import { useState } from 'react';
import DatePicker from 'react-datepicker';
import { useDispatch } from 'react-redux';

import 'react-datepicker/dist/react-datepicker.css';
import css from './Form.module.css';
import { addBookingDetails } from 'store/bookingsSlice/bookingsSlice';
import { nanoid } from '@reduxjs/toolkit';

const Form = () => {
  const dispatch = useDispatch();
  const [bookingDate, setBookingDate] = useState('');

  const handleSubmit = evt => {
    evt.preventDefault();
    const name = evt.target.name.value.trim();
    const email = evt.target.email.value.trim();

    if (!/^[a-zA-Zа-яА-Я\s-]{2,30}$/.test(name)) {
      alert('Invalid name: Only letters and spaces allowed (2-30 characters).');
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      alert('Invalid email: Please enter a valid email address.');
      return;
    }

    if (bookingDate < new Date()) {
      alert('Please select a booking date no earlier than tomorrow.');
      return;
    }

    dispatch(addBookingDetails({ id: nanoid(), name, email, bookingDate }));
    // window.location.reload();
  };

  return (
    <div className={css.formContainer}>
      <form action="" onSubmit={handleSubmit}>
        <h2 className={`${css.formTitle} secondTitle`}>
          Book your campervan now
        </h2>
        <p className={`${css.formText} mainText`}>
          Stay connected! We are always ready to help you.
        </p>
        <div className={css.formElementWrapper}>
          <label htmlFor="name"></label>
          <input
            className={css.formElementInput}
            placeholder="name"
            type="text"
            name="name"
            id="name"
            required
          />
          <label htmlFor="email"></label>
          <input
            className={css.formElementInput}
            placeholder="Email"
            type="email"
            name="email"
            id="email"
            required
          />
          <label htmlFor="bookingDate"></label>
          <DatePicker
            className={css.formElementInput}
            onChange={date => setBookingDate(date)}
            selected={bookingDate}
            placeholderText="Booking date"
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

        <button className={`${css.formButton} buttonText`} type="submit">
          Send
        </button>
      </form>
    </div>
  );
};

export default Form;
