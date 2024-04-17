import { Suspense } from 'react';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Logo</Link>
            </li>
            <li>
              <Link to="Catalog">Catalog</Link>
            </li>
            <li>
              <Link to="Favorites">Favorites</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <Suspense fallback={<h2 className="container">Loading...</h2>}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};
export default Header;
