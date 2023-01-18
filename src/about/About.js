import React from "react";
import style from "./About.css";

const About = () => {
  return (
    <>
      <div className="about-section">
        <div className="about-doc">
          <h2>WHO WE ARE</h2>
          <p>
            Rubixe™ is a global technology company specializing in disruptive
            technologies - Artificial Intelligence (AI), Machine Learning,
            Robotic Process Automation (RPA). BlockChain, and Internet of Things
            (IoT).
          </p>
          <p>
            Rubixe™ mission is to enable businesses to leverage the full
            potential of disruptive technologies and stay competitive in the
            market, turning complex challenges into solutions, providing a
            strategic competitive advantage that are more efficient, effective
            and predictable.
          </p>
        </div>
        <div className="about-img">
          <img src="./images/c2.jpg" />
        </div>
      </div>
    </>
  );
};

export default About;
