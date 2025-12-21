// for(let i=1;i<=10;i++){
//     console.log(i);
// }

// for(let j=10; j>=1;j--){
//     console.log(j)
// }

for (let i = 15; i >= 1; i--) {
    if (i % 2 != 0) {
        console.log(i);
    }

}
console.log("\n")

for (let i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log(i)
    }
}
console.log("\n")

for(let i=1;i<=10;i++){
    console.log(i+"*5 = "+i*5);
}

// let n=prompt("Enter a number");
// n=parseInt(n);
// for (let i=n;i<=n*10;i=i+n){
//     console.log(i)
// }


let i=5;
while(i>=1){
    console.log(i);
    i--
}

console.log("\n");


i=0
while(i<=20){
    console.log(i);
    i++;
}

console.log("\n\n");
i=2;
while(i<=20){
    console.log(i);
    i=i+2;

}

console.log("\n");

i=1;
while(i<=20){
    console.log(i);
    i=i+2
}


// Favorite movie

let favorite ="Avatar";

let guess=prompt("Guess movie name");

while(guess!=favorite && guess!='quit'){
    guess =prompt("Wrong guess. please try again ");
}

if(guess==favorite){
    console.log("Con")
}