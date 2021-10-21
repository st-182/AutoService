import React from "react";
import HomeSection1 from "../components/atomic/templates/HomeSection1";
import HomeSection3 from "../components/atomic/templates/HomeSection3";

const HomeScreen = () => {
  return (
    <section>
      <h1>Home</h1>
      <HomeSection1 />
      <HomeSection3 />
    </section>
  );
};

export default HomeScreen;
