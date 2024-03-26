import { useState, useEffect } from "react";
import "../styles/Events.css";

function Events() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [ifClicked, setIfClicked] = useState(false);
  const [content, setContent] = useState("");

  const newList = {
    debate: <Debate />,
    idea: <Idea />,
    speech: <Speech />,
    maze: <Maze />,
    poster: <Poster />,
    hunt: <Hunt />,
    puzzle: <Puzzle />,
  };

  function Debate() {
    return (
      <div className="debate__container">
        <h1 className=" text-2xl">Debate</h1>
        <p>
          Debate is a formal contest in which the affirmative and negative sides
          of a proposition are advocated by opposing speakers. The debate is
          judged by a panel of adjudicators.
        </p>
      </div>
    );
  }

  function Idea() {
    return (
      <div className="idea__container">
        <h1>Idea Presentation</h1>
        <p>
          Idea Presentation is a competition where participants present their
          innovative ideas to a panel of judges. The ideas are judged on
          creativity, feasibility, and presentation.
        </p>
      </div>
    );
  }

  function Speech() {
    return (
      <div className="speech__container">
        <h1>Extempore Speech</h1>
        <p>
          Extempore Speech is a competition where participants are given a topic
          on the spot and are required to speak on it for a certain amount of
          time. The speech is judged on content, delivery, and presentation.
        </p>
      </div>
    );
  }

  function Maze() {
    return (
      <div className="maze__container">
        <h1>Mind Maze</h1>
        <p>
          Mind Maze is a competition where participants solve a series of
          puzzles and riddles to reach the final destination. The competition is
          judged on time taken and accuracy.
        </p>
      </div>
    );
  }

  function Poster() {
    return (
      <div className="poster__container">
        <h1>Poster Making</h1>
        <p>
          Poster Making is a competition where participants create a poster on a
          given theme. The posters are judged on creativity, originality, and
          presentation.
        </p>
      </div>
    );
  }

  function Hunt() {
    return (
      <div className="hunt__container">
        <h1>Treasure Hunt</h1>
        <p>
          Treasure Hunt is a competition where participants solve a series of
          clues to find the hidden treasure. The competition is judged on time
          taken and accuracy.
        </p>
      </div>
    );
  }

  function Puzzle() {
    return (
      <div className="puzzle__container">
        <h1>Puzzle Competition</h1>
        <p>
          Puzzle Competition is a competition where participants solve a series
          of puzzles and riddles. The competition is judged on time taken and
          accuracy.
        </p>
      </div>
    );
  }

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function handleSwitch() {
    if (windowWidth < 768) {
      return "./speech_square.png";
    } else {
      return "./spechh.png";
    }
  }

  function handleClick(element) {
    if (newList[element.toLowerCase()]) {
      setContent(newList[element.toLowerCase()]);
      setIfClicked(true);
      console.log(content);
    } else {
      console.log("No such event exists");
    }
  }

  return (
    <div
      className="events__container reveal-events flex flex-col items-center"
      id="events"
    >
      <div className={`closed ${ifClicked ? "clicked" : ""}`}>
        {ifClicked ? content : ""}
      </div>

      <h1 className="in__frames text-5xl">
        <strong>In Frames</strong>
      </h1>
      <h2 className="h2__child reveal-2 text-2xl">Technical Events</h2>
      <div className="flex__pairs">
        <div
          className="grid__containers reveal-7"
          onClick={() => handleClick("Debate")}
        >
          <img
            src="./Debate.png"
            alt="logo-for-debate"
            className="logo__debate w-80"
          />
          <div className="h3__container">
            <h3 className="mb-2 text-xl">Debate</h3>
          </div>
        </div>
        <div
          className="grid__containers reveal-7"
          onClick={() => handleClick("Idea")}
        >
          <img src="./skill1.png" alt="logo-for-" className="w-80" />
          <div className="h3__container">
            <h3 className="mb-2 text-xl">Idea Presentation</h3>
          </div>
        </div>
      </div>
      <div className="flex__single">
        <div
          className="grid__containers grid__container__last reveal-10"
          onClick={() => handleClick("Speech")}
        >
          <img
            src={handleSwitch()}
            alt="logo-for-speech"
            className="logo__speech img__container__last w-80"
          />
          <div className="h3__container h3__container__last">
            <h3 className="mb-2 text-xl">Extempore Speech</h3>
          </div>
        </div>
      </div>
      <h2 className="h2__child reveal text-3xl">Non - Technical Events</h2>
      <div className="flex__pairs">
        <div
          className="grid__containers reveal-8"
          onClick={() => handleClick("Maze")}
        >
          <img src="./mind_maze.png" alt="logo-for-" className="w-80" />
          <div className="h3__container">
            <h3 className="mb-2 text-xl">Mind Maze</h3>
          </div>
        </div>
        <div
          className="grid__containers reveal-9"
          onClick={() => handleClick("Poster")}
        >
          <img src="./poster.png" alt="logo-for-" className="w-80" />
          <div className="h3__container">
            <h3 className="mb-2 text-xl">Poster Making</h3>
          </div>
        </div>
      </div>
      <div className="flex__pairs">
        <div
          className="grid__containers reveal-8"
          onClick={() => handleClick("Hunt")}
        >
          <img src="./treasure_hunt.png" alt="logo-for-" className="w-80" />
          <div className="h3__container">
            <h3 className="mb-2 text-xl">Treasure Hunt</h3>
          </div>
        </div>
        <div
          className="grid__containers reveal-9"
          onClick={() => handleClick("Puzzle")}
        >
          <img src="./Puzzle.png" alt="logo-for-" className="w-80" />
          <div className="h3__container">
            <h3 className="mb-2 text-xl">Puzzle Competition</h3>
          </div>
        </div>
      </div>
      <hr className="hr__each" />
    </div>
  );
}

export default Events;
