import AddToFavorites from 'components/AddToFavorites/AddToFavorites';
import Modal from 'components/Modal/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { toggleModal } from 'store/modalSlice/modalSlice';
import { selectModal } from 'store/selector';

const CatalogListItem = ({ item }) => {
  const dispatch = useDispatch();
  const openModal = useSelector(selectModal);
  console.log(openModal);

  const handleModal = () => {
    dispatch(toggleModal());
  };

  return (
    <div>
      <li>
        <h2>{item.name}</h2>
        <p>{item.price}</p>
        <p>{item.raring}</p>
        <p>{item.location}</p>
        <p>{item.description}</p>
      </li>
      <button type="button" onClick={handleModal}>
        ShowMore
      </button>
      <AddToFavorites item={item} />
      {openModal && <Modal item={item} />}
    </div>
  );
};

export default CatalogListItem;
