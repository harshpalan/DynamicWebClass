import React from "react";
import { RECIPE } from "./recipe-data";
import RecipeIngredients from "./RecipeIngredients";
import InstructionsList from "./InstructionsList";

export default function RecipeTable() {
    return (
        <table className="recipe-table">
          <tr>
            <th>Ingredients</th>
            <th>Instructions</th>
          </tr>
          <tr>
            <td>
              <RecipeIngredients ingredients={RECIPE.ingredients} />
            </td>
            <td>
              <InstructionsList instructions={RECIPE.instructions} />
            </td>
          </tr>
        </table>
      );
}