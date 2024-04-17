import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from 'store/favoritesSlice/favoritesSlice';

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
    </div>
  );
};

export default AddToFavorites;
