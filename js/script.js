const counter = document.getElementById('counter');
const memo = document.getElementById('memo');
let randomGenerateNumber = document.getElementById('random-Num');
const form = document.querySelector('.form-field');

let seconds = 10;
counter.innerHTML = seconds--;

const stopCounter = setInterval(function () {
  counter.innerHTML = seconds;
  if (seconds === 0) {
    clearInterval(stopCounter)
    document.getElementById('counter').style.display = 'none';
    document.getElementById('memo').style.display = 'none';
    document.getElementById('random-Num').style.display = 'none';
    document.querySelector('.form-field').style.display = 'block';
  }
  seconds--
  if (seconds > 0) {
    document.querySelector('.form-field').style.display = 'none';
  }

}, 1000)



randomGenerateNumber = [];
for (let i = 1; i <= 5; i++) {
  randomNumber = Math.floor(Math.random() * 50 + 1);
  randomGenerateNumber.push(randomNumber)
  console.log(randomGenerateNumber);
}

document.getElementById('random-Num').innerHTML = randomGenerateNumber.join(' - ');