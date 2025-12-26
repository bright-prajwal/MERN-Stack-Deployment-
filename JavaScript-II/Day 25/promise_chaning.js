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

savetoDb2("Hi")
    .then(() => {
        console.log("data 1 saved. promise was resovled.");

        savetoDb2("hello")
            .then(() => {
                console.log("data 2 saved");

                savetoDb2("iccs")
                    .then(() => {
                        console.log("data 3 saved");

                        savetoDb2("jghjkh")
                    });
            });
    })
    .catch(() => {
        console.log("Pormise was rejected");
    });



savetoDb2("HI....")
    .then(() => {
        console.log("data 1 saved");
        return savetoDb2("HI 2....");
    })
    .then(() => {
        console.log("data 2 saved");
        return savetoDb2("Hi 3 ...");
    })
    .catch(() => {
        console.log("Pormise was rejected")
    })