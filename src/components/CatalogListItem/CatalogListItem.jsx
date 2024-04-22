import AddToFavorites from 'components/AddToFavorites/AddToFavorites';
import Modal from 'components/Modal/Modal';
import css from './CatalogListItem.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { toggleModal } from 'store/modalSlice/modalSlice';
import { selectModal } from 'store/selector';
import { ReactComponent as LocationIcon } from '../../images/location.svg';
import { ReactComponent as AdultsIcon } from '../../images/adults.svg';
import { ReactComponent as TransmissionIcon } from '../../images/transmission.svg';
import { ReactComponent as PetrolIcon } from '../../images/petrol.svg';
import { ReactComponent as KitchenIcon } from '../../images/kitchen.svg';
import { ReactComponent as BedsIcon } from '../../images/beds.svg';
import { ReactComponent as AcIcon } from '../../images/ac.svg';

const CatalogListItem = ({ item }) => {
  const dispatch = useDispatch();
  const openModal = useSelector(selectModal);
  console.log(openModal);

  const handleModal = () => {
    dispatch(toggleModal());
  };

  return (
    <li className={css.catalogListItem}>
      <div className={css.itemImgWrapper}>
        <img
          className={css.catalogItemImage}
          src={item.gallery[0]}
          alt="camper"
          width="290"
          height="310"
        />
      </div>
      <div>
        <h2 className="firstTitle">{item.name}</h2>
        <div className={css.priceWrapper}>
          {' '}
          <span className="firstTitle">{`€${item.price}.00`}</span>
          <AddToFavorites item={item} />
        </div>
        <div className={css.ratingLocationWrapper}>
          <span>{`${item.rating} (${item.reviews.length} Reviews)`}</span>
          <LocationIcon />
          <p>{item.location}</p>
        </div>
        <p className={css.itemText}>{item.description}</p>
        <ul className={css.detailsList}>
          <li className={css.detailsListItem}>
            <div className={css.detailsItemWrapper}>
              <AdultsIcon className={css.detailsIcon} />
              <span className={css.detailsItemText}>{item.adults}</span>
            </div>
          </li>
          <li className={css.detailsListItem}>
            <div className={css.detailsItemWrapper}>
              <TransmissionIcon className={css.detailsIcon} />
              <span className={css.detailsItemText}>{item.transmission}</span>
            </div>
          </li>
          <li className={css.detailsListItem}>
            <div className={css.detailsItemWrapper}>
              <PetrolIcon className={css.detailsIcon} />
              <span className={css.detailsItemText}>{item.engine}</span>
            </div>
          </li>
          <li className={css.detailsListItem}>
            <div className={css.detailsItemWrapper}>
              <KitchenIcon className={css.detailsIcon} />
              <span className={css.detailsItemText}>
                {item.details.kitchen}
              </span>
            </div>
          </li>
          <li className={css.detailsListItem}>
            <div className={css.detailsItemWrapper}>
              <BedsIcon className={css.detailsIcon} />
              <span className={css.detailsItemText}>{item.details.beds}</span>
            </div>
          </li>
          <li className={css.detailsListItem}>
            <div className={css.detailsItemWrapper}>
              <AcIcon className={css.detailsIcon} />
              <span className={css.detailsItemText}>
                {item.details.airConditioner}
              </span>
            </div>
          </li>
        </ul>
        <button type="button" onClick={handleModal}>
          ShowMore
        </button>
        {openModal && <Modal item={item} />}
      </div>
    </li>
  );
};

export default CatalogListItem;
