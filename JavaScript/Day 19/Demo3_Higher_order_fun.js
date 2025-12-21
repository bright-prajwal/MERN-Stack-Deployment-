function multipleGreet1(func,n){
    for(let i=0;i<n;i++){
        func();
    }


}

let gerrt=function(){
    console.log("Hello");
}

multipleGreet1(gerrt,5)
