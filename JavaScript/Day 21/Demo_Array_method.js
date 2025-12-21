// For Each Loop
console.log("For each loop");
let arr = [1, 2, 6, 5, 8.6];

let print = function (el) {
  // using lambda function
  console.log(el);
};

console.log("Print array elements");
arr.forEach(print); // function call

console.log("\n using simple function");
arr.forEach(function (el) {
  // using simple function
  console.log(el);
});

// using arrow function
arr.forEach((el) => {
  console.log(el);
});

let arr1 = [
  {
    name: "prajwal",
    marks: 96,
  },
  {
    name: "vaibhav",
    marks: 89,
  },
  {
    name: "kunal",
    marks: 82,
  },
];

arr1.forEach((student) => {
  console.log(student);
});

arr1.forEach((student) => {
  console.log(student.marks);
});

//  Map
// Change in origenal array and create new array
console.log("Map Function");
let num = [1, 2, 3, 4, 5];
let double = num.map((el) => {
  return el * 2;
});

console.log(double);

let students = [
  {
    name: "prajwal",
    marks: 96,
  },
  {
    name: "vaibhav",
    marks: 89,
  },
  {
    name: "kunal",
    marks: 82,
  },
];
console.log("\nStudent GPA");
let GPA = students.map((el) => {
  return el.marks / 10;
});
console.log(GPA);

// Filter
// Return a all elements in array thous condition satisfied return new array
console.log("Filter function ");

let nums = [2, 4, 1, 5, 6, 2, 7, 8, 9];
let even_no = nums.filter((el) => {
  return el % 2 == 0; // Check even (true), odd (false)
});

let odd_no = nums.filter((el) => {
  return el % 2 != 0;
});

let ans = nums.filter((el) => {
  return el < 5;
});
console.log("less than five", ans);
console.log("Even number", even_no);
console.log("Odd number", odd_no);

// Every function

// Return true if every element of array gives true for some function . else return false.
// arr.every(some function definition or name); Syntax

// condition satisfied all element in array return true / false
console.log("Every Function");

let array = [2, 4, 6, 8].every((el) => {
  // result store in array variable
  return el % 2 == 0;
});
console.log(array);

//Reduce
console.log("\nReduce function");
let nums1 = [1, 2, 3, 4, 5].reduce((res, el) => res + el);
console.log(nums1);
 
console.log("\nPrint array of max using Reduce Function");
let arr2 = [1, 4, 2, 5, 6, 7, 2, 9, 11, 4, 8, 5, 4, 2];
let max = arr2.reduce((max, el) => {
  if (max < el) {
    return el;
  } else {
    return max;
  } 
});

console.log(max);

// Default Parameter
/*
Giving a default value to the arguments
Syntax
function func sum(a,b=2){
      // do something
}
*/

console.log("Default parameter");

function sum(a, b = 2) {
  return a + b;
}

console.log(sum(2, 9));
console.log(sum(2));

// Spread
// Expands an iterable into multiple values

console.log("\nSpread");
  
console.log("Min value using spread : ", Math.min(...arr2));

console.log("Max value using spread : ", Math.max(...arr2));

console.log(..."PRAJWAL HON");

// Spread Wiht array Literals

console.log("Spread whit arrat Literals");

let arr3 = [1, 2, 3, 4, 5];
let newArr = [...arr3];
console.log(newArr);

let chars = [..."PRAJWAL"];
console.log(chars);

let odd = [1, 3, 5, 7, 9];
let even = [2, 4, 6, 8, 10];

let num1 = [...odd, ...even];
console.log(num1);

console.log("\nSpread wiht object literals");
const data = {
  email: "prajwal.hon24@iccs.ac.in",
  password: "abcd",
};
console.log();

let arr4 = [2, 4, 6, 8]; //  when array is store into object index will assing  as key
let name = "PRAJWAL HON"; // string aslo same
const dataCopy = {
  ...name,
  ...data,
  class: "MSc CA sem-II",
  roll_no: 10,

  // assing the array and string
  // ...arr4,
};

console.log(data);
console.log(dataCopy);

console.log("\nArray spread into object");
let obj = {
  ...arr4, // array as spread index will store as a key
};

console.log(obj);

console.log("\nRest");
//  Rest
// Allows a function to take indefinite number of arguments and bundle them in an array

function CollectElem(...args) {
  // arguments
  // rest collect element into array and perform opertion or Methods
  for (let i = 0; i < args; i++) {
    console.log("you gave us", args[i]);
  }
}

function SUM(...args) {
  return args.reduce((sum, el) => sum + el);
}
console.log("Sum of array using REST (...args)", SUM(1, 2, 3, 4, 5));

function min(msg, ...args) {
  console.log(msg);
  return args.reduce((min, el) => {
    if (min > el) {
      return el;
    } else {
      return min;
    }
  });
}

console.log(
  "\nFind minimum number of array using REST :: ",
  min("Hello", 5, 9, 8, 2, 8, 44)
);

// // PracticeSet
// let num1 = [10, 20, 30, 40, 50].every((el) => el % 10 == 0);
// console.log(num1);

// let min = arr2.reduce((min, el) => {
//   if (min > el) {
//     return el;
//   } else {
//     // (min<el)
//     return min;
//   }
// });

// console.log(min);

// //
