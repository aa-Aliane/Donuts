import React from "react";

const Home = () => {
  return (
    <div className="main__container">
      <nav className="nav">
        <h2 className="nav__logo">DonuT</h2>
        <span class="material-symbols-outlined">menu</span>
      </nav>
      <section className="first__section">
        <h1 className="fs-x4l">
          Donu<span className="fs-x5l">t</span>
        </h1>
        <p>More then 10000 flavour. best in the business since 1850.</p>
        <div className="first__section__socials">
          <img src="src/assets/instagram.png" alt="#" />
          <img src="src/assets/facebook.png" alt="#" />
          <img src="src/assets/twitter.png" alt="#" />
        </div>
      </section>
    </div>
  );
};

export default Home;
