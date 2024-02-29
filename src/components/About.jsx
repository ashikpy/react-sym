import React from "react";
import "../styles/About.css";

function About() {
  return (
    <div className="about__container item-center flex flex-col justify-center text-center">
      <h1>
        <strong className="about__text text-5xl">About</strong>
      </h1>
      <p className="h1__child text-2xl">Location</p>
    </div>
  );
}

export default About;
