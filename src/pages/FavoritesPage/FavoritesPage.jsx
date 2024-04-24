import CatalogListItem from 'components/CatalogListItem/CatalogListItem';
import { useSelector } from 'react-redux';
import { selectFavorites } from 'store/selector';

const FavoritesPage = () => {
  const favorites = useSelector(selectFavorites);
  console.log('favorites', favorites);
  return (
    <div>
      {favorites.length > 0 ? (
        <ul>
          {favorites.map(item => (
            <CatalogListItem key={item._id} item={item} />
          ))}
        </ul>
      ) : (
        <h2>You haven't added anything to favorites.</h2>
      )}
    </div>
  );
};

export default FavoritesPage;
