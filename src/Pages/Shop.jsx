import React from "react";
import Hero from "../Components/Hero/Hero";
import Popular from "../Components/Popular/Popular";
import Offers from "../Components/Offers/Offers";
import NewCollections from "../Components/NewCollections/NewCollections";
import NewsLetter from "../Components/NewsLetter/NewsLetter";
import Footer from "../Components/Footer/Footer";

const Short = () => {
  return (
    <div>
      <header>
        <Hero />
      </header>
      <main>
        <Popular />
        <Offers />
        <NewCollections />
        <NewsLetter />
      </main>
    </div>
  );
};

export default Short;
