import React from "react";
import "../styles/Footer.css";

console.log("hello");

function Footer() {
  return (
    <div className="footer__section reveal-x">
      <p className="footer__text">
        Made & Designed By{" "}
        <a href="https://bento.me/ashikpy" className="Ashik__D ">
          Ash!k D
        </a>
        &nbsp;🔗
      </p>
    </div>
  );
}

export default Footer;
