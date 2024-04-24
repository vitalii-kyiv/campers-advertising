import { ReactComponent as StarIcon } from '../../images/star.svg';
import { ReactComponent as LocationIcon } from '../../images/location.svg';
import css from './Modal.module.css';

const Modal = ({ item }) => {
  // const dispatch = useDispatch();
  return (
    <div className={css.overlay}>
      <div className={css.modalWindow}>
        <div className={css.titlePriceWrapper}>
          <h2 className={`className=${css.catalogItemTitle} firstTitle`}>
            {item.name}
          </h2>
          <div className={css.priceWrapper}>
            <span className="firstTitle">{`€${item.price}.00`}</span>
          </div>
        </div>
        <div className={css.ratingLocationWrapper}>
          <StarIcon className={css.starSvg} />
          <span
            className={css.itemRating}
          >{`${item.rating} (${item.reviews.length} Reviews)`}</span>
          <LocationIcon />
          <p>{item.location}</p>
        </div>
        <p className={css.itemText}>{item.description}</p>
      </div>
    </div>
  );
};

export default Modal;
