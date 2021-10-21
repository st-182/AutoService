import React from "react";
import HomeSection1 from "../components/atomic/templates/HomeSection1";
import HomeSection5 from "../components/atomic/templates/HomeSection5";
import HomeSection2 from "../components/atomic/templates/HomeSection2";
import HomeSection3 from "../components/atomic/templates/HomeSection3";

const HomeScreen = () => {
  return (
    <section>
      <HomeSection1 />
      <HomeSection5 />
      <HomeSection2 />
      <HomeSection3 />
    </section>
  );
};

export default HomeScreen;
