import React from "react";
import About from "../about/About";
import Contact from "../contact/Contact";
import Journey from "../journey/Journey";
import Service from "../service/Service";
import Style from "./Home.css";

const Home = () => {
  return (
    <>
      <br />
      <div className="head_banner">
        <img src="./images/c1.jpg" />
      </div>
      <About />
      <Journey />
      <Service />
      <Contact />
    </>
  );
};

export default Home;
