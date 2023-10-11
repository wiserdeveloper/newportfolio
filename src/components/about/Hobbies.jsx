import React from "react";

const Hobbies = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i class="bx bx-camera-movie about__icon"></i>

        <h3 className="about__title">Movies</h3>
        <span className="about__subtitle">You can always find me at my local theatre</span>
      </div>

      <div className="about__box">
        <i class="bx bx-directions about__icon"></i>

        <h3 className="about__title">Traveling</h3>
        <span className="about__subtitle">I have visited over half of the United States and plan to visit all 50 states</span>
      </div>

      <div className="about__box">
        <i class="bx bx-joystick-altbx bx-joystick-alt about__icon"></i>

        <h3 className="about__title">Restoration</h3>
        <span className="about__subtitle">Recently picked up a new love of repairing and restoring old video game consoles</span>
      </div>

      <div className="about__box">
        <i class="bx bxs-invader about__icon"></i>

        <h3 className="about__title">Video Games</h3>
        <span className="about__subtitle">Playing video games is one of my favorite stress relievers</span>
      </div>

      <div className="about__box">
        <i class="bx bxs-book about__icon"></i>

        <h3 className="about__title">Dune</h3>
        <span className="about__subtitle">I am a huge Dune fanatic and collector.</span>
      </div>

      <div className="about__box">
        <i class="bx bxs-landscape about__icon"></i>

        <h3 className="about__title">Hiking</h3>
        <span className="about__subtitle">Being outdoors is one of the most important things in my life</span>
      </div>
    </div>
  );
};

export default Hobbies;