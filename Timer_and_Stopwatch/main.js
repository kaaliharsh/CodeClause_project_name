// Timer
let timerInterval;
let timerDisplay = document.getElementById('timerDisplay');
let startTimerBtn = document.getElementById('startTimer');
let pauseTimerBtn = document.getElementById('pauseTimer');
let resetTimerBtn = document.getElementById('resetTimer');

let timerSeconds = 0;
let timerMinutes = 0;
let timerHours = 0;

startTimerBtn.addEventListener('click', startTimer);
pauseTimerBtn.addEventListener('click', pauseTimer);
resetTimerBtn.addEventListener('click', resetTimer);

function startTimer() {
  startTimerBtn.disabled = true;
  pauseTimerBtn.disabled = false;

  timerInterval = setInterval(function () {
    timerSeconds++;
    if (timerSeconds === 60) {
      timerSeconds = 0;
      timerMinutes++;
    }
    if (timerMinutes === 60) {
      timerMinutes = 0;
      timerHours++;
    }

    updateTimerDisplay();
  }, 1000);
}

function pauseTimer() {
  startTimerBtn.disabled = false;
  pauseTimerBtn.disabled = true;
  clearInterval(timerInterval);
}

function resetTimer() {
  startTimerBtn.disabled = false;
  pauseTimerBtn.disabled = true;

  clearInterval(timerInterval);
  timerSeconds = 0;
  timerMinutes = 0;
  timerHours = 0;

  updateTimerDisplay();
}

function updateTimerDisplay() {
  let seconds = timerSeconds.toString().padStart(2, '0');
  let minutes = timerMinutes.toString().padStart(2, '0');
  let hours = timerHours.toString().padStart(2, '0');

  timerDisplay.textContent = `${hours}:${minutes}:${seconds}`;
}

// Stopwatch
let stopwatchInterval;
let stopwatchDisplay = document.getElementById('stopwatchDisplay');
let startStopwatchBtn = document.getElementById('startStopwatch');
let pauseStopwatchBtn = document.getElementById('pauseStopwatch');
let resetStopwatchBtn = document.getElementById('resetStopwatch');

let stopwatchSeconds = 0;
let stopwatchMinutes = 0;
let stopwatchHours = 0;

startStopwatchBtn.addEventListener('click', startStopwatch);
pauseStopwatchBtn.addEventListener('click', pauseStopwatch);
resetStopwatchBtn.addEventListener('click', resetStopwatch);

function startStopwatch() {
  startStopwatchBtn.disabled = true;
  pauseStopwatchBtn.disabled = false;

  stopwatchInterval = setInterval(function () {
    stopwatchSeconds++;
    if (stopwatchSeconds === 60) {
      stopwatchSeconds = 0;
      stopwatchMinutes++;
    }
    if (stopwatchMinutes === 60) {
      stopwatchMinutes = 0;
      stopwatchHours++;
    }

    updateStopwatchDisplay();
  }, 1000);
}

function pauseStopwatch() {
  startStopwatchBtn.disabled = false;
  pauseStopwatchBtn.disabled = true;
  clearInterval(stopwatchInterval);
}

function resetStopwatch() {
  startStopwatchBtn.disabled = false;
  pauseStopwatchBtn.disabled = true;

  clearInterval(stopwatchInterval);
  stopwatchSeconds = 0;
  stopwatchMinutes = 0;
  stopwatchHours = 0;

  updateStopwatchDisplay();
}

function updateStopwatchDisplay() {
  let seconds = stopwatchSeconds.toString().padStart(2, '0');
  let minutes = stopwatchMinutes.toString().padStart(2, '0');
  let hours = stopwatchHours.toString().padStart(2, '0');

  stopwatchDisplay.textContent = `${hours}:${minutes}:${seconds}`;
}