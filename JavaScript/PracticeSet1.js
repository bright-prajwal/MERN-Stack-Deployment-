let string1="apple";
if((string1[0]==='a') && string1.length>3){
    console.log("Good String");

}else{
    console.log("NOT a good string");
}


let num=12;
if(num%3===0 &&(num+1==15)||(num-1==11)){
    console.log("Safe");

}else{
    console.log("UnSafe");
}


let color="yellow";

switch(color){
    case "red":
        console.log("Stop");
        break;
    case "green":
        console.log("Go");
        break;
    case "yellow":
        console.log("slow down");
        break;
    default :
        console.log("Invalide opertion");
}


let day=4;

switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday Fun day");
        break;
    default:
        console.log("Wrong day");
}


let name=prompt("Enter yor name ");
console.log(name);