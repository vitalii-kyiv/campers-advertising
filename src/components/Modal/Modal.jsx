import { ReactComponent as StarIcon } from '../../images/star.svg';
import { ReactComponent as LocationIcon } from '../../images/location.svg';
import { ReactComponent as CloseIcon } from '../../images/close.svg';
import css from './Modal.module.css';
import { useEffect, useState } from 'react';
import Futures from 'components/Features/Features';
import Reviews from 'components/Reviews/Reviews';
import Form from 'components/Form/Form';

const Modal = ({ item, onClose }) => {
  const [isFuturesOpen, setIsFuturesOpen] = useState(false);
  const [isReviewsOpen, setIsReviewsOpen] = useState(false);
  console.log('isFuturesOpen', isFuturesOpen);
  console.log('isReviewsOpen', isReviewsOpen);

  useEffect(() => {
    const handleKeyDown = evt => {
      if (evt.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    // document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      // document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  const handleBackdropClick = evt => {
    if (evt.currentTarget === evt.target) {
      onClose();
    }
  };

  const handleCloseClick = () => {
    onClose();
  };

  const handleFuture = () => {
    setIsFuturesOpen(!isFuturesOpen);
    if (isReviewsOpen) {
      setIsReviewsOpen(false);
    }
  };

  const handleReviews = () => {
    setIsReviewsOpen(!isReviewsOpen);
    if (isFuturesOpen) {
      setIsFuturesOpen(false);
    }
  };

  return (
    <div className={css.overlay} onClick={handleBackdropClick}>
      <div className={css.modalWindow}>
        <div className={css.titleIconWrapper}>
          <h2 className={`${css.catalogItemTitle} firstTitle`}>{item.name}</h2>
          <button type="click" onClick={handleCloseClick}>
            <CloseIcon />
          </button>
        </div>
        <div className={css.ratingLocationWrapper}>
          <StarIcon className={css.starSvg} />
          <span
            className={css.itemRating}
          >{`${item.rating} (${item.reviews.length} Reviews)`}</span>
          <LocationIcon />
          <p>{item.location}</p>
        </div>
        <div className={css.priceWrapper}>
          <span className="firstTitle">{`€${item.price}.00`}</span>
        </div>
        <ul className={css.imageList}>
          {item.gallery.map((image, index) => (
            <li key={index}>
              <div className={css.itemImgWrapper}>
                <img
                  className={css.catalogItemImage}
                  src={image}
                  alt="camper"
                  width="290"
                  height="310"
                />
              </div>
            </li>
          ))}
        </ul>
        <p className={css.itemText}>{item.description}</p>
        <div className={css.titleWrapper}>
          <h2
            className={`${css.futuresReviewsTitle} ${
              isFuturesOpen ? css.active : ''
            }`}
            onClick={handleFuture}
          >
            Futures
          </h2>
          <h2
            className={`${css.futuresReviewsTitle} ${
              isReviewsOpen ? css.active : ''
            }`}
            onClick={handleReviews}
          >
            Reviews
          </h2>
        </div>
        {isFuturesOpen && (
          <div className={css.futuresReviewFormWrapper}>
            <Futures item={item} />
            <Form />
          </div>
        )}

        {isReviewsOpen && (
          <div className={css.futuresReviewFormWrapper}>
            <Reviews item={item} />
            <Form />
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
