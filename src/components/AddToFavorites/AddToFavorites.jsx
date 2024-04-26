import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from 'store/favoritesSlice/favoritesSlice';
import css from './AddToFavorites.module.css';
import { ReactComponent as HeartIcon } from '../../images/heart.svg';
import { selectIsFavorite } from 'store/selector';

const AddToFavorites = ({ item }) => {
  const dispatch = useDispatch();

  const isFavorite = useSelector(selectIsFavorite(item._id));

  const handleAddToFavorites = () => {
    dispatch(toggleFavorite(item));
  };
  return (
    <div>
      <button type="click" onClick={handleAddToFavorites}>
        <HeartIcon
          className={`${css.heartSvg} ${
            isFavorite ? css.heartSvgFavorite : ''
          }`}
        />
      </button>
    </div>
  );
};

export default AddToFavorites;
