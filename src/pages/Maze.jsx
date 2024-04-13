import React from "react";

function Maze() {
  const handleClick = () => {
    window.open("");
  };

  return (
    <div>
      <div className="main__background ">
        <header>
          <h1>ASHSYM 2k24</h1>
          <h3>
            <span>Maze Hunt</span>
            <br />
            Guidelines <br /> Time: 11:00am - 11:45am
          </h3>
          <h3>The Basic rule of competition</h3>
        </header>
        <hr />
        <section>
          <ul className="">
            <li>
              {" "}
              Only team entries are allowed, and team shall consist of two
              persons.
            </li>
            <li>Registration should be done through online.</li>
            <li>
              There is NO REGISTRATION FEE for participating in the
              competitions.
            </li>
            <li>
              The decision of the quiz-master will be final and will not be
              subjected to any change.
            </li>
            <li>
              The participants shall not be allowed to use mobile or other
              electronic instruments during the quiz time
            </li>
            <li>
              Audience/Supporters shall not give any hints or clues to the
              competitors.
            </li>
            <li>
              Replacement of any participant of a team is not allowed after
              registration.
            </li>
            There will be two rounds in the quiz competition,
          </ul>
          <h3>There will be two rounds in the quiz competition,</h3>
          <p>1. Preliminary round or elimination round.</p>
          <p>2. Final round.</p>
          <h3>Preliminary round:</h3>
          <p>
            Each team will be given a set of question paper containing 10
            multiple choice objective type questions. The following rules will
            be application for the preliminary round.{" "}
          </p>
          <ul>
            <li>Time limit: 15 minutes.</li>
            <li>Each question will carry 1 mark.</li>
            <li>
              Only top 5 teams will be selected for final or stage rounds.
            </li>
            <li>
              In case of tie between 2 or more teams, further 5 questions will
              be asked for final selection. This step will be continued till the
              selection of 5 teams.{" "}
            </li>
            <li>
              The selected teams shall have to appear for the final round.
            </li>
            <li>Final quiz/stage round: </li>
            <li>The final round will be comprised of following rounds, </li>
          </ul>
          1. Round 1: Science and Technology. <br />
          2. Round 2: Logo's <br />
          3. Round 3: Awards <br />
          4. Round 4: Current affairs. <br />
          5. Round 5: Rapid fire round. <br />
          <br />
          The following rules will be application for the final round,
          <ul>
            <li>10 marks will be awarded for correct answer.</li>
            <li>Response time for each question is 30 seconds.</li>
            <li>There is not pass option.</li>
            <li>Team discussion is allowed.</li>
            <li>
              In the rapid fire round, each team will be asked 3 question one
              after another. 10 marks will be awarded for the correct answer and
              5 marks will be deducted for each wrong answer
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Maze;
