import React from "react";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i class="bx bx-award about__icon"></i>

        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">1 Year with JavaScript & React</span>
      </div>

      <div className="about__box">
        <i class="bx bx-briefcase-alt about__icon"></i>

        <h3 className="about__title">Completed</h3>
        <span className="about__subtitle"> 10+ Projects</span>
      </div>

      <div className="about__box">
        <i class="bx bxs-graduation about__icon"></i>

        <h3 className="about__title">Certificate</h3>
        <span className="about__subtitle">Full Stack Web Development</span>
      </div>
    </div>
  );
};

export default Info;
