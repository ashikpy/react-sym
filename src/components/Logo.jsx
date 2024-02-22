import React from "react";
import "../styles/Logo.css";

function Logo() {
  return (
    <div className="logo__svg">
      <svg
        width="200"
        height="200"
        viewBox="0 0 510 510"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="actuall__logo"
      >
        <path
          d="M108.22 235.739L75.3069 293.169L74.2993 294.848L122.661 380.825H191.846L195.876 384.52L312.416 384.856L315.774 380.825L385.295 380.49L432.985 297.871L435 294.848L432.985 291.49L399.4 235.739L401.079 230.03L342.978 129.275H338.276L303.348 68.8226L204.944 68.8226L170.352 128.604L164.307 130.283L106.541 230.365L108.22 235.739Z"
          stroke="white"
          strokeWidth="2"
          className="neon"
        />
        <path
          d="M186.348 137.842L212.58 91.6603L295.75 91.9582L321.684 138.14L319.001 148.27L370.274 237.655L381.006 240.932L408.132 287.114L367.293 358.324H313.337L305.289 350.279L202.445 350.279L194.396 358.026L141.037 357.43L100.496 286.518L127.026 240.634L138.354 237.357L189.329 148.27L186.348 137.842Z"
          stroke="white"
          strokeWidth="2"
          className="neon"
        />
      </svg>
    </div>
  );
}

export default Logo;
