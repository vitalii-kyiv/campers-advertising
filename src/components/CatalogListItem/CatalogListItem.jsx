import AddToFavorites from 'components/AddToFavorites/AddToFavorites';
import Modal from 'components/Modal/Modal';
import css from './CatalogListItem.module.css';
import { ReactComponent as LocationIcon } from '../../images/location.svg';
import { ReactComponent as AdultsIcon } from '../../images/adults.svg';
import { ReactComponent as TransmissionIcon } from '../../images/transmission.svg';
import { ReactComponent as PetrolIcon } from '../../images/petrol.svg';
import { ReactComponent as KitchenIcon } from '../../images/kitchen.svg';
import { ReactComponent as BedsIcon } from '../../images/beds.svg';
import { ReactComponent as AcIcon } from '../../images/ac.svg';
import { ReactComponent as StarIcon } from '../../images/star.svg';
import { useState } from 'react';

const CatalogListItem = ({ item }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  console.log('isModalOpen', isModalOpen);

  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
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
        <div className={css.titlePriceWrapper}>
          <h2 className={`${css.catalogItemTitle} firstTitle`}>{item.name}</h2>
          <div className={css.priceWrapper}>
            {' '}
            <span className="firstTitle">{`€${item.price}.00`}</span>
            <AddToFavorites item={item} />
          </div>
        </div>
        <div className={css.ratingLocationWrapper}>
          <StarIcon className={css.starSvg} />
          <span
            className={`${css.itemRating} mainText`}
          >{`${item.rating} (${item.reviews.length} Reviews)`}</span>
          <LocationIcon />
          <p className="mainText">{item.location}</p>
        </div>
        <p className={css.itemText}>{item.description}</p>
        <ul className={css.detailsList}>
          {item.adults > 0 && (
            <li className={css.detailsListItem}>
              <div className={css.detailsItemWrapper}>
                <AdultsIcon className={css.detailsIcon} />
                <span
                  className={css.detailsItemText}
                >{`${item.adults} adults`}</span>
              </div>
            </li>
          )}
          {item.transmission && (
            <li className={css.detailsListItem}>
              <div className={css.detailsItemWrapper}>
                <TransmissionIcon className={css.detailsIcon} />
                <span className={css.detailsItemText}>{item.transmission}</span>
              </div>
            </li>
          )}
          {item.engine && (
            <li className={css.detailsListItem}>
              <div className={css.detailsItemWrapper}>
                <PetrolIcon className={css.detailsIcon} />
                <span className={css.detailsItemText}>{item.engine}</span>
              </div>
            </li>
          )}
          {item.details.kitchen > 0 && (
            <li className={css.detailsListItem}>
              <div className={css.detailsItemWrapper}>
                <KitchenIcon className={css.detailsIcon} />
                <span className={css.detailsItemText}>kitchen</span>
              </div>
            </li>
          )}
          {item.details.beds > 0 && (
            <li className={css.detailsListItem}>
              <div className={css.detailsItemWrapper}>
                <BedsIcon className={css.detailsIcon} />
                <span
                  className={css.detailsItemText}
                >{`${item.details.beds} beds`}</span>
              </div>
            </li>
          )}
          {item.details.airConditioner > 0 && (
            <li className={css.detailsListItem}>
              <div className={css.detailsItemWrapper}>
                <AcIcon className={css.detailsIcon} />
                <span className={css.detailsItemText}>AC</span>
              </div>
            </li>
          )}
        </ul>
        <button
          className={`${css.modalButton} buttonText`}
          type="button"
          onClick={handleModal}
        >
          Show more
        </button>
        {isModalOpen && (
          <Modal key={item._id + 10} item={item} onClose={handleModal} />
        )}
      </div>
    </li>
  );
};

export default CatalogListItem;
