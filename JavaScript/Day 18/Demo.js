let arr = [];
console.log(typeof (arr));

const student = {
    name: "Prajwal",
    age: 23,
    marks: 86.45,
    city: "Pune"
};
console.log(student);

const item = {
    price: 100.99,
    discount: 50,
    colors: ["red", "pink"]
};

console.log(item);


const post = {
    username: "@prajwalhon",
    content: "This is my #firstpost",
    likes: 150,
    reposts: 5,
    tags: ["@iccs", "@indiracollege"]
};

console.log(post);

// how get value from object 

console.log(post["content"]);

// usning dot 
console.log(post.username);

// object in side array  get the value 

console.log(post.tags[1]);

// value are store other variable get them

let prop = "likes";
console.log(post[prop]);

console.log(post)

// JS automatically convert object key to strings.
// Even if we made the number as a key , the number will be convert t o string .

// In js when we create object key are aslo support  JSkeyword Why it convert into string fromat that way 
console.log();
const obj = {
    1: "a",
    2: "b",
    true: "c",
    null: "d",
    undefined: "z",

}
// using dot opertoer not convert number as string .
// console.log(obj.1) Error
console.log(obj[1]); // use the close intrval
console.log(obj);
console.log(obj.null);
console.log(obj.true);
console.log(obj.undefined);


// Add / Update value

const student1 = {
    name: "Prajwal",
    age: 21,
    marks: 95,
    city: "Pune"
};
student1.city = "Delhi";
student1.age = 21;
student1.marks = 'A+';
console.log(student1);

// Add new key value 

student1.gender = "Male";
console.log("\n", student1, "\n");

student1.marks = [96, 89, 98];
console.log(student1);

// delete value 
delete student1.marks
console.log("\n", student1);

//Nested Object 
const classInfo = {
    prajwal: {
        age: 21,
        grade: "O"
    },
    vaibhav: {
        age: 24,
        grade: "A+"
    },
    kunal: {
        age: 22,
        grade: "A"
    }
};

console.log("\n",classInfo);
console.log("\n",classInfo.prajwal);
console.log("\n",classInfo.vaibhav);

console.log("\n",classInfo.prajwal.age);
console.log(classInfo.vaibhav.grade);


// array of object 
// storing data

// array of object can get by index accses

const classInfo1=[
    {
        name:"prajwa",
        grade : "A+",
        city:"pune"

    },
    {
        name:"Vaibhav",
        grade : "A+",
        city:"pune"
    },
    {
        name:"Kuanl",
        grade : "A+",
        city:"pune"
    }
]

console.log("\n",classInfo1);
console.log(classInfo1[2])
console.log(classInfo1[1].name);
console.log();
classInfo1[0].gender="Male";
console.log(classInfo1[0]);

//Math Object 
console.log(Math.PI);
console.log(Math.E);

// abs funtaion return positive value
console.log(Math.abs(-13));
console.log(Math.pow(2,4));


// return nearest small intger value
console.log(Math.floor(5.999999));
console.log(Math.floor(-4.5)); 
console.log(Math.floor(-5.2));


// return larger value 
console.log(Math.ceil(5.00001));
console.log(Math.ceil(-5.9));
console.log(Math.ceil(4.1));

//
console.log(Math.random());
console.log(Math.random());

console.log(Math.floor(Math.random()*10)+1);
console.log(Math.floor(Math.random()*100)+1);
console.log(Math.floor(Math.random()*5)+1);

