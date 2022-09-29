import React from "react";
import { FaSearch } from "react-icons/fa";

function PreviousSearches() {
  const searches = [
    "cookies",
    "Juice",
    "Birlyani",
    "Pizza",
    "Burger",
    "Chicken",
    "Eggplant",
    "Chapati",
    "Matooke",
  ];
  return (
    <div className="previous-search">
      <h2>Previous searches</h2>
      <div className="previous-search-container">
        {searches.map((search, index) => (
          <div
            style={{ animationDelay: index + 0.1 + "s" }}
            className="search-item"
            key={index}
          >
            {search}
          </div>
        ))}
      </div>
      <div className="search-box">
        <input type="text" className="" placeholder="Search for Food item" />
        <button className="btn">
          <FaSearch />
        </button>
      </div>
    </div>
  );
}

export default PreviousSearches;
