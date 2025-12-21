let arr=[1,2,3,4,5,6,2,3];
let num=2;

for(let i=0;i<arr.length;i++){
    if(arr[i]==num){
        arr.splice(i,1);
    }
}
console.log(arr);

console.log();
let n=5;
let fac=1;
for(let i=1;i<=n;i++){
    fac=fac*i;

}
console.log(`Factorial of ${n} is ${fac}`);
console.log();

// Qs5.Find the largest number in an array with only positive numbers


let arr1=[2,5,10,4,7,99,47,101,4540.5];
let largest=0;
for(let i=0;i<arr1.length;i++){
    if(largest<arr1[i]){
        largest=arr1[i];

    }
}
console.log(arr1,largest);


