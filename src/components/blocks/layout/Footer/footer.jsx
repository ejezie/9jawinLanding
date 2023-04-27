import React from "react";
import "./footer.scss";
import Container from "../container/container";
import { Link } from "react-router-dom";
import { betsIcon, facebookIcon, gameIcon, instagramIcon, logoiconIcon, menuIcon, twitterIcon, userIcon } from "../../../../assets/images";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <Container>
          <div className="center column">
            <div className="links space-around">
              <Link className="heading-text" style={{ border: "none" }}>Terms & Conditions </Link>
              <Link className="heading-text">Regulation</Link>
              <Link className="heading-text" style={{ border: "none" }}>Data Protection</Link>
              <Link className="heading-text" style={{ border: "none" }}>Social Responsibility</Link>
              <Link className="heading-text">Who We Are </Link>
              <Link className="heading-text" style={{ border: "none" }}>
                Open An Account{" "}
              </Link>
            </div>
            <div className="footer-icons">
              <img src={facebookIcon} alt="icon" />
              <img src={twitterIcon} alt="icon" />
              <img src={instagramIcon} alt="icon" />
            </div>
          </div>
        </Container>
      </div>
      <div className="footer-bottom">
        <Container>
          <div className="f-icon-text-wrap space-between">
            <div className="footer-icon-text center">
              <img src={logoiconIcon} alt="icon" />
              <div className="heading-text">Home</div>
            </div>
            <div className="footer-icon-text center">
              <img src={menuIcon} alt="icon" />
              <div className="heading-text">A-Z Menu</div>
            </div>
            <div className="footer-icon-text center">
              <img src={gameIcon} alt="icon" />
              <div className="heading-text">Games</div>
            </div>
            <div className="footer-icon-text center">
              <img src={betsIcon} alt="icon" />
              <div className="heading-text">My Bets</div>
            </div>
            <div className="footer-icon-text center">
              <img src={userIcon} alt="icon" />
              <div className="heading-text">Me</div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
