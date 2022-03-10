import React from "react";
import Section from "./Section";
import { Link } from "./../util/router";
import "./Footer.scss";

function Footer(props) {
  return (
    <Section
      color={props.color}
      size={props.size}
      backgroundImage={props.backgroundImage}
      backgroundImageOpacity={props.backgroundImageOpacity}
      className="footer"
    >
      <div className="FooterComponent__container container">
        <div className="brand left">
          <Link to="/">
            <img src={props.logo} alt="Logo" />
          </Link>
        </div>
        <div className="links right">
          <Link to="/about">About</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/contact">Contact</Link>
          <a
            target="_blank"
            href="https://medium.com"
            rel="noopener noreferrer"
          >
            Blog
          </a>
        </div>
        <div className="social right">
          <a
            href="https://twitter.com/divjoy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="icon">
              <i className="fab fa-twitter" />
            </span>
          </a>
          <a
            href="https://facebook.com/DivjoyOfficial"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="icon">
              <i className="fab fa-facebook-f" />
            </span>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="icon">
              <i className="fab fa-instagram" />
            </span>
          </a>
        </div>
        <div className="copyright left">
          {props.copyright}
          <Link to="/legal/terms-of-service">Terms</Link>
          <Link to="/legal/privacy-policy">Privacy</Link>
        </div>
      </div>
    </Section>
  );
}

export default Footer;
