let p = document.querySelector("div p");

p.addEventListener("click", function () {
  console.log("Prargraph was clicked");
});

let box = document.querySelector(".box");
box.addEventListener("mouseenter", function () {
  console.log("mouse inside box");
});

// this Event Listeners

let btn = document.querySelector("button");
let para = document.querySelector(".Para");
let h1 = document.querySelector("h1");
let h3 = document.querySelector("h3");
function changeColor() {
  console.dir(this.innerText);
  this.style.backgroundColor = "pink";
}

btn.addEventListener("click", changeColor);
para.addEventListener("click", changeColor);
h1.addEventListener("click", changeColor);
h3.addEventListener("click", changeColor);
