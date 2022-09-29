import React from "react";
import CustomImage from "./CustomImage";

function RecipeCard({ recipe }) {
  return (
    <div className="recipe-card">
      <CustomImage imgSrc={recipe.image} pt="65%" />
      <div className="recipe-card-info">
        <img className="author-img" src={recipe.authorImg} alt="Author" />
        <p className="recipe-title">{recipe.title}</p>
        <p className="recipe-description">
          This is a description of the recipe that you want to buy at a mean
          time
        </p>
        <a href="#" className="view-btn">
          VIEW RECIPE
        </a>
      </div>
    </div>
  );
}

export default RecipeCard;
