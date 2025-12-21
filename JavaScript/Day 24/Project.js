let gameSqe = [];
let userSqe = [];

let btns = ["yellow", "red", "green", "purple"];

let started = false;
let level = 0;

h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("Game is Started");
    started = true;

    levelUp();
  }
});

function gameFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250);
}

function userFlash(btn) {
  btn.classList.add("userFlash");
  setTimeout(function () {
    btn.classList.remove("userFlash");
  }, 250);
}

function levelUp() {
  level++;
  h2.innerText = `level ${level}`;

  // random btn
  let randInx = Math.floor(Math.random() * 3);
  let randColor = btns[randInx];
  let randBtn = document.querySelector(`.${randColor}`);
  // console.log(randInx);
  // console.log(randColor);
  // console.log(randBtn);

  gameSqe.push(randColor);
  console.log(gameSqe);
  gameFlash(randBtn);
}

function checkAns() {
  // console.log("curr level",level);
  let idx = level - 1;
  if (userSqe[idx] == gameSqe[idx]) {
    console.log("same value");
  } else {
    h2.innerText = `Game Over! ${level}`;
  }
}
function btnPress() {
  console.log(this);
  let btn = this;
  userFlash(btn);

  userColor = btn.getAttribute("id");
  // console.log(userColor);
  userSqe.push(userColor);

  checkAns();
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
  btn.addEventListener("click", btnPress);
}
