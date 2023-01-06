import React from "react";

export const Footer = () => {
  return (
    <div className="footer dark">
      <h2 className="footer__title">DONUT</h2>
      <p className="footer__text">
        12 disturbing ave, New York city, United States.
      </p>
      <p className="footer__text">Monday-Friday 5:00 AM to 10:00 PM</p>
      <p className="footer__text">Saturday-Sunday 8:00 AM to 9:00 PM</p>
      <p className="footer__text">
        Office: 56C Gimblinton Street, New York City, United States
      </p>
      <p className="footer__text">Contact : 6666 - 66 - 666</p>
      <div className="footer__socials">
        <div className="home-s1__socials">
          <img src="src/assets/instagram.png" alt="#" />
          <img src="src/assets/facebook.png" alt="#" />
          <img src="src/assets/twitter.png" alt="#" />
        </div>
      </div>
    </div>
  );
};
