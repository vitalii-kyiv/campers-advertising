import { ReactComponent as StarIcon } from '../../images/star.svg';
import css from './RatingStars.module.css';
const RatingStars = ({ filledNumber }) => {
  const starsQuantity = 5;
  const starsArray = new Array(starsQuantity).fill(null);

  return (
    <div>
      {starsArray.map((_, index) => {
        const starClass = index < filledNumber ? css.filledStar : css.emptyStar;
        return <StarIcon key={index} className={starClass} />;
      })}
    </div>
  );
};

export default RatingStars;
