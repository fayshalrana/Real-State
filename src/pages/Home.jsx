import React from "react";
import Hero from "../components/screen/Home/Hero";
import PropertieArea from "../components/screen/Home/PropertieArea";
import Features from "../components/screen/Home/Features";
import LatestProperties from "../components/screen/Home/LatestProperties";
import HotProperty from "../components/screen/Home/HotProperty";
import CallToAction from "../components/screen/Home/CallToAction";

function Home() {
  return (
    <React.Fragment>
      <Hero />
      <PropertieArea />
      <Features />
      <LatestProperties />
      <HotProperty />
      <CallToAction />
    </React.Fragment>
  );
}

export default Home;
