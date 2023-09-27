import React from "react";
import RecipeCard from "./RecipeCard";
import { RECIPE_LIST } from "./RecipeCard/recipe-data";
import styles from "./RecipeCard/RecipeCard.module.css";

function App() {
  return (
    <div>
      <h2 className={styles.title}>Best Recipes Around From The World🌏</h2>
      {RECIPE_LIST.map((recipe, index) => (
        <RecipeCard recipe={recipe} key={index} />
      ))}
    </div>
  );
}

export default App;
