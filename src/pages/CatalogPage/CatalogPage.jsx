import ButtonLoadMore from 'components/ButtonLoadMore/ButtonLoadMore';
import CatalogList from 'components/CatalogList/CatalogList';
import { useSelector } from 'react-redux';
import { selectHasMore } from 'store/selector';
import css from './CatalogPage.module.css';
import Filter from 'components/Filter/Filter';

const CatalogPage = () => {
  const hasMore = useSelector(selectHasMore);
  return (
    <div className={css.catalogPageWrapper}>
      <Filter />
      <div className={css.catalogBtnWrapper}>
        <CatalogList />
        {hasMore && <ButtonLoadMore />}
      </div>
    </div>
  );
};

export default CatalogPage;
