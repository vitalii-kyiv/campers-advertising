import Filter from 'components/Filter/Filter';
import css from './HomePage.module.css';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <div className={`${css.heroImgWrapper} buttonText`}>
        <Link to="/catalog">
          <button className={css.heroBtn} type="click">
            Get a camper!
          </button>
        </Link>
      </div>
      <Filter />
    </div>
  );
};

export default HomePage;
