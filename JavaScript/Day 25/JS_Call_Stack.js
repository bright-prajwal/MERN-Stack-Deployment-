function one() {
  return 1;
}
function two() {
  return one() + one();
}

function three() {
  let ans = two() + one();
  console.log(ans);
}

three(); // 3

// Add brekPointS through the browser

// JS is single Threaded langauge

let a = 25;
console.log(a);
let b = 33;
console.log(b);
console.log(a + b);

//

setTimeout(() => {
  console.log("hi prajwal");
}, 2000);

setTimeout(() => {
  console.log("form pune");
}, 2000);
console.log("hello.....");



//