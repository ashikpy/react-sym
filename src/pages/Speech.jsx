import React from "react";

function Speech() {
  const handleClick = () => {
    window.open("");
  };

  return (
    <div>
      <div className="main__background ">
        <header>
          <h1>ASHSYM 2k24</h1>
          <h3>
            <span>Extempore Speech</span>
            <br />
            Guidelines
          </h3>
        </header>
        <hr />
        <section>
          <ul className="">
            <li></li>
          </ul>
          <div className="btn__container">
            <button className="events__btn btn" onClick={handleClick}>
              Click Me!
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Speech;
