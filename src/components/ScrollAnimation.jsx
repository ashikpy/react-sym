import "../styles/ScrollAnimation.css";

function ScrollAnimation() {
  const revealClasses = [
    {
      className: ".reveal-events",
      revealPoint: 50,
      activeClass: "active-events",
    },
    { className: ".reveal", revealPoint: 50, activeClass: "active" },
    { className: ".reveal-2", revealPoint: -10, activeClass: "active-2" },
    { className: ".reveal-3", revealPoint: -10, activeClass: "active-3" },
    { className: ".reveal-4", revealPoint: -10, activeClass: "active-4" },
    { className: ".reveal-5", revealPoint: -10, activeClass: "active-5" },
    { className: ".reveal-7", revealPoint: -10, activeClass: "active-7" },
    { className: ".reveal-8", revealPoint: -10, activeClass: "active-8" },
    { className: ".reveal-9", revealPoint: -10, activeClass: "active-9" },
    { className: ".reveal-10", revealPoint: -10, activeClass: "active-10" },
  ];

  window.addEventListener("scroll", function () {
    let windowHeight = window.innerHeight;
    let scrollDownSvg = document.querySelector(".Scroll__container");

    revealClasses.forEach(({ className, revealPoint, activeClass }) => {
      let elements = document.querySelectorAll(className);

      for (let i = 0; i < elements.length; i++) {
        let revealTop = elements[i].getBoundingClientRect().top;

        if (revealTop < windowHeight - revealPoint) {
          elements[i].classList.add(activeClass);
          setTimeout(() => {
            elements[i].classList.add("new__time");
          }, 500);
          if (className === ".reveal-events") {
            scrollDownSvg.classList.add("Scroll__container__hide");
          }
        }
      }
    });
  });
}

export default ScrollAnimation;
