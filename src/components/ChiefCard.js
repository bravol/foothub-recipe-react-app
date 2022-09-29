import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
function ChiefCard({ chief }) {
  return (
    <div className="chief-card">
      <img src={chief.img} alt={chief.name} />
      <div className="chief-card-info">
        <h2 className="chief-card-name"> {chief.name} </h2>
        <p className="chief-recipe-count">
          Recipes:<b> {chief.recipeCount} </b>
        </p>
        <p className="chief-cuisine">
          Cuisine:<b> {chief.cuisine} </b>
        </p>
        <p className="chief-icons">
          <FaFacebook />
          <FaTwitter />
          <FaInstagram />
        </p>
      </div>
    </div>
  );
}

export default ChiefCard;
