import React from "react";
import { Footer } from "../components/Footer";
import {HomeS1} from "../components/HomeS1";
import {HomeS2} from "../components/HomeS2";
import { HomeS3 } from "../components/HomeS3";
import { HomeS4 } from "../components/HomeS4";
import { HomeS5 } from "../components/HomeS5";
import { HomeS6 } from "../components/HomeS6";
import { HomeS7 } from "../components/HomeS7";

const Home = () => {
  return (
    <div className="main__container">
      <nav className="nav">
        <h2 className="nav__logo">DonuT</h2>
        <span class="material-symbols-outlined">menu</span>
      </nav>
      <HomeS1 />
      <HomeS2 />
      <HomeS3 />
      <HomeS4 />
      <HomeS5 />
      <HomeS6 />
      <HomeS7 />
      <Footer />
    </div>
  );
};

export default Home;
