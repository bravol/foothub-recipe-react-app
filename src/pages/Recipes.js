import React from "react";
import PreviousSearches from "../components/PreviousSearches";
import RecipeCard from "../components/RecipeCard";

function Recipes() {
  const recipes = [
    {
      title: "Cheesy Chicken Pie",
      image: "/images/recipes/recipe1.jpg",
      authorImg: "/images/chiefs/cook1.jpg",
    },
    {
      title: "American Cheese Burger",
      image: "/images/recipes/recipe2.jpg",
      authorImg: "/images/chiefs/cook2.jpg",
    },
    {
      title: "Supergetti and meat balls",
      image: "/images/recipes/recipe3.jpg",
      authorImg: "/images/chiefs/cook3.jpg",
    },
    {
      title: "Mutton Biryani",
      image: "/images/recipes/recipe4.jpg",
      authorImg: "/images/chiefs/cook4.jpg",
    },
    {
      title: "Japanese Sushi",
      image: "/images/recipes/recipe5.jpg",
      authorImg: "/images/chiefs/cook5.jpg",
    },
    {
      title: "Matooke Dish",
      image: "/images/recipes/recipe6.jpg",
      authorImg: "/images/chiefs/cook6.jpg",
    },
  ].sort(() => Math.random() * 0.5);
  return (
    <div>
      <PreviousSearches />
      <div className="recipe-container">
        {recipes.map((recipe, index) => (
          <RecipeCard key={index} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}

export default Recipes;
