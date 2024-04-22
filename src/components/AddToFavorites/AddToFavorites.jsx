import { useDispatch } from 'react-redux';
import { toggleFavorite } from 'store/favoritesSlice/favoritesSlice';
import css from './AddToFavorites.module.css';
import { ReactComponent as HeartIcon } from '../../images/heart.svg';

const AddToFavorites = ({ item }) => {
  const dispatch = useDispatch();

  const handleAddToFavorites = () => {
    dispatch(toggleFavorite(item));
  };
  return (
    <div>
      <button type="click">
        <HeartIcon onClick={handleAddToFavorites} className={css.heartSvg} />
      </button>
    </div>
  );
};

export default AddToFavorites;
