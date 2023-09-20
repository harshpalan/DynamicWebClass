import React from "react";
// import RECIPE_IMG from './assets/gulabjamun.jpg'
import { RECIPE } from "./recipe-data";
import RecipeInfo from "./RecipeInfo";
import RecipeTable from "./RecipeTable";
import "./recipe-card.css";

export default function RecipeCard() {
  return (
    <Card>
      <RecipeInfo title={RECIPE.title} description={RECIPE.description} />
      <RecipeImg imgSrc={RECIPE.imgSrc} />
      <RecipeTable />
    </Card>
  );
}

function Card(props) {
  return <div className="card">{props.children}</div>;
}


function RecipeImg(prop) {
  const { imgSrc } = prop;
  return <img src={imgSrc} className="card-img" alt={RECIPE.title} />;
}