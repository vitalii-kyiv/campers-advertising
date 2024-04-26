import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  setLocation,
  setAirConditioner,
  setTransmission,
  setHasKitchen,
  setHasTV,
  setHasShower,
  setForm,
} from '../../store/filterSlice/filterSlice';
import css from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const [location, setLocationInput] = useState('');
  const [hasAC, setHasAC] = useState(false);
  const [transmission, setHasTransmission] = useState(false);
  const [hasKitchen, setHasKitchenInput] = useState(false);
  const [hasTV, setHasTVInput] = useState(false);
  const [hasShower, setHasShowerInput] = useState(false);
  const [form, setFormInput] = useState('all');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(setLocation(location));
    dispatch(setAirConditioner(hasAC));
    dispatch(setTransmission(transmission ? 'automatic' : 'manual'));
    dispatch(setHasKitchen(hasKitchen));
    dispatch(setHasTV(hasTV));
    dispatch(setHasShower(hasShower));
    dispatch(setForm(form));
  };

  return (
    <form onSubmit={handleSubmit} className={css.container}>
      <div className={css.label}>
        <label>
          Location:
          <input
            type="text"
            value={location}
            onChange={e => setLocationInput(e.target.value)}
            className={css.input}
          />
        </label>
      </div>
      <div className={css.label}>
        <label>
          Air Conditioner:
          <input
            type="checkbox"
            checked={hasAC}
            onChange={e => setHasAC(e.target.checked)}
            className={css.checkbox}
          />
        </label>
      </div>
      <div className={css.label}>
        <label>
          Transmission:
          <input
            type="checkbox"
            checked={transmission}
            onChange={e => setHasTransmission(e.target.checked)}
            className={css.checkbox}
          />
        </label>
      </div>
      <div className={css.label}>
        <label>
          Kitchen:
          <input
            type="checkbox"
            checked={hasKitchen}
            onChange={e => setHasKitchenInput(e.target.checked)}
            className={css.checkbox}
          />
        </label>
      </div>
      <div className={css.label}>
        <label>
          TV:
          <input
            type="checkbox"
            checked={hasTV}
            onChange={e => setHasTVInput(e.target.checked)}
            className={css.checkbox}
          />
        </label>
      </div>
      <div className={css.label}>
        <label>
          Shower:
          <input
            type="checkbox"
            checked={hasShower}
            onChange={e => setHasShowerInput(e.target.checked)}
            className={css.checkbox}
          />
        </label>
      </div>
      <div className={css.label}>
        <label>
          Form:
          <select
            value={form}
            onChange={e => setFormInput(e.target.value)}
            className={css.select}
          >
            <option value="all">All</option>
            <option value="alcove">Alcove</option>
            <option value="fullyIntegrated">Fully Integrated</option>
            <option value="panelTruck">Panel Truck</option>
          </select>
        </label>
      </div>
      <button type="submit" className={css.button}>
        Search
      </button>
    </form>
  );
};

export default Filter;
