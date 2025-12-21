function getnum() {
  return new Promise((resolve, reject) => {
    let num = Math.floor(Math.random() * 10) + 1;
    setTimeout(() => {
      // return num
      console.log(num);
      resolve();
    }, 1000);
  });
}
async function demo() {
  await getnum();
  await getnum();
  await getnum();
  getnum();
}

demo();
