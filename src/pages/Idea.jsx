import React from "react";

function Idea() {
  const HandleClick = () => {
    window.open("https://forms.gle/NbPW5X3dTqg79mHK8");
  };

  return (
    <div>
      <div className="main__background ">
        <header>
          <h1>ASHSYM 2k24</h1>
          <h3>
            <span>Idea Presentation</span>
            <br />
            Guidelines
          </h3>
        </header>
        <hr />
        <section>
          <ul className="">
            <li>Maxiumum two participlants per team</li>
            <li>
              Registration is mandatory for the team members to attend this
              event.
            </li>
            <li>Abstract of the idea should not exceed more than 250 words.</li>
            <li>
              Submit the abstract of the idea in the provided Google form on or
              before 25-04-2024.
            </li>
            <li>
              Confirmation email will be sent to the registered participants
              regarding the venue and time.
            </li>
            <li>
              Ideas can be presented through PPT or prototype demonstration.
            </li>
            <li>The presentation should not exceed 5 slides in the PPT.</li>
            <li>Duration of the presentation is 5 to 7 minutes per team.</li>
            <li>Decision of the judges will be final.</li>
            <li>Google form link for the abstrat submission</li>
          </ul>
          <div className="btn__container">
            <button className="events__btn btn" onClick={HandleClick}>
              Click Me!
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Idea;
