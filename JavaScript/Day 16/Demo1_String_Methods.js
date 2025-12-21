let str=" Hello ";
console.log(str.trim());
console.log(str.length);
let name="    Prajwal Hon     ";
console.log(name.trim());


// let password=prompt("Enter your password ");
let password="Prajwal";
newPassWord=password.trim();
console.log(newPassWord);

// String are immutable 

let msg=str.trim();
console.log(msg);

console.log(str);


// Case To Upper And ToLower 

string1="prajWal";
ToUpper=string1.toUpperCase();
console.log(ToUpper);

ToLower=string1.toLowerCase();
console.log(ToLower);

//Method chaining 

String2= "     Indira College    ";
String3=String2.trim().toUpperCase();
console.log(String3);

 
// Slice

String4="Prajwal Kantial Hon";
console.log(String4.slice(0,7));
console.log(String4.slice(8,-4));
console.log(String4.slice(-3,String4.length));


//Replace And Repeat

String5="MSc Computer Application";
Str6=String5.replace('Application','Science');
console.log(Str6);

// Repeat

Str7="Application ";
Str8=Str7.repeat(5);
console.log(Str8);

