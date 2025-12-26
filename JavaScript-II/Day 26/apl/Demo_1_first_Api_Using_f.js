let url = "https://catfact.ninja/fact";

fetch(url)
    .then((res) => {
        console.log(res)
        return res.json()
    })
    .then((data) => {
        // console.log(data)
        console.log("data 1 = ",data.fact)
        return fetch(url);

    })
    .then((res) => {
        return res.json()

    })
    .then((data) => {
        console.log("data 2 = ",data.fact)
    })
    .catch((err) => {
        console.log("ERROR : ", err)
    })  



async function getFacts() {
    try {
        let res = await fetch(url);
        let data = await res.json();
        console.log(data)

        res = await fetch(url);
        data = await res.json();

        console.log(data)
    } catch (err) {

        console.log(err)
    }

}

getFacts()


