function savetoDb(data) {
  let internetSpeed = Math.floor(Math.random() * 10);

  return new Promise((resolve, reject) => {
    if (internetSpeed > 4) {
      resolve("success : data was saveed");
    } else {
      reject("failure : week data connection");
    }
  });
}

savetoDb("Hello Prajwal")
   
let request = savetoDb("ICCS PUNE");
request
  .then(() => {
    console.log("promice was resolved"  );
    console.log(request);    
  })
  .catch(() => {
    console.log("Promise was rejected");
    console.log(request);
  });

  console.log('\n\n ');

// more compacat

console.log("Promise chaning\n")
savetoDb("ICCS PUNE")
  .then((result) => {
    console.log("\ndata1 saved : promice was resolved");
    console.log("result of promise :",result);
    return savetoDb("hello world");
  })
  .then((result) => {
    console.log("data2 saved : promice was resolved");
    console.log("result of promise :",result);
    return savetoDb("Hi Prajwal");
  })
  .then((result) => {
    console.log("data 3 saved");
    console.log("result of promise :",result);
  })
  .catch((error) => {
    console.log("\nPromise was rejected");
    console.log("error of promise :",error);
  });
