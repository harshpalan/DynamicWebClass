import React from "react";

export default function RecipeIngredients(props) {
    const { ingredients } = props;
    return (
      <ul>
        {ingredients.map((i, index) => (
          <li key={index}>{i}</li>
        ))}
      </ul>
    );
  }