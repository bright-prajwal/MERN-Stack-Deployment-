let button=document.createElement('button');
let input=document.createElement("input");
button.innerText="Click Me !";

let h1=document.querySelector('h1');
console.dir(h1.previousElementSibling);

h1.previousElementSibling.append(input)
h1.previousElementSibling.append(button);


input.setAttribute("placeholder", "enter username");
button.setAttribute("id","btn")



let btn =document.querySelector("#btn")
btn.classList.add("buttonStyle")


let h2 =document.createElement("h2");
h2.innerHTML="<u>DOM Practice</u>";

h1.previousElementSibling.append(h2);

let p=document.createElement('p');
p.innerHTML="Apna College <b>Delta</b> Practice"

let body=document.querySelector("body");
body.prepend(p);
