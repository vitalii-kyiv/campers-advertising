import { useDispatch, useSelector } from 'react-redux';
import { fetchCatalogThunk } from 'store/catalogSlice/catalogThunk';

const ButtonLoadMore = () => {
  const dispatch = useDispatch();

  const handleLoadMore = () => {
    dispatch(fetchCatalogThunk());
  };

  return (
    <div>
      <button type="button" onClick={handleLoadMore}>
        Load More
      </button>
    </div>
  );
};

export default ButtonLoadMore;
