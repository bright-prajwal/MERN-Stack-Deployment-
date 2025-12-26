// Call Stack

function hello(){
    console.log("inside hello fun")
    console.log("Hello");
}

function demo(){
    console.log("Calling hello fun")
    hello();
}

console.log("Calling demo fun");
demo()
console.log("End good byy")