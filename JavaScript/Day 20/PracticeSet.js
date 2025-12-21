// Write an arrow function that return the square of a number ;

const sqaure=(n)=> (n*n);
console.log(sqaure(5))

// Writ a function that print "Hello" 5 times at interval of 2s each

let id=setInterval(()=>{
    console.log("hello");
},2000);


setTimeout(()=>{
    clearInterval(id);
    console.log("Clear interval run")
},11000)