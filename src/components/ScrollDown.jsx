import "../styles/ScrollDown.css";

function ScrollDown() {
  return (
    <div className="Scroll__container">
      <svg
        width="120"
        height="100"
        viewBox="0 0 120 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="scroll__svg"
      >
        <g id="triangles">
          <g id="lightGroup">
            <path
              id="light1"
              opacity="0.6"
              d="M53.4872 46.3509C55.7436 47.6536 55.7436 50.9105 53.4872 52.2132L13.718 75.174C11.4615 76.4767 8.64104 74.8483 8.64104 72.2428L8.64104 26.3213C8.64104 23.7158 11.4616 22.0874 13.718 23.3901L53.4872 46.3509Z"
            />
          </g>
          <g id="darkGroup">
            <path
              id="dark1"
              opacity="0.6"
              d="M74.9231 46.915C77.1795 48.2177 77.1795 51.4746 74.9231 52.7773L34.3077 76.2266C32.0513 77.5294 29.2308 75.9009 29.2308 73.2955L29.2308 26.3968C29.2308 23.7914 32.0513 22.1629 34.3077 23.4657L74.9231 46.915Z"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

export default ScrollDown;
