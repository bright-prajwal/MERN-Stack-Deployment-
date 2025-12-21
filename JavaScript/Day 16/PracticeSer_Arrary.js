let month=["january","july","march","august"];
month.shift();
month.shift();
month.unshift("june");
month.unshift("july");
console.log(month);

// Using Splice
let primary=["red","yellow","blue"];


let months=["january","july","march","august"];

console.log(months.splice(0,2,"July","june"));

console.log(months);

let porg_language =["C","C++","HTML","JavaScript","Python","Java","C#","SQL"]
console.log(porg_language.reverse().indexOf("JavaScript"));


let game=[["X",null,"O"],[null,"X",null],["O",null,"X"]]
console.log(game)

game[0][1]="O";
console.log(game);