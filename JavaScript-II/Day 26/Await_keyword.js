function getnum() {
    return new Promise((resolve, recject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 10) + 1;
            console.log(num)
            resolve();
        }, 1000)
    })
}

async function demo() {
    await getnum()
    await getnum()
    await getnum()


}
demo()


h1 = document.querySelector("h1");

function changeColor(color, delay) {
    return new Promise((resolve, recject) => {
        let num = Math.floor(Math.random() * 5) + 1
        if (num > 3) {
            recject("Promise recject ");
        }
        setTimeout(() => {
            h1.style.color = color;
            console.log(`color changed to ${color}`);
            resolve();
        }, delay)
    });
}

async function demo(params) {

    try {
        await changeColor("red", 1000);
        await changeColor("orange", 1000)
        await changeColor("green", 1000);
        await changeColor("blue", 1000)
    } catch (error) {
        console.log("error caught");
        console.log(error);

    }
    let a = 5;
    console.log(a);
    console.log("new numbwer =", a + 3);

}
demo