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
            <br />
            Time: 11:00 Am - 11:45 Am
          </h3>
        </header>
        <hr />
        <section>
          <ul className="">
            <li>
              Topics will be chosen by the participants on the spot using the
              lot system.
            </li>
            <li>
              {" "}
              The Time Limit for the speech is 7 minutes. Speech must fit within
              the allotted time frame.
            </li>
            <li>
              A maximum of 10 minutes will be given to prepare the topic they
              have chosen.
            </li>
            <li>Address the topic directly and stay focused throughout.</li>
            <li>Avoid any kind of visual aids while presenting.</li>
            <li>Speak clearly and logically while representing your ideas.</li>
            <li>
              Bring original ideas or perspectives while delivering your speech.
            </li>
            <li>
              Connect with the audience, speak effectively, and follow the
              rules.{" "}
            </li>
            <li>The decision of the jury members will be final.</li>
            <li>
              Registration is mandatory for attending the competition.
            </li>{" "}
            <li>
              An e-mail notification will be sent to the registered participants
              regarding the venue and time.
            </li>
          </ul>
          {/* <div className="btn__container">
            <button className="events__btn btn" onClick={handleClick}>
              Click Me!
            </button>
          </div> */}
        </section>
      </div>
    </div>
  );
}

export default Speech;
