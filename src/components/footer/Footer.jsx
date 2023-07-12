import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Wiser</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>

          <li>
            <a href="https://docs.google.com/document/d/e/2PACX-1vTWu8i2IH4Prs5w60QmCv9qbocpMCXnkycVkvdvGOzG0to432QrFiOAi49jFGpYOAZsw6-hj6GydFiv/pub" className="footer__link">
              Resume
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
