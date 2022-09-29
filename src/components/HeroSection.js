import React from "react";
import CustomImage from "./CustomImage";

function HeroSection() {
  const information = [
    {
      title: "What are we about.",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequunturvoluptatum laborum numquam blanditiis harum quisquam eius sed oditfugiat iusto fuga praesentium optio, eaque rerum! Provident similique",
      button: "Explore Now",
    },
  ];
  const images = [
    "/images/gallery/image1.jpg",
    "/images/gallery/image2.jpg",
    "/images/gallery/image3.jpg",
    "/images/gallery/image4.jpg",
    "/images/gallery/image5.jpg",
    "/images/gallery/image6.jpg",
    "/images/gallery/image7.jpg",
    "/images/gallery/image8.jpg",
    "/images/gallery/image9.jpg",
  ];
  return (
    <div className="section hero ">
      <div className="col typography ">
        {information.map((data) => (
          <h1 className="title">{data.title}</h1>
        ))}
        {information.map((data) => (
          <p className="info">{data.content}</p>
        ))}
        {information.map((data) => (
          <button className="btn">{data.button}</button>
        ))}
      </div>
      <div className="col gallery ">
        {images.map((src, index) => (
          <CustomImage key={index} imgSrc={src} pt={"85%"} />
        ))}
      </div>
    </div>
  );
}

export default HeroSection;
