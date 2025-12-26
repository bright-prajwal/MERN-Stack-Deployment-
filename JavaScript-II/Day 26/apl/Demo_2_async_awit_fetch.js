let url = "https://catfact.ninja/fact";


//  const axios = require('axios');


async function getFacts() {
    try {
        let res = await fetch(url);
        let data = await res.json();
        console.log(data);

        res = await fetch(url);
        data = await res.json();
        console.log(data);
    } catch (err) {
        console.log("Error",err)
    }
} 