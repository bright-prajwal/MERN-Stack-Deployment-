async function greet() {
    throw "week connection"
    return "hello"
}
greet()
    .then((reslut) => {
        console.log("Promise was resolved")
        console.log("result was : ", reslut);
    }).catch((err) => {
        console.log("promise was rejected with err ", err)
    })

    
h1 = document.querySelector("H1")
async function changeColor(color, delay) {
    setTimeout(() => {
        h1.style.color = color
    }, delay);
}


changeColor("yellow", 1000)
    .then(() => {
        console.log("red color was completed")
        return changeColor("blue", 1000);
    })
    .then(() => {
        console.log("blue color was completed")
        return changeColor("pink", 1000)
    })
    .then(() => {
        console.log("pink color was completed")
    })