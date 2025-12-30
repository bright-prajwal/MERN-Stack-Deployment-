const apple=require("./apple");
const banana=require("./banana");
const orange=require("./orange");

let furits=[apple,banana,orange];

// module.exports =furits;

module.exports.furits={
    apple:apple,
    banana:banana,
    orange:orange
}

