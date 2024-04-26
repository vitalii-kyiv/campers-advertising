// import { fetchCatalogDataApi } from 'API/advertsServices';
import CatalogListItem from 'components/CatalogListItem/CatalogListItem';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCatalogThunk } from 'store/catalogSlice/catalogThunk';
import { selectCatalog } from 'store/selector';

const CatalogList = () => {
  // const dataTest = async () => {
  //   const data = await fetchCatalogDataApi(1);
  //   console.log('dataTest', data);
  // };
  // dataTest();

  const dispatch = useDispatch();
  const catalog = useSelector(selectCatalog);

  useEffect(() => {
    dispatch(fetchCatalogThunk(1));
    return () => {};
  }, [dispatch]);

  return (
    <ul>
      {catalog.map(item => (
        <CatalogListItem key={item._id} item={item} />
      ))}
    </ul>
  );
};

export default CatalogList;
