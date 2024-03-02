import "../styles/Header.css";
import "../styles/Moblie-Nav.css";
import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const goToHome = () => {
    window.location.href = "/";
  };

  return (
    <div className={`header__wrapper ${isOpen ? "mobile-nav-open" : ""}`}>
      <div
        className={`moblie-nav__container ${isOpen ? "mobile-nav__toggle" : ""}`}
      >
        <ul className="mobile-nav__menu">
          <a href="">
            <li>Events</li>
          </a>
          <a href="">
            <li>Contact</li>
          </a>
          <a href="">
            <li>About</li>
          </a>
          <li className="mobile-nav__line"></li>
          <li>
            <button className="mobile-nav__btn">Register</button>
          </li>
          <li>
            <button
              className="moblie-nav__close"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                Name
                <path
                  fillRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </li>
        </ul>
      </div>
      <header className="header" id="headerbruh">
        <h1 className="header__logo" onClick={goToHome}>
          <span className="tech__text">Ash</span>
          <span className="Sym text-slate-300">Sym</span> <strong>2k</strong>
          <strong>24</strong>
        </h1>
        <nav>
          <ul className="header__menu">
            <li>
              <a className="header__link" href="#events">
                Events
              </a>
            </li>
            <li>
              <a className="header__link" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="header__link" href="#contact">
                Contact
              </a>
            </li>
            <li className="header__line"></li>
            <li>
              <a className="header__resume btn" href="#">
                Register
              </a>
            </li>
          </ul>
          <button className="header__bars" onClick={handleClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </nav>
      </header>
    </div>
  );
}

export default Header;
