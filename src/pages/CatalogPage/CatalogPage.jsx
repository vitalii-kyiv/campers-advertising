import ButtonLoadMore from 'components/ButtonLoadMore/ButtonLoadMore';
import CatalogList from 'components/CatalogList/CatalogList';
import { useSelector } from 'react-redux';
import { selectHasMore } from 'store/selector';
// import css from './CatalogPage.module.css';

const CatalogPage = () => {
  const hasMore = useSelector(selectHasMore);
  console.log('hasMore', hasMore);
  return (
    <div>
      <CatalogList />
      {hasMore && <ButtonLoadMore />}
    </div>
  );
};

export default CatalogPage;
