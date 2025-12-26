h2 = document.querySelector("h2");

function changeColor1(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            h2.style.color = color;
            resolve("color changed!");

        }, delay);


    })

}


changeColor1("red", 1000)
    .then((reslut) => {
        console.log("red color was completed");
        return changeColor1("blue", 1000);
    }).then((reslut) => {
        console.log("blue color was completed")
    }).catch((error) => {
        console.log(`${error}`)
    })

