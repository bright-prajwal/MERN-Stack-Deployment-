let student = ["Prajwal", "vaibhav", "Abhishek"];
console.log(student);

console.log(typeof (student));

let marks = [99, 88, 42, 97];
console.log(marks)
console.log(marks.length)

let mix = ["Prajwal", 26, 86.45];
console.log(mix);
console.log(mix[0][1]);
console.log(mix[0].length)

// Array are mutable

let name = "prajwal";// it's string
name[0] = 'P';
console.log(name);

let fruits = ["mango", "banna", "apple"];
fruits[1] = "litchi";
console.log(fruits);
// implicite index
fruits[10] = "papaya";
console.log(fruits);

/*Array Method 

1 ) Push  = addnto end

2)pop = delete from end and return it 

3)Unshift  = add to start

4) Shift = delete from start and return   
*/

console.log("\nArray Methods\n")

let cars = ["audi", "BMW", "XUV", "TATA"];
cars.push("Toyota");
console.log(cars);

cars.pop()
console.log(cars);

cars.unshift("Toyota");
console.log(cars);

cars.shift();
console.log(cars);

let primary = ["red", "yellow", "blue"];

console.log(primary.indexOf("blue")); //if found return index
console.log(primary.indexOf("bkjhgekjs")); //not found return -1

console.log(primary.includes("red")); // if found return true
console.log(primary.includes("bmw"));// not found return false 


let secondary = ["orange", "green", "violet"];

console.log(primary.concat(secondary)); 
// Combines two or more arrays. This method returns a new array without modifying any existing arrays

// not  chanage main array it creat new array 


console.log(secondary.concat(primary));


console.log(primary.reverse()); // reverse it change main array 

console.log(primary);


/// Slice Array   

// Slice return copies array does not change in main array

console.log("\nSlice Array \n")
let colors = ['red', 'yellow', 'white', 'orange', 'pink', 'blue'];
console.log(colors.slice());
console.log(colors.slice(2));
console.log(colors.slice(2, 4));
console.log(colors.slice(-2))
console.log(colors.slice(-4).sort());

/*
Splice 

Splice kay kart he ki origanl array ke andar hi change karta he

remove , replaces, add elements in place

Syntax splice(startIndex,deleteCount-optional,item 0 ....item N);

*/
console.log("\nSplice Array\n");


console.log(colors.splice(4)); // delete elements form index staring to end  and return the deleted arrary elements
console.log(colors);

// console.log(colors.splice());  delete all elements in array

console.log(colors.splice(0,1))
console.log(colors);

console.log(cars);
console.log(cars.splice(1,1));
console.log(cars);

cars.splice(0,0,"maruti","Honda");
console.log(cars);


//Insert into around two elements 
console.log(cars.splice(1,0,"mercedes"));
console.log(cars);


// Array References 



// Array Constant 

console.log("\nArray Constant \n");
let arr1=[1,2,3];
arr1.push(4);
console.log(arr1);
arr1=[2,9,3];
console.log(arr1); // it allow to assing new array elements 

const arr2=[1,2,3]; 
arr2.push(4);
arr2.shift();
// arr2=[23,45]; // But in constant Array assing array not allowed  
console.log(arr2);


// Nested Array (multi dimentional array)
console.log("\nNested Array\n");
let num=[[1,2],[3,4],[5,6]];
console.log(num);
console.log(num.length);
console.log(num[1]);
console.log(num[1][1]);
