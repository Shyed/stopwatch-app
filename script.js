// Get DOM elements
const display = document.getElementById("display");
const startBtn = document.getElementById("start-btn");
const stopBtn = document.getElementById("stop-btn");
const resetBtn = document.getElementById("reset-btn");

// Time tracking variables
let startTime = 0;
let elapsedTime = 0;
let intervalId = null;

// Format milliseconds into mm:ss:ms
function formatTime(ms) {
  const totalSeconds = Math.floor(ms / 1000);
  const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, '0');
  const seconds = String(totalSeconds % 60).padStart(2, '0');
  const milliseconds = String(Math.floor((ms % 1000) / 10)).padStart(2, '0');
  return `${minutes}:${seconds}:${milliseconds}`;
}

// Start button logic
startBtn.addEventListener("click", () => {
  if (intervalId) return; // Prevent multiple intervals

  startTime = Date.now() - elapsedTime;
  intervalId = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    display.textContent = formatTime(elapsedTime);
  }, 10);
});

// Stop button logic
stopBtn.addEventListener("click", () => {
  clearInterval(intervalId);
  intervalId = null;
});

// Reset button logic
resetBtn.addEventListener("click", () => {
  clearInterval(intervalId);
  intervalId = null;
  elapsedTime = 0;
  display.textContent = "00:00:00";
});
