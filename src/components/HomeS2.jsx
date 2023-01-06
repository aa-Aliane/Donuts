import React from "react";
import MenuItem from "./MenuItem";
import { menu } from "../api/api";

const HomeS2 = () => {
  return (
    <div className="home-s2">
      <h4 className="home-s2__title">little bits</h4>
      <div className="home-s2__menu">
        {menu.map((m, i) => {
          return (
            <MenuItem
              item={m.item}
              price={m.price}
              description={m.description}
              index={i}
            />
          );
        })}
      </div>
      <button className="home-s2__view-menu btn dark">view menu</button>
    </div>
  );
};

export default HomeS2;
