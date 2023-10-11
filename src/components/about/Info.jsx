import React from "react";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i class="bx bx-award about__icon"></i>

        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">2 Years with JavaScript & React</span>
      </div>

      <div className="about__box">
        <i class="bx bx-briefcase-alt about__icon"></i>

        <h3 className="about__title">Freelancing</h3>
        <span className="about__subtitle">Currently Seeking Full-Time Employment</span>
      </div>

      <div className="about__box">
        <i class="bx bxs-graduation about__icon"></i>

        <h3 className="about__title">Certificate</h3>
        <span className="about__subtitle">Full-Stack Web Development</span>
      </div>
    </div>
  );
};

export default Info;
