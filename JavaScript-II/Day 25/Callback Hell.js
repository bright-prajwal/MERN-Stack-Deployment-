h1 = document.querySelector("h1");

// setTimeout(() => {
//   h1.style.color = "blue";
// }, 1000);

// setTimeout(() => {
//   h1.style.color = "green";
// }, 2000);

// setTimeout(() => {
//   h1.style.color = "red";
// }, 3000);

function changeColor(color, delay) {
  setTimeout(() => {
    h1.style.color = color;
  }, delay);
}

changeColor("blue", 1000);
changeColor("green", 2000);
changeColor("red", 3000);

h2=document.querySelector("h2");

function changeColor1(color, delay, nextColorChange) {
  setTimeout(() => {
    h2.style.color = color;
    if(nextColorChange)nextColorChange();
  }, delay);
}

changeColor1("red", 1000,() => {
  changeColor1("green", 1000, () => {
    changeColor1("blue", 1000,()=>{
        changeColor1("yellow",1000)
    });
  });
});
