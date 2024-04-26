// import { fetchCatalogDataApi } from 'API/advertsServices';
import CatalogListItem from 'components/CatalogListItem/CatalogListItem';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCatalogThunk } from 'store/catalogSlice/catalogThunk';
import { selectCatalog, selectFilteredItems } from 'store/selector';
import css from './CatalogList.module.css';

const CatalogList = () => {
  const dispatch = useDispatch();
  const catalog = useSelector(selectCatalog);
  const filteredItems = useSelector(selectFilteredItems);

  useEffect(() => {
    if (!catalog.length) {
      dispatch(fetchCatalogThunk(1));
    }
  }, [catalog.length, dispatch]);

  return (
    <ul className={css.catalogList}>
      {filteredItems.map(item => (
        <CatalogListItem key={item._id} item={item} />
      ))}
    </ul>
  );
};

export default CatalogList;
