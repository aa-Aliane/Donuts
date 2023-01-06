import React from "react";
import HomeS1 from "../components/HomeS1";
import HomeS2 from "../components/HomeS2";

const Home = () => {
  return (
    <div className="main__container">
      <nav className="nav">
        <h2 className="nav__logo">DonuT</h2>
        <span class="material-symbols-outlined">menu</span>
      </nav>
      <HomeS1 />
      <HomeS2 />
    </div>
  );
};

export default Home;
