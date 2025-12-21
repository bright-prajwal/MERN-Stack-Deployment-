
// const axios = require('axios');
let url = "https://catfact.ninja/fact";
let url2 = "https://dog.ceo/api/breeds/image/random";


// Cat fact 
let button1 = document.querySelector('#button1')

button1.addEventListener('click', async () => {
    console.log("button was click")
    let fact = await getFacts2()
    console.log(fact)
    let p = document.querySelector('#result')
    p.innerText = fact;
})

async function getFacts2() {
    try {
        let res = await axios.get(url);
        return res.data.fact;
    } catch (err) {

        return "No fact found"
    }

}

getFacts2()


// dog image api
let button2 = document.querySelector('#button2')
button2.addEventListener('click', async () => {
    console.log("button was click")
    let link = await getImage();
    console.log(link)
    let img = document.querySelector('#img_result')
    img.setAttribute('src', link)


})



async function getImage() {
    try {
        let res = await axios.get(url2);
        return res.data.message;
    } catch (err) {
        console.log("error / ", err)
        return "Image not found";
    }

}





