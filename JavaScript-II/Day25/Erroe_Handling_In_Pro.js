function savetoDb2(data) {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;

    return new Promise((resolve, reject) => {
        if (internetSpeed > 4) {
            resolve("resovle : data was saved");
        } else {
            reject("reject :  week connction");
        }
    });
}

savetoDb2("HI....")
    .then((result) => {
        console.log("data 1 saved");
        console.log(`reslut of promise ${result}`) // error handling it return message of promisse object 
        return savetoDb2("HI 2....");
    })
    .then((result) => {
        console.log("data 2 saved");
        console.log(`reslut of promise ${result}`) // error handling it return message of promisse object 
        return savetoDb2("Hi 3 ...");
    })
    .catch((error) => {
        console.log("Pormise was rejected")
        console.log(`reslut of promise ${error}`) // error handling it return message of promisse object 
    })