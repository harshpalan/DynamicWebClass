import { useState } from "react";
import styles from "./RecipeCard.module.css";
import {ReactComponent as Heart} from '@material-design-icons/svg/filled/favorite.svg'
import {ReactComponent as Plus} from '@material-design-icons/svg/filled/add_circle_outline.svg'
import { ReactComponent as Minus } from '@material-design-icons/svg/filled/remove_circle_outline.svg';

export default function UserRating() {
  const [count, setCount] = useState(0);
  const handlePlusClick = () => {
    if (count < 5) setCount(count + 1);
  };

  const handleMinusClick = () => {
    if (count > 0) setCount(count - 1);
  }

  return (
    <div className={styles.ratings_wrapper}>
      { count !==0 && (
      <button onClick={handleMinusClick}><span className={styles.minus}><Minus/></span></button>
      )}
      {
        [...Array(count)].map((heart, index) => (
            <span key={index} className={styles.heart}><Heart/></span>
            ))
      }
      { count < 5 && (
      <button onClick={handlePlusClick}><span className={styles.plus}><Plus/></span></button>
      )}
    </div>
  );
}
