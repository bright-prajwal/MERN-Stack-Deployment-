let h1 = document.querySelector("h1");

function changeColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      h1.style.color = color;
      console.log(`color changed to ${color}!`);
      resolve("color changed");
    }, delay);
  });
}

changeColor("red", 1000)
    .then(() => {
        return changeColor("orange", 1000);
    })
    .then(() => {
        return changeColor("green", 1000);

    })
    .then(() => {
        return changeColor("blue", 1000);
    });

// async function demo() {
//   for (let i = 0; i < 10; i++) {
//     await changeColor("orange", 1000);
//     await changeColor("red", 1000);
//     await changeColor("blue", 1000);
//     await changeColor("yellow", 1000);
//     await changeColor("purple", 1000);
//     await changeColor("green", 1000);
//   }
// }

// demo();
