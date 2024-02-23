import React from "react";
import "../styles/Hero.css";
import Logo from "./Logo";

const Hero = () => {
  return (
    <section className="hero align-center container flex flex-col items-center justify-center md:mt-2 lg:mt-9">
      <Logo />
      <h2 className="hero__subtitle text-base sm:text-lg xl:text-xl 2xl:mt-[-1rem]">
        <strong className="text-slate-300">We, Welcome You To,</strong>
      </h2>
      <h1 className="hero__title text-7xl sm:text-8xl xl:mt-1 xl:text-[8rem] 2xl:text-[9rem]">
        <strong className="ash__name">ASH</strong>
        <span className="text-7xl font-black text-indigo-600 sm:text-8xl xl:text-[8rem] 2xl:text-[9rem]">
          SYM
        </span>
      </h1>
      <p className="hero__discription leading-1 mt-1 max-w-[50ch] text-center text-sm font-medium text-slate-500 sm:text-base xl:mt-3">
        We, Students and faculty of <strong>Science and Humanities</strong>{" "}
        Department, are very grateful to invite you to{" "}
        <strong className="text-indigo-600">AshSym!</strong>, a technical fest
        organized by us. We are very excited to have you with us. For Further
        details, please click the{" "}
        <u>
          <strong className=" text-slate-500 ">button</strong>
        </u>{" "}
        below.
      </p>
      <button className="hero__btn btn mt-4 sm:text-base xl:mt-7">
        Get Started
      </button>
      <hr className="hr__each" />
    </section>
  );
};

export default Hero;
