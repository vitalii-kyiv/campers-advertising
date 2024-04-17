import AddToFavorites from 'components/AddToFavorites/AddToFavorites';

const CatalogListItem = ({ item }) => {
  return (
    <div>
      <li>
        <h2>{item.name}</h2>
        <p>{item.price}</p>
        <p>{item.raring}</p>
        <p>{item.location}</p>
        <p>{item.description}</p>
      </li>
      <AddToFavorites item={item} />
    </div>
  );
};

export default CatalogListItem;
