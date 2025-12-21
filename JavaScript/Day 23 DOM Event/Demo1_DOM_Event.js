// // OnClick
// let btn = document.querySelector("button");
// console.dir(btn);

// btn.onclick = function () {
//   alert("button was clicked");
// };

// let Hello = document.querySelector("#Hello");
// Hello.onclick = sayHello;

// let btns = document.querySelectorAll("button");

// for (btn of btns) {
//   btn.onclick = sayHello;
//   btn.onmouseenter = function () {
//     console.log("you entered a button");
//   };
// }

// Even Listener

let btn2 = document.querySelectorAll("div button");

for (button of btn2) {
//   button.addEventListener("click", sayHello);
//   button.addEventListener("click", sayName);
  button.addEventListener("dblclick", function () {
    console.log("You double clicked me");
  });
}

function sayHello() {
  alert("Hello");
}
function sayName() {
  alert("Prajwal");
}
