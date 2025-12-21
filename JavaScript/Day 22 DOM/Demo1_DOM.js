let smallImages = document.getElementsByClassName("oldImg");
for (let i = 0; i < smallImages.length; i++) {
  smallImages[i].src = "assets/spiderman_img.png";
  console.dir(`value of image no. ${i} is changed`);
}

console.log(document.querySelector("h1"));
console.dir(document.querySelector("#description"));

console.dir(document.querySelectorAll(".oldImg"));

console.dir(document.querySelectorAll("div a"));

let para = document.querySelector("p");
console.dir(para);
console.log("Inner Text\n" + para.innerText);

console.log("TextContent" + para.textContent);

console.log("Inner Html" + para.innerHTML);

para.innerHTML = "Hi , I am <b>Peter Parker </b>!";

let headig = document.querySelector("h1");
// headig.innerHTML=`<u>${headig.innerText}</u>`
// headig.innerHTML="<u>Spider Man</u>";

// headig.style.backgroundColor="yellow";

let img = document.querySelector("img");
console.dir(img);
console.dir(img.style);

console.log(img.getAttribute("img"));

let links = document.querySelectorAll(".box a");

// for(let i=0;i<links.length;i++){
//     links[i].style.color="red";
// }

for (link of links) {
  link.style.color = "purple";
}

headig.classList.add("green");

console.dir(headig.classList.contains("green"));

console.dir(headig.classList.toggle("green"));
console.dir(headig.classList.toggle("green"));

let box = document.querySelector(".box");
box.classList.toggle("yellowBg");

// Navigation

let h4 = document.querySelector("h4");
console.log(h4.parentElement);
console.log(h4.children);

console.log(box.children);
console.log(box.childElementCount);

let ul = document.querySelector(".box ul");

console.log(ul.children);

console.log(ul.parentElement);

console.log(ul.children[1].nextElementSibling); // index second elements tags

console.log(ul.children[1].previousElementSibling); // print index zero elements tags

console.log(img.previousElementSibling);

img.previousElementSibling.style.color = "purple";

// Adding Elements


// 1 ) documents.createElements('p');

// 2 ) appendChild(); 
// 3) append();
// 4) prepend();
// 5) insertAdjancent(where, element);



let newPara = document.createElement("p");

newPara.innerText = "Hi, I am a new Para\n";
newPara.append("Hello  ");
console.dir(newPara);

let body = document.querySelector("body");
// body.appendChild(newPara)

box.appendChild(newPara);

let btn =document.createElement('button');

console.dir(btn);

btn.innerText="Click Me"
btn.style.backgroundColor="gery";

// box.appendChild(btn);
newPara.append(btn);
newPara.append("do not click this button");

box.prepend(newPara);


// Removing Elements

//  1 removeChlid(element) 

// box.removeChild(newPara);
newPara.remove();
