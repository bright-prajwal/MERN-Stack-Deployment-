function savetodb(data) {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;

    if (internetSpeed > 4) {
        console.log("your data was saved");
    } else {
        console.log("week connection. data not saved");
    }
}
// savetodb("svhg")

function savetoDb1(data, success, failuer) {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;

    if (internetSpeed > 4) {
        success();
    } else {
        failuer();
    }
}

// fun call
// call back Hell
savetoDb1(
    "Hi",
    () => {
        console.log("Success: your Data was saved");
        savetoDb1(
            "Prajwal ",
            () => {
                console.log("Success 1: your Data was saved");
                savetoDb1(
                    "Hon",
                    () => {
                        console.log("Success 2: your Data was saved");
                    },
                    () => {
                        console.log("failuer 2 :week connection. data not saved");
                    }
                );
            },
            () => {
                console.log("failuer 2 : week connection. data not saved");
            }
        );
    },
    () => {
        console.log("failuer 0:  week connection. data not saved");
    }
);

// savetoDb1("")

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


// call
savetoDb2("Hi")
    .then(() => {
        console.log("data 1 saved. promise was resovled.");
        savetoDb2("hello")
            .then(() => {
                console.log("data 2 saved");
            });
    }).catch(() => {
        console.log("Pormise was rejected");
    });
 