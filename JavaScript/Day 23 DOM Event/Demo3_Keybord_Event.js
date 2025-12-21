let btn = document.querySelector("button");
// btn.addEventListener("click", function (even) {
//   console.log(even);
//   console.log("button clicked");
// });

btn.addEventListener("dblclick", function (even) {
  console.log(even);
  console.log("button clicked");
});

let input = document.querySelector("input");

// input.addEventListener("keydown", function () {
//   console.log("key was perssed");
// });

input.addEventListener("keyup", function (event) {
  console.log(event.key);
  console.log(event.code)
  console.log("key was released");
});
