import { useDispatch } from 'react-redux';
import { toggleFavorite } from 'store/favoritesSlice/favoritesSlice';
import css from './AddToFavorites.module.css';

const AddToFavorites = ({ item }) => {
  const dispatch = useDispatch();

  const handleAddToFavorites = () => {
    dispatch(toggleFavorite(item));
  };
  return (
    <div>
      <button type="click" onClick={handleAddToFavorites}>
        Сердечко
      </button>
      <svg className={css.heartSvg} width="500" height="500">
        <use href="../../images/symbol-defs.svg#icon-Food"></use>
      </svg>
    </div>
  );
};

export default AddToFavorites;
