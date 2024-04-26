import { useDispatch } from 'react-redux';
import { fetchCatalogThunk } from 'store/catalogSlice/catalogThunk';
import css from './ButtonLoadMore.module.css';

const ButtonLoadMore = () => {
  const dispatch = useDispatch();

  const handleLoadMore = () => {
    dispatch(fetchCatalogThunk());
  };

  return (
    <div className={css.btnWrapper}>
      <button
        className={`${css.loadMoreBtn} buttonText`}
        type="button"
        onClick={handleLoadMore}
      >
        Load More
      </button>
    </div>
  );
};

export default ButtonLoadMore;
