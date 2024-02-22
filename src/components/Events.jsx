import React from "react";
import "../styles/Events.css";

function Events() {
  return (
    <div className="Events__container mt-7 flex flex-col items-center justify-center gap-3 text-center">
      <h1 className=" text-5xl">In Frames</h1>
      <h2 className=" text-2xl my-3">Technical Events</h2>
      <div className="grid__containers">
        <img src="./logo.jpeg" alt="logo-for-" className="w-80"/>
        <h3 className="mb-2 text-xl">Debate</h3>
      </div>
      <div className="grid__containers">
        <img src="./logo.jpeg" alt="logo-for-" className="w-80"/>
        <h3 className="mb-2 text-xl">Idea Presentation</h3>
      </div>
      <div className="grid__containers">
        <img src="./logo.jpeg" alt="logo-for-" className="w-80"/>
        <h3 className="mb-2 text-xl">Extempore Speech</h3>
      </div>
      <h2 className="text-3xl my-3">Non - Technical Events</h2>
      <div className="grid__containers">
        <img src="./logo.jpeg" alt="logo-for-" className="w-80"/>
        <h3 className="mb-2 text-xl">Mind Maze</h3>
      </div>
      <div className="grid__containers">
        <img src="./logo.jpeg" alt="logo-for-" className="w-80"/>
        <h3 className="mb-2 text-xl">Poster Making</h3>
      </div>
      <div className="grid__containers">
        <img src="./logo.jpeg" alt="logo-for-" className="w-80"/>
        <h3 className="mb-2 text-xl">Treasure Hunt</h3>
      </div>
      <div className="grid__containers">
        <img src="./logo.jpeg" alt="logo-for-" className="w-80"/>
        <h3 className="mb-2 text-xl">Puzzle Competition</h3>
      </div>
    </div>
  );
}

export default Events;
