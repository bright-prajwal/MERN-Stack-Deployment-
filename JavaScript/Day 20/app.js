// this keyword
// This keyword refers to an object that is executing the current pice of code 
const student={
    name :"Prajwal",
    age:21,
    eng:55,
    phy:54,
    math:68,
    getAvg(){
        let avg=(this.eng+this.phy+this.math)/3;
        console.log(`${this.name} got avg marks = ${avg}`);
    }
}
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
const sum3=(a,b)=>{
    console.log(a+b);
};
sum3(5,6);

const cube =(n)=>{
    console.log(n*n*n);
};

cube(3);

const pow=(a,b)=>{
    return a**b;

}
console.log(pow(4,5))

// Implicit return 
console.log("Implicit")

const mul =(a,b)=>(a*b);
console.log(mul(5,5));

//Set Timeout 
// setTimeout(function,timeout)

console.log("Hi there!");
setTimeout(() => {
    console.log("ICCS");
}, 4000);
console.log("Welcome to");


let id = setInterval(() => {
    console.log("ICCS");
}, 2000);

// how to stop sotore into id 

clearInterval(id)

// this with Arrow function (importance)

const student1={
    name:"Prajwal",
    marks:96,
    prop:this, // global scope 

    getName(){
        console.log(this);
        return this.name;

    },

    getNameArr:()=>{
        console.log(this);
        console.log(this.marks);
        console.log(this.name);

    },

    getInfo1(){
        setTimeout( ()=>{
            console.log(this);
        },2000)
    },

    getInfo2(){
        setTimeout( function() {
            console.log(this);
        },2000)   
    }
}

console.log(student1.getName())

student1.getNameArr();

console.log("getInfo1");
student1.getInfo1();


console.log("getInfo2");
student1.getInfo2();



