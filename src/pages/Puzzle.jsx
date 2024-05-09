import React from "react";

function Puzzle() {
  const handleClick = () => {
    window.open("");
  };

  return (
    <div>
      <div className="main__background ">
        <header>
          <h1>ASHSYM 2k24</h1>
          <h3>
            <span>Puzzle Competition</span>
            <br />
            Guidelines
            <br />
            Time: 11:45 Am - 12:30 Pm
          </h3>
        </header>
        <hr />
        <section>
          <h1>About:</h1>
          <p>
            The competition aims to test and develop participants'
            problem-solving abilities across different types of puzzles,
            including logic puzzles, word puzzles, mathematical puzzles and
            spatial puzzles. Students are encouraged to think critically and
            creatively to find solutions to complex or unfamiliar problems
            presented in the puzzles. It promotes intellectual engagement and
            provides a platform for participants to engage with stimulating and
            challenging problems in a fun and competitive environment.
          </p>
          <h1>Key Areas:</h1>
          <ul>
            <li>General Knowledge</li>
            <li>English</li>
            <li>Aptitude</li>
            <li>Logical Reasoning</li>
            <li>Engineering Subject Areas (Major)</li>
            <li>Venue: C – 101 S & H Block</li>
          </ul>
          <h1 className="stages">Step 1: Qualifying Round</h1>
          <ul className="">
            <li>
              A first level will be administered to each team in this round to
              select the final eight teams for contesting in the second level.
            </li>
            <li>
              There will be 20 questions that are to be answered in one word on
              the question- cum- answer sheet.
            </li>
            <li>
              The jury will be entrusted with evaluating the question-cum-answer
              sheet.
            </li>
            <li>
              The top ten teams with the highest marks qualify for the next
              level.
            </li>
            <li>
              In the event of a tie, a collage image will be displayed, and the
              team that gives the correct answer will be selected for the next
              stage.
            </li>
            <li>Time allotted for this level is 10 minutes.</li>
          </ul>
          <h1 className="stages ">Stage 2: Visual Puzzle Round</h1>
          <ul>
            <li>
              Each team will get an equal number of questions in this round on
              all domains of knowledge.
            </li>
            <li>
              • Each team gets 30 seconds to answer and is awarded 10 points for
              the right answer.
            </li>
            <li>Before answering, the team members can discuss.</li>
            <li>The questions will not be passed on to the other teams.</li>
            <li>Wrong answers do not result in negative marks.</li>
            <li>
              Six teams will be selected for the next round at this level.
            </li>
            <li>Time allotted for this level is 10 minutes</li>
          </ul>
          <h1 className="stages">Stage 3: Word Puzzle Round</h1>
          <ul>
            <li>Each team gets one minute to answer.</li>{" "}
            <li>Wrong answers do not result in negative marks.</li>{" "}
            <li>
              Marks will be calculated by the maximum number of correct answers
              given by each team.
            </li>
            <li>
              In the event of a tie, a collage image will be displayed, and the
              team that gives the correct answer will be selected for the next
              stage.
            </li>{" "}
            <li>
              Five teams will be selected for the final round at this level.
            </li>
            <li>Time allotted for this level is 6 minutes.</li>
          </ul>
          <h1 className="stages ">Stage 4: Rapid Fire</h1>
          <ul>
            <li>
              Each team will select one of five subject areas. Teams can discuss
              and make a decision based on their marks, from Highest to Lowest.
            </li>
            <li>In this round, each team is asked 10 questions.</li>
            <li>Each team has only one minute to answer all the questions.</li>
            <li>
              If a team does not answer correctly, the questions will not be
              passed to the next team.
            </li>
            <li>One point is awarded for each correct answer out of ten.</li>
            <li>No negative marks for wrong answers.</li>
            <li>Time allotted for this level is 5 minutes.</li>
            <li>
              The winning team will be the one with the highest score in the
              final round.
            </li>
            <li>
              If there is a tie, a rapid level with a set of five questions will
              be asked. The team that first presses the Buzzer will answer the
              questions. If the first team answers all the questions correctly,
              they will be the winner of the competition, otherwise, the
              opponent will be the winner. Rules are similar to the Rapid Test
              Round.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Puzzle;
