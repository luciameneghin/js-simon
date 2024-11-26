const counter = document.getElementById('counter');
let randomGenerateNumber = document.getElementById('random-Num')



let seconds = 10;
counter.innerHTML = seconds--;

const stopCounter = setInterval(function () {
  counter.innerHTML = seconds;
  if (seconds === 0) {
    clearInterval(stopCounter);
  }
  seconds--
}, 1000)



randomGenerateNumber = [];
for (let i = 1; i <= 5; i++) {
  randomNumber = Math.floor(Math.random() * 50 + 1);
  randomGenerateNumber.push(randomNumber)
  console.log(randomGenerateNumber);
}

document.getElementById('random-Num').innerHTML = randomGenerateNumber.join(' - ');