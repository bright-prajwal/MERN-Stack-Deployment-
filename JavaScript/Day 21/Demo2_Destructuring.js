/* DeStructuring 
    Sorting value of array(object) into variables;

*/

console.log(
  "\n.....................DeStructuring whit array..................."
);
let name = ["tony", "bruce", "peter", "steve", "abc", "xyz", "sham"];
// let [winner,runnerup,other]=name;
let [winner, runnerup, ...other] = name;
console.log(winner);
console.log(runnerup);
console.log(other);

console.log("\n\n...............DeStructuring whit object..................");

const student = {
  name: "Prajwal",
  age: 21,
  class: "MSc CA",
  subjects: ["AIML", "Web Services", "Android", "Software"],
  username: "prajwal.hon24@iccs.ac.in",
  password: "abcd",
  // city:"Pune"
};

// City contain defualt value
let { username, password, city: location = "Mumbai" } = student;
console.log(username);
console.log(password);
console.log(location);

// Store value of object into new variable
let { subjects: sub, class: cla } = student;
console.log(sub, cla);
