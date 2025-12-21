let arr = [1, 2, 3, 4];
let print = function (el) {
  console.log(el);
};
arr.forEach(print);
console.log();

arr.forEach(function (el) {
  console.log(el);
});
console.log();

arr.forEach((el) => console.log(el));
console.log();
console.log(arr);

let arr1 = [
  {
    name: "Prajwal",
    marks: 95,
  },

  {
    name: "Kunal",
    marks: 96,
  },
  {
    name: "Naresh",
    marks: 52,
  },
];

arr1.forEach((el) => console.log(el.marks));

let num = [1, 2, 4, 4, 5];

let double = num.map((el) => el * 2);

console.log(double);

double = num.map((el) => el * el);
console.log(double);

let gpa = arr1.map((el) => {
  return el.marks / 10;
});

console.log(gpa);

let num2 = [1, 4, 2, 3, 5, 6, 7, 7, 8, 8, 9];

let ans = num2.filter((el) => {
  return el % 2 == 0; //even
});

console.log(ans);

ans = num2.filter((el) => {
  return el % 2 != 0;
});

console.log(ans);

let num3 = [2, 4, 6, 8];
num3.every((el) => {
  return el % 2 == 0;
});

console.log(num3)
