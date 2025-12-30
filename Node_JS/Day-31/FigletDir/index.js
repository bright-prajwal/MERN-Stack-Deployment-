const figlet = require('figlet');

figlet("Hello World!!", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
}); 

figlet("HI PRAJWAL",(err,data)=>{
    try{
        console.log(data)

    }catch(err){
        console.log("Something went wrong...");
    console.dir(err);
    return;

    }

})
