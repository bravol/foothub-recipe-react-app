import React from "react";

function ImproveSkillSection() {
  const list = [
    "Learn new recipes",
    "Experiment with food",
    "Write your own recipes",
    "Know Nutrition Facts",
    "Get Cooking tips",
    "Get Ranked",
  ];

  return (
    <div className="section improve-skills">
      <div className="col img ">
        <img src="images/gallery/improveSkills.jpg" alt="" />
      </div>
      <div className="col typography ">
        <h1 className="title">Improve Your Skills</h1>
        {list.map((item, index) => (
          <p className="skills-item" key={index}>
            {item}
          </p>
        ))}
        <button className="btn">Signup Now</button>
      </div>
    </div>
  );
}

export default ImproveSkillSection;
