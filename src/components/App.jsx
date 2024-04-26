import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Header from './Header/Header';
import HomePage from 'pages/HomePage/HomePage';
const CatalogPage = lazy(() => import('pages/CatalogPage/CatalogPage'));
const FavoritesPage = lazy(() => import('pages/FavoritesPage/FavoritesPage'));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<HomePage />} />
          <Route path="catalog" element={<CatalogPage />} />
          <Route path="favorites" element={<FavoritesPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </div>
  );
};
