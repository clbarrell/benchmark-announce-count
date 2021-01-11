submissions = {
  1120: "Customers in 2019!",
  1573: "Jono C",
  1675: "Jason Hawes",
  1734: "Carley",
  1761: "Lauren Morrey",
  1789: "Eloi"
};

wrong_guesses = [
  [1853, "Fresia"],
  [1854, "Apples"],
  [1900, "Fiona"],
  [2001, "Nathan"],
  [2020, "Cait"],
  [2133, "Andrew Kitis"],
  [2380, "Sushma"]
];

function gradient(x) {
  return `linear-gradient(90deg, #727193 ${x}%, white 0%)`;
}

const submission = (name, amount) => {
  var pct = amount / BIGGEST_GUESS * 100;
  return `<p style='position:relative;left:${pct}%' class='guess ${name}'>${name} (${amount})</p>`;
};

var body = document.getElementById("bodyNum");
var numElement = document.getElementById("numCount");

const BIGGEST_GUESS = 2790;
const MAX = 1793;
var num = 0;
var WAIT_TIME = 10;

function changeNumber() {
  num++;
  numElement.innerText = num;
  body.style.background = gradient(num / BIGGEST_GUESS * 100);
  if (num < 1400) {
    WAIT_TIME = 10;
  } else if (num < 1500) {
    WAIT_TIME = 30;
  } else if (num < 1700) {
    WAIT_TIME = 70;
  } else {
    WAIT_TIME = 150;
  }

  if (submissions[num] != null) {
    body.insertAdjacentHTML("beforeend", submission(submissions[num], num));
  }

  if (num < MAX) {
    setTimeout(changeNumber, WAIT_TIME);
  } else {
    wrong_guesses.forEach(x => {
      body.insertAdjacentHTML("beforeend", submission(x[1], x[0]));
    });
  }
}

function go() {
  if (num > 0 && num < MAX - 20) {
    return;
  }
  num = 0;
  document.getElementById("numCount").innerText = "0";
  document.querySelectorAll('.guess').forEach(e => e.remove());
  setTimeout(changeNumber, WAIT_TIME);
}

function run() {
  setTimeout(go, 600);
}