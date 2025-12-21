/*Qs1. Square and sum the array elements using the arrow function and then find the
 average of the array
 */
let printSquareOfArray = [2, 4, 6, 8, 10].map((num) => num * num);
console.log(printSquareOfArray);

let nums = [2, 4, 6, 8, 10];
let sum = nums.reduce((sum, el) => sum + el);
console.log(sum);

let avg = sum / nums.length;
console.log(avg);

/*
Qs2. Create a new array using the map function whose each element is equal to the
 original element plus 5
 */
newArray = nums.map((number) => number + 5);
console.log(newArray);

let name = ["prajwal", "vaibhav", "kunal", "naresh", "abhishek"];

let newNameArray = name.map((name) => name.toUpperCase());
console.log(newNameArray);

/*
Qs4. Write a function called doubleAndReturnArgs which accepts an array and a
 variable number of arguments. The function should return a new array with the original
 array values and all of the additional arguments doubled.
 */

const doubleAndReturnArgs = (arg, ...args) => [
  ...arg,
  ...args.map((num) => num * 2),
];

let arr1 = [1, 2, 3];
let arr2 = [2, 4, 8];
console.log(doubleAndReturnArgs([1, 2], 4, 4, 8)); //  [ 1, 2, 8, 8, 16 ]

function doubleAndReturnArgs1(arg, ...args) {
  console.log(
    ...arg,
    args.map((num) => num * 2)
  );
}

/*
 Qs5. Write a function called mergeObjects that accepts two objects and returns a new
 object which contains all the keys and values of the first object and second object
 */

const obj1 = {
  name: "Prajwal",
  age: 21,
  class: "MSC CA",
};
const obj2 = {
  RollNo: 10,
  Div: "A",
  City: "Pune",
};

const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });
console.log(mergeObjects(obj1, obj2));

// const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 }); // Function scope
// console.log(mergeObjects(obj1, obj2));
