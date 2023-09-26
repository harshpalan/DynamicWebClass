import { useState } from "react";
import styles from "./RecipeCard.module.css";
import {ReactComponent as Heart} from '@material-design-icons/svg/filled/favorite.svg'

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
      <button onClick={handleMinusClick}>[-]</button>
      {
        [...Array(count)].map((heart, index) => (
            <span key={index} className={styles.heart}><Heart/></span>
            ))
      }
      <button onClick={handlePlusClick}>[+]</button>
    </div>
  );
}
