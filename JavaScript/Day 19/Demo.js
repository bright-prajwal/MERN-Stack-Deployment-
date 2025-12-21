function hello() {
    console.log("Hello");
}

hello();

function printName1() {
    console.log("Prajwal hon");
}

printName1();

function print1to5() {
    for (let i = 1; i <= 5; i++) {
        console.log(i);
    }
}
print1to5();

function isAdult() {
    let age = 18;
    if (age >= 18) {
        console.log("adult")

    } else {
        console.log("not adult");

    }
}
console.log()

function rollDice(){
    let random=Math.floor(Math.random()*6)+1;
    console.log(random);
}
rollDice()
rollDice()
rollDice()
rollDice()
rollDice()

// function Arguments
function printName(name){
    console.log(name);
}

printName("prajwal");
printName("vaibhav");

function printInfo(name,age){
    console.log(`${name}'s age is ${age}`);
}
printInfo("Prajwal",21);
printInfo("Vaibhav")// value are store order vaice  when function call pass parameters 


function sum(a,b){
    console.log(a+b);
}
sum(343243,43436);


function average(a,b,c){
    console.log((a+b+c)/3);

}
average(2,4,6);
average(3,3,3);

console.log()
function printTable(num){
    for(let i=num;i<=num*10;i=i+num){
        console.log(i);
    }
}
printTable(2);
printTable(73);
printTable(5);


// return keyword
function sumoftwonum(a,b){
    return a+b;
}

console.log("\n",sumoftwonum(sumoftwonum(4,5),8));

console.log();
function getSum(n){
    let sum=0;
    for(let i=1;i<=n;i++){
        sum+=i;

    }
    return sum;
}
console.log(getSum(5));

/*Scope  
Scope determines the accessibility of variable, object,and function from different parts of the code .
1)Global scope
2) Function scope
3) Block scope
4) Lexical scope
*/

console.log("Finction Scope");

