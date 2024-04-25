import { ReactComponent as StarIcon } from '../../images/star.svg';
import css from './RatingStars.module.css'; // Припускаємо, що стилі знаходяться в цьому файлі

const RatingStars = ({ filledNumber }) => {
  const starsArray = new Array(5).fill(null);

  return (
    <div>
      {starsArray.map((_, index) => {
        // Присвоєння класу в залежності від того, чи індекс менший за filledNumber
        const starClass = index < filledNumber ? css.filledStar : css.emptyStar;
        return <StarIcon key={index} className={starClass} />;
      })}
    </div>
  );
};

export default RatingStars;
