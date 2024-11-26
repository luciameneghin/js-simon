const counter = document.getElementById('counter');
const memo = document.getElementById('memo');
let randomGenerateNumber = document.getElementById('random-Num');
let message = document.querySelector('.message');
// input e bottone
const form = document.querySelector('.form-field');
let myNumbers = document.querySelectorAll('.memo-number');
const btnCompare = document.querySelector('.btn-compare');

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
  randomNumber = Math.floor(Math.random() * 50) + 1;
  randomGenerateNumber.push(randomNumber)
  console.log(randomGenerateNumber);
}
document.getElementById('random-Num').innerHTML = randomGenerateNumber.join(" - ");




btnCompare.addEventListener('click', () => {
  let numberToCompare = [];
  for (let i = 0; i < myNumbers.length; i++) {
    numberToCompare.push(Number(myNumbers[i].value));
    myNumbers[i].value = '';
  }
  console.log('Numeri inseriti:', numberToCompare);

  let exactNumbers = true;
  let someNumbers = false;
  let correctNumbers = [];

  for (let i = 0; i < numberToCompare.length; i++) {
    let number = numberToCompare[i];
    if (!randomGenerateNumber.includes(number)) {
      exactNumbers = false;
    } else {
      correctNumbers.push(number);
    }
  }

  for (let i = 0; i < numberToCompare.length; i++) {
    let number = numberToCompare[i];
    if (randomGenerateNumber.includes(number)) {
      someNumbers = true;
      correctNumbers.push(number);
    }
  }

  if (exactNumbers && numberToCompare.length === randomGenerateNumber.length) {
    message.innerHTML = `Hai indovinato tutti i numeri (${correctNumbers.join(', ')})`;
  } else if (someNumbers) {
    message.innerHTML = `Alcuni numeri sono uguali (${correctNumbers.join(', ')})`;
  } else {
    message.innerHTML = 'Non ci sono numeri in comune';
  }
});
