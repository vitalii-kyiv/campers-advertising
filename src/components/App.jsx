import { fetchCatalogDataApi } from '../API/advertsServices';
import RenderCatalog from './CatalogList/CatalogList';
export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <RenderCatalog />
    </div>
  );
};
