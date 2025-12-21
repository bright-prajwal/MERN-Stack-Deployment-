function savetoDb(data, success, failure) {
  let internetSpeed = Math.floor(Math.random() * 10);

  if (internetSpeed > 4) {
    success();
    // console.log("Your data was saved", data);
  } else {
    failure();
    // console.log("weak connection. data not seved");
  }
}
// savetoDb("Prajwal");
// savetoDb("hello...........");
// savetoDb(3);

savetoDb(
  "Indira college", // data
  () => {
    console.log("Success : Your data was saved");
    savetoDb(
      "Hello......",  // data
      () => {
        console.log("Success2: data2 saved");
        savetoDb(
          "Hi Prajwal are you fine!", // data 
          () => {
            console.log("Success3  : data3 seved");
            savetoDb("Pune",
              () => {
                console.log("Success : data 4 saved")
              },
              () => {
                console.log("failuer 4 : week data connection")
              })
          },
          () => {
            console.log("failuer 3 : week connection");
          }
        );
      },
      () => {
        console.log("failuer2 : week connection");
      }
    );
  },
  () => {
    console.log("weak connection. data not seved");
  }
);
