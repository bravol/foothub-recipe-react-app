import React from "react";
import ChiefCard from "./ChiefCard";

function Chiefs() {
  const chiefs = [
    {
      name: "Amanya Gilbert",
      img: "/images/chiefs/cook1.jpg",
      recipeCount: 10,
      cuisine: "Ugandan",
    },
    {
      name: "Waiswa Gilberto",
      img: "/images/chiefs/cook2.jpg",
      recipeCount: 100,
      cuisine: "Mexican",
    },
    {
      name: "Pablo Escobar",
      img: "/images/chiefs/cook3.jpg",
      recipeCount: 90,
      cuisine: "Colombian",
    },
    {
      name: "Jackie Chan",
      img: "/images/chiefs/cook4.jpg",
      recipeCount: 50,
      cuisine: "Chinese",
    },
    {
      name: "Malingha Robert",
      img: "/images/chiefs/cook5.jpg",
      recipeCount: 30,
      cuisine: "American",
    },
    {
      name: "Muyingo Emmanuel",
      img: "/images/chiefs/cook6.jpg",
      recipeCount: 10,
      cuisine: "Japanese",
    },
  ];
  return (
    <div className="section chiefs">
      <h1 className="title">Our Top Chiefs</h1>
      <div className="top-chiefs-container">
        {/* <ChiefCard />
        <ChiefCard />
        <ChiefCard />
        <ChiefCard />
        <ChiefCard />
        <ChiefCard /> */}
        {chiefs.map((chief) => (
          <ChiefCard key={chief.name} chief={chief} />
        ))}
      </div>
    </div>
  );
}

export default Chiefs;
