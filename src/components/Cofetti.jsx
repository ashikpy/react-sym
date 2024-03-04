function ifLandScape() {
  if (window.innerHeight < window.innerWidth) {
    return true;
  } else {
    return false;
  }
}

function Cofetti() {
  var end = Date.now() + 15 * 10;
  (function frame() {
    confetti({
      particleCount: ifLandScape() ? 100 : 20,
      spread: ifLandScape() ? 300 : 55,
      angle: 60,
      origin: { x: 0, y: ifLandScape() ? 0.2 : 0.7 },
    });
    confetti({
      particleCount: ifLandScape() ? 100 : 20,
      spread: ifLandScape() ? 300 : 55,
      angle: 120,
      origin: { x: 1, y: ifLandScape() ? 0.2 : 0.7 },
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
}

export default Cofetti;
