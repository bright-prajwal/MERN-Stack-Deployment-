//for each loop
let fruits = ["Mango", "apple", "banana", "litchi", "orange"];

for(i of fruits){
    console.log(i);
}
console.log();

for(i of "indira collge"){
    console.log(i);
}

console.log();
// nested for of loop (for each loop)

let heroes = [
    ["ironman", "spiderman", "thor"],
    ["superman", "wonder woman", "flash"]
];

for(list of heroes){
    console.log(list);
    for(name of list){
        console.log(name);
    }
    console.log();
}