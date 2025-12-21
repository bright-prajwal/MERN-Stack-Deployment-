/*Scope  
Scope determines the accessibility of variable, object,and function from different parts of the code .
1)Global scope
2) Function scope
3) Block scope
4) Lexical scope
*/

console.log("Finction Scope");

let sum = 45; // Global Scope

function calSum(a, b) {
    let sum = a + b; // Function scope
    console.log(sum);
}
calSum(1, 2);
console.log(sum);

/* 
Block Scope
A variable declared inside a {} cannot accessed from outside the block. it's work on let and const keyword 
*/
console.log("Block Scope");
{
    var a = 3;
    let b = 3;
    const c = 4;
}
console.log(a);
// console.log(b); Error
// console.log(c); Error

/* Lexical Scope 
A outer function have variable defined outside a function can be accessbile inside the another 
function defined after the variable declaration 
(note but javaScript is support hoisting)
*/

console.log("Lexical Scope");
function outerFun() {
    let x = 5;
    let y = 9;
    function innerFun() {
        console.log(x);
        console.log(y);
    }
    innerFun();
}
outerFun();

console.log("Hoisting");
function outerFun() {
    function innerFun() {
        // Function Scope
        console.log(x);
        console.log(y);
    }
    let x = 5;
    let y = 9;

    innerFun();
}
outerFun();

/* but inner function variable not possiable accessed outside 
or not possiable dierct call to ineer function*/ // in main block code

let gerrt = "hello";

function changeGerrt() {
    let gerrt = "namaste";
    console.log(gerrt);

    function innerGerrt() {
        console.log(gerrt); // we need to call inner function inside the outer side function
    }
    innerGerrt()
}
console.log(gerrt);
changeGerrt();

// Function Experssion (lambda function
let sum2 = function (a, b) {
    return a + b;
};
console.log(sum2(4, 5));

let hello = function () {
    console.log("hello");
};
hello();

hello = function () {
    console.log("namasate"); // change value
};
hello();

/* Higher order Functions 

 A function that does one or both :

         takes one or multiple function as arguments

         return a function
*/

console.log("Higher order Functions \n");

function multipleGreet(fun, n) {
    // Higher order Functions
    for (let i = 1; i <= n; i++) {
        fun();
    }
}

let gerrt1 = function () {
    console.log("Hello");
};

multipleGreet(gerrt1, 5);

console.log();
multipleGreet(function () {
    console.log("namaste");
}, 4);

// pass lambda function as parameters

// Return function
function oddevenFactory(request) {
    if (request == "odd") {
        return function (n) {
            console.log(n % 2 != 0);
        };
        return odd;
    } else if (request == "even") {
        let even = function (n) {
            console.log(n % 2 == 0);
        };
        return even;
    } else {
        console.log("wrong request");
    }
}

let request = "odd";

let func_odd = oddevenFactory(request);
// console.log(func_even)

func_odd(5);
func_odd(2);

request = "even";

let func_even = oddevenFactory(request);

func_even(4);
func_even(3);

// when create function inside object is called Methods
console.log("Methods");
const calculator = {
    num: 33,
    add(a, b) {
        // it also work
        return a + b;
    },
    sub: function (a, b) {
        return a - b;
    },
    mul: function (a, b) {
        return a * b;
    },
};

console.log(calculator.add(3, 9));
console.log(calculator.sub(5, 5));
console.log(calculator.mul(5, 8));

// this keyword
// This keyword refers to an object that is executing the current pice of code
const student = {
    name: "Prajwal",
    age: 21,
    eng: 55,
    phy: 54,
    math: 68,
    getAvg() {
        let avg = (this.eng + this.phy + this.math) / 3;
        console.log(`${this.name} got avg marks = ${avg}`);
    },
};

// // try
// try {

// } catch (error) {

// }

/* Miscellaneous Topics 

        1 ) Arrow Function 
        note A function have one arrgument not compulsory '()'
        zero arrgument () compulaory


*/
console.log("Arrow Function ");

const sum3 = (a, b) => {
    console.log(a + b);
};
sum3(5, 6);

const cube = (n) => {
    console.log(n * n * n);
};

cube(3);

const pow = (a, b) => {
    return a ** b;
};
console.log(pow(4, 5));

// Implicit return
console.log("Implicit");

const mul = (a, b) => a * b;
console.log(mul(5, 5));

//Set Timeout
// setTimeout(function,timeout)

console.log("Hi there!");
setTimeout(() => {
    console.log("ICCS");
}, 40);


console.log("Welcome to");

// setInterval(() => {
//     console.log("ICCS");
// }, 20);
