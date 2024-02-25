import React, { useState, useEffect } from "react";
import "../styles/Events.css";

function Events() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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

  return (
    <div className="events__container flex flex-col items-center justify-center text-center">
      <h1 className="in__frames text-5xl">
        <strong>In Frames</strong>
      </h1>
      <h2 className="h2__child text-2xl">Technical Events</h2>
      <div className="flex__pairs">
        <div className="grid__containers">
          <img
            src="./Debate.png"
            alt="logo-for-debate"
            className="logo__debate w-80"
          />
          <div className="h3__container">
            <h3 className="mb-2 text-xl">Debate</h3>
          </div>
        </div>
        <div className="grid__containers">
          <img src="./logo.jpeg" alt="logo-for-" className="w-80" />
          <div className="h3__container">
            <h3 className="mb-2 text-xl">Idea Presentation</h3>
          </div>
        </div>
      </div>
      <div className="flex__single">
        <div className="grid__containers grid__container__last">
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
      <h2 className="h2__child text-3xl">Non - Technical Events</h2>
      <div className="flex__pairs">
        <div className="grid__containers">
          <img src="./mind_maze.png" alt="logo-for-" className="w-80" />
          <div className="h3__container">
            <h3 className="mb-2 text-xl">Mind Maze</h3>
          </div>
        </div>
        <div className="grid__containers">
          <img src="./logo.jpeg" alt="logo-for-" className="w-80" />
          <div className="h3__container">
            <h3 className="mb-2 text-xl">Poster Making</h3>
          </div>
        </div>
      </div>
      <div className="flex__pairs">
        <div className="grid__containers">
          <img src="./treasure_hunt.png" alt="logo-for-" className="w-80" />
          <div className="h3__container">
            <h3 className="mb-2 text-xl">Treasure Hunt</h3>
          </div>
        </div>
        <div className="grid__containers">
          <img src="./Puzzle.png" alt="logo-for-" className="w-80" />
          <div className="h3__container">
            <h3 className="mb-2 text-xl">Puzzle Competition</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Events;
