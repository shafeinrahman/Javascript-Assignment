const STEP = 3;        
const LIMIT = 30;      
const TICK_MS = 3000;  

const display = document.getElementById("display");

let count = 0;        
let timerId = null;    

function updateDisplay() {
  display.textContent = count;
}

function tick() {
  count += STEP;
  updateDisplay();

  if (count >= LIMIT) {
    stopTimer();
  }
}

function startTimer() {
  if (timerId !== null || count >= LIMIT) return;
  timerId = setInterval(tick, TICK_MS);
}

function stopTimer() {
  clearInterval(timerId);
  timerId = null;
}

function resetTimer() {
  stopTimer();
  count = 0;
  updateDisplay();
}

document.getElementById("start").addEventListener("click", startTimer);
document.getElementById("stop").addEventListener("click", stopTimer);
document.getElementById("reset").addEventListener("click", resetTimer);

updateDisplay();
