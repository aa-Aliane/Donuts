import React from "react";
import MenuItem from "./MenuItem";


const HomeS2 = () => {
  return (
    <div className="home-s2">
      <h4 className="home-s2__title">little bits</h4>
      <div className="home-s2__menu">
        <div className="home-s2__menu__item">
          <MenuItem />
        </div>
        <div className="home-s2__menu__item">
          <MenuItem />
        </div>
        <div className="home-s2__menu__item">
          <MenuItem />
        </div>
        <div className="home-s2__menu__item">
          <MenuItem />
        </div>
        <div className="home-s2__menu__item">
          <MenuItem />
        </div>
        <div className="home-s2__menu__item">
          <MenuItem />
        </div>
      </div>
    </div>
  );
};

export default HomeS2;
