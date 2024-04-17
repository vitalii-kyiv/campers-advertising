import ButtonLoadMore from 'components/ButtonLoadMore/ButtonLoadMore';
import CatalogList from 'components/CatalogList/CatalogList';
import { useSelector } from 'react-redux';
import { selectHasMore } from 'store/selector';

const CatalogPage = () => {
  const hasMore = useSelector(selectHasMore);
  console.log('hasMore', hasMore);
  return (
    <div>
      CatalogPage
      <CatalogList />
      {hasMore && <ButtonLoadMore />}
    </div>
  );
};

export default CatalogPage;
