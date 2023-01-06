import React from "react";

const MenuItem = ({ item, price, description, index }) => {
  return (
    <div className="menu-item" key={`menu-${index}`}>
      <div className="menu-item__item">{item}</div>
      <div className="menu-item__price">{price}$</div>
      <div className="menu-item__desctiption">{description}</div>
    </div>
  );
};

export default MenuItem;
