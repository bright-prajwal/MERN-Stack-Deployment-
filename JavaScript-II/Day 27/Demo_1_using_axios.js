let url = "https://catfact.ninja/fact";
let button=document.querySelector("button");

button.addEventListener('click',async()=>{
   let fact=await getFacts1();
   let p=document.querySelector("#result");
   p.innerText=fact
   console.log(fact)
})

async function getFacts1(){
    try{
        let res=await axios.get(url);
        return res.data.fact;
        
    }catch(err){
        console.log(err);
        return "No fact found";
    }
}


// async function getFacts(){
//     try{
//         let res=await axios.get(url);
//         let data=await res.data;
//         console.log(res);
//     }catch(err){
//         console.log()
//     }
// }


// dog fact

let url2 = "https://dog.ceo/api/breeds/image/random";
let btn2=document.querySelector("#dog_fact");

btn2.addEventListener('click',async()=>{
    let link=await getFactsdog();
    let img=document.querySelector("#dog_img");
    img.setAttribute('src' ,link)

})

async function getFactsdog() {
    try{
    let data= await axios.get(url2);
    return data.data.message;
    }catch(err){
        console.log(err)
        return"Dog fact not found";
    }

    
}