import "../styles/ScrollAnimation.css";

function ScrollAnimation() {
  window.addEventListener("scroll", function () {
    let revealsEvents = document.querySelectorAll(".reveal-events");
    let scrollDownSvg = document.querySelector(".Scroll__container");
    for (let i = 0; i < revealsEvents.length; i++) {
      let windowHeight = window.innerHeight;
      let revealTop = revealsEvents[i].getBoundingClientRect().top;
      let revealPoint = 50;
      if (revealTop < windowHeight - revealPoint) {
        revealsEvents[i].classList.add("active-events");
        scrollDownSvg.classList.add("Scroll__container__hide");
      }
    }

    let reveals = document.querySelectorAll(".reveal");
    for (let i = 0; i < reveals.length; i++) {
      let windowHeight = window.innerHeight;
      let revealTop = reveals[i].getBoundingClientRect().top;
      let revealPoint = 50;

      if (revealTop < windowHeight - revealPoint) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }

    let reveals2 = document.querySelectorAll(".reveal-2");
    for (let i = 0; i < reveals2.length; i++) {
      let windowHeight = window.innerHeight;
      let revealTop = reveals2[i].getBoundingClientRect().top;
      let revealPoint = -10;

      if (revealTop < windowHeight - revealPoint) {
        reveals2[i].classList.add("active-2");
      } else {
        reveals2[i].classList.remove("active-2");
      }
    }

    let reveals3 = document.querySelectorAll(".reveal-3");
    for (let i = 0; i < reveals3.length; i++) {
      let windowHeight = window.innerHeight;
      let revealTop = reveals3[i].getBoundingClientRect().top;
      let revealPoint = -10;

      if (revealTop < windowHeight - revealPoint) {
        reveals3[i].classList.add("active-3");
      } else {
        reveals3[i].classList.remove("active-3");
      }
    }

    let reveals4 = document.querySelectorAll(".reveal-4");
    for (let i = 0; i < reveals4.length; i++) {
      let windowHeight = window.innerHeight;
      let revealTop = reveals4[i].getBoundingClientRect().top;
      let revealPoint = -10;

      if (revealTop < windowHeight - revealPoint) {
        reveals4[i].classList.add("active-4");
      } else {
        reveals4[i].classList.remove("active-4");
      }
    }

    let reveals5 = document.querySelectorAll(".reveal-5");
    for (let i = 0; i < reveals5.length; i++) {
      let windowHeight = window.innerHeight;
      let revealTop = reveals5[i].getBoundingClientRect().top;
      let revealPoint = -10;

      if (revealTop < windowHeight - revealPoint) {
        reveals5[i].classList.add("active-5");
      } else {
        reveals5[i].classList.remove("active-5");
      }
    }

    let reveals7 = document.querySelectorAll(".reveal-7");
    for (let i = 0; i < reveals7.length; i++) {
      let windowHeight = window.innerHeight;
      let revealTop = reveals7[i].getBoundingClientRect().top;
      let revealPoint = -10;

      if (revealTop < windowHeight - revealPoint) {
        reveals7[i].classList.add("active-7");
      } else {
        reveals7[i].classList.remove("active-7");
      }
    }

    let reveals8 = document.querySelectorAll(".reveal-8");
    for (let i = 0; i < reveals8.length; i++) {
      let windowHeight = window.innerHeight;
      let revealTop = reveals8[i].getBoundingClientRect().top;
      let revealPoint = -10;

      if (revealTop < windowHeight - revealPoint) {
        reveals8[i].classList.add("active-8");
      } else {
        reveals8[i].classList.remove("active-8");
      }
    }

    let reveals9 = document.querySelectorAll(".reveal-9");
    for (let i = 0; i < reveals9.length; i++) {
      let windowHeight = window.innerHeight;
      let revealTop = reveals9[i].getBoundingClientRect().top;
      let revealPoint = -10;

      if (revealTop < windowHeight - revealPoint) {
        reveals9[i].classList.add("active-9");
      } else {
        reveals9[i].classList.remove("active-9");
      }
    }

    let reveals10 = document.querySelectorAll(".reveal-10");
    for (let i = 0; i < reveals10.length; i++) {
      let windowHeight = window.innerHeight;
      let revealTop = reveals10[i].getBoundingClientRect().top;
      let revealPoint = -10;

      if (revealTop < windowHeight - revealPoint) {
        reveals10[i].classList.add("active-10");
      } else {
        reveals10[i].classList.remove("active-10");
      }
    }
  });
}

export default ScrollAnimation;
