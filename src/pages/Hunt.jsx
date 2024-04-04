import React from "react";

function Hunt() {
  const handleClick = () => {
    window.open("");
  };

  return (
    <div>
      <div className="main__background ">
        <header>
          <h1>ASHSYM 2k24</h1>
          <h3>
            <span>Treasure Hunt</span>
            <br />
            Guidelines
          </h3>
        </header>
        <hr />
        <section>
          <ul className="">
            <li>Participant should participate individually</li>
            <li>Duration of the entire event is only 20 minutes.</li>
            <li>
              The Treasure hunt consist of five segments, each segment will have
              one clue and correctly identified clues will be given 10 points.
            </li>
            <li>The clues are to be found in a particular order.</li>
            <li>Participant cannot skip a clue. </li>
            <li>
              Skipping a clue leads to the disqualification of the Participant.
            </li>
            <li>The participant should be in rush to find the clue.</li>
            <li>
              Upon reaching to the final clue the participant should hunt the
              treasure inside the box and report immediately to the coordinator.
            </li>
            <li>
              Organizers are free to make any changes which will be informed
              prior to the competition.
            </li>
            <li>
              The time line of 4 minutes will be given for finding ach clue
            </li>
            <li>
              Venue of the event will be intimated on the day of participation.
            </li>
            <li>
              The participants who failed to find the clue within the time frame
              will not be proceeded to the next level of the event.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Hunt;
