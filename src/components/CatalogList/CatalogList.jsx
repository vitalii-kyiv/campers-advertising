import CatalogListItem from 'components/CatalogListItem/CatalogListItem';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCatalogThunk } from 'store/catalogSlice/catalogThunk';
import { selectCatalog, selectPage } from 'store/selector';

const RenderCatalog = () => {
  const dispatch = useDispatch();
  const catalog = useSelector(selectCatalog);
  const page = useSelector(selectPage);

  useEffect(() => {
    dispatch(fetchCatalogThunk(page));
  }, [dispatch, page]);

  return (
    <ul>
      {catalog.map(item => (
        <CatalogListItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default RenderCatalog;
