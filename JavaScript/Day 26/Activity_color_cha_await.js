let h1 = document.querySelector("h1");

function changeColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let num = Math.floor(Math.random() * 5) + 1;
      if (num > 3) {
        reject("Promise rejected");
      }
      h1.style.color = color;
      console.log(`color changed to ${color}!`);
      resolve("color changed");
    }, delay);
  });
}

async function demo() {
  try {
    await changeColor("orange", 1000);
    await changeColor("red", 1000);
    await changeColor("blue", 1000);
    await changeColor("yellow", 1000);
    await changeColor("purple", 1000);
    await changeColor("green", 1000);
  } catch (error) {
    console.log("error caught");
    console.log(error);
  }
  let a = 9;
  console.log(a);
  console.log("new number =", a + 3);
}

demo();
