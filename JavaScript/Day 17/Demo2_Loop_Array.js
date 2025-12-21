let fruits = ["Mango", "apple", "banana", "litchi", "orange"];
for (let i = 0; i < fruits.length; i++) {
    console.log(i, fruits[i]);
}
console.log("\n");
for (let i = fruits.length - 1; 0 <= i; i--) {
    console.log(i, fruits[i]);
}


// Nested Array

let heroes = [
    ["ironman", "spiderman", "thor"],
    ["superman", "wonder woman", "flash"]
];
for (let i = 0; i < heroes.length; i++) {
    console.log(i, heroes[i], heroes[i].length);

    for (let j = 0; j < heroes[i].length; j++) {
        console.log(`j =${j}`, heroes[i][j]);
    }
    console.log();
}
console.log();

let student = [
    ["prajwal", 95],
    ["vaibhav", 96],
    ["Kunal", 94],
    ["Abhishek", 99]];

for (let i = student.length - 1; 0 <= i; i--) {
    console.log(`info of student ${i+1}`);
    for (let j=0;j<student[i].length;j++) {
        console.log(student[i][j]);
    }
}
