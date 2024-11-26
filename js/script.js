const counter = document.getElementById('counter');
let seconds = 10;

counter.innerHTML = seconds--;

const stopCounter = setInterval(function () {
  counter.innerHTML = seconds;
  if (seconds === 0) {
    clearInterval(stopCounter);
  }
  seconds--
}, 1000)