import { useDispatch, useSelector } from 'react-redux';

const Modal = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <div style={{ width: '900px' }}>
      <p>Modal</p>
      <li>
        <h2>{item.name}</h2>
        <p>{item.price}</p>
        <p>{item.raring}</p>
        <p>{item.location}</p>
        <p>{item.description}</p>
      </li>
    </div>
  );
};

export default Modal;
