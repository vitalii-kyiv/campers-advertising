const CatalogListItem = ({ item }) => {
  return (
    <li>
      <h2>{item.name}</h2>
      <p>{item.price}</p>
      <p>{item.raring}</p>
      <p>{item.location}</p>
      <p>{item.description}</p>
    </li>
  );
};

export default CatalogListItem;
