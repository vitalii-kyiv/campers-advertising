import css from './Reviews.module.css';
import { ReactComponent as StarIcon } from '../../images/star.svg';

const Reviews = ({ item }) => {
  return (
    <div className={css.reviewsContainer}>
      <ul>
        {item.reviews.map((review, index) => (
          <li className={css.reviewsListItem} key={index}>
            <div className={css.reviewerPhotoNameWrapper}>
              <div className={css.reviewerPhoto}>{review.reviewer_name[0]}</div>
              <div className={css.nameStarsWrapper}>
                <span className={css.reviewerName}>{review.reviewer_name}</span>
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </div>
            </div>

            <span>{review.reviewer_rating}</span>
            <p>{review.comment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
