import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from 'path/to/favoritesSlice';
import { ReactComponent as StarIcon } from 'path/to/images/star.svg';
import css from './YourComponent.module.css';
import { selectIsFavorite } from 'store/selector';

const FavoriteStar = ({ item }) => {
  const dispatch = useDispatch();
  const isFavorite = useSelector(selectIsFavorite);
  const handleToggleFavorite = () => {
    dispatch(toggleFavorite(item));
  };

  return (
    <button onClick={handleToggleFavorite} type="button">
      <StarIcon className={`${css.starSvg} ${isFavorite ? css.red : ''}`} />
    </button>
  );
};

export default FavoriteStar;
