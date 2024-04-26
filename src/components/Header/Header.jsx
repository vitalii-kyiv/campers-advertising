import { Suspense } from 'react';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { ReactComponent as FullyIntegratedCamperIcon } from '../../images/fullyIntegrated.svg';
import css from './Header.module.css';

const Header = () => {
  return (
    <div>
      <header className={css.headerСontainer}>
        <div className={css.headerWrapper}>
          <nav>
            <ul className={`${css.navList} firstTitle`}>
              <li>
                <Link to="/">
                  <div className={css.logoWrapper}>
                    <FullyIntegratedCamperIcon className={css.logo} />
                  </div>
                </Link>
              </li>
              <li>
                <Link to="Catalog">Catalog</Link>
              </li>
              <li>
                <Link to="Favorites">Favorites</Link>
              </li>
            </ul>
          </nav>
          <address>
            <ul className={`${css.adressList} buttonText`}>
              <li>
                <a href="mailto:info@campers-advertaising.com">
                  info@campers-advertaising.com
                </a>
              </li>
              <li>
                <a href="tel:+111111111111">+1 111 1111-11-11</a>
              </li>
            </ul>
          </address>
        </div>
      </header>
      <div className="container">
        <Suspense fallback={<h2>Loading...</h2>}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};
export default Header;
