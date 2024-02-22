import React from "react";
import "../styles/Events.css";

function Events() {
  return (
    <div className="events__container flex flex-col items-center justify-center text-center">
      <h1 className="in__frames text-5xl">
        <strong>In Frames</strong>
      </h1>
      <h2 className="h2__child text-2xl">Technical Events</h2>
      <div className="flex__pairs">
        <div className="grid__containers">
          <img src="./logo.jpeg" alt="logo-for-" className="w-80" />
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
      <div className="flex__pairs">
        <div className="grid__containers">
          <img src="./logo.jpeg" alt="logo-for-" className="w-80" />
          <div className="h3__container">
            <h3 className="mb-2 text-xl">Extempore Speech</h3>
          </div>
        </div>
      </div>
      <h2 className="h2__child text-3xl">Non - Technical Events</h2>
      <div className="flex__pairs">
        <div className="grid__containers">
          <img src="./logo.jpeg" alt="logo-for-" className="w-80" />
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
          <img src="./logo.jpeg" alt="logo-for-" className="w-80" />
          <div className="h3__container">
            <h3 className="mb-2 text-xl">Treasure Hunt</h3>
          </div>
        </div>
        <div className="grid__containers">
          <img src="./logo.jpeg" alt="logo-for-" className="w-80" />
          <div className="h3__container">
            <h3 className="mb-2 text-xl">Puzzle Competition</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Events;
