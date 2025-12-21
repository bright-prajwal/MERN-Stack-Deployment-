// Check if all number in our array are mutiples of 10 or not
let nums = [10, 20, 30, 40, 50].every((el) => {
  return el % 10 == 0;
});
console.log(nums);

// create a function to find the min number in array
let arr = [1, 4, 2, 5, 0, 6, 7, 2, 9, 11, 4, 8, 5, -1, 4, 2];

let min = arr.reduce((min, el) => {
  if (min > el) {
    return el;
  } else {
    // (min<el)
    return min;
  }
});

console.log("Pint min number of array", min);
