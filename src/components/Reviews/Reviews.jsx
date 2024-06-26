import css from './Reviews.module.css';
import RatingStars from 'components/RatingStars/RatingStars';

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
                <RatingStars filledNumber={review.reviewer_rating} />
              </div>
            </div>
            <p>{review.comment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
