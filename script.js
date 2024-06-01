let startTime;
let intervalId;
let running = false;
let elapsedTimeBeforePause = 0;

const timeDisplay = document.getElementById("time");
const startStopButton = document.getElementById("startStopButton");
const resetButton = document.getElementById("resetButton");

function formatTime(ms) {
  const date = new Date(ms);
  return date.toISOString().substr(11, 8);
}

function updateTimer() {
  const currentTime = new Date().getTime();
  const elapsedTime = currentTime - startTime + elapsedTimeBeforePause;
  timeDisplay.textContent = formatTime(elapsedTime);
}

function toggleTimer() {
  if (running) {
    clearInterval(intervalId);
    elapsedTimeBeforePause += new Date().getTime() - startTime;
    running = false;
    startStopButton.textContent = "Start";
  } else {
    startTime = new Date().getTime();
    intervalId = setInterval(updateTimer, 1000);
    running = true;
    startStopButton.textContent = "Stop";
  }
}

function resetTimer() {
  clearInterval(intervalId);
  running = false;
  elapsedTimeBeforePause = 0;
  timeDisplay.textContent = "00:00:00";
  startStopButton.textContent = "Start";
}

startStopButton.addEventListener("click", toggleTimer);
resetButton.addEventListener("click", resetTimer);
