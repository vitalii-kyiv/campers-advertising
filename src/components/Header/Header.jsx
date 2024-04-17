import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const header = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Logo</Link>
          </li>
          <li>
            <Link to="Cataloge">Cataloge</Link>
          </li>
          <li>
            <Link to="Favorites">Favorites</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
