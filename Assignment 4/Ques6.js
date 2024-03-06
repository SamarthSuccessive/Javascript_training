// 6. Write a program to find sum of an array

let inputArray=[1,2,3,4,5];
function sumArray(arr)
{
    let sum=0;
    for(let i of arr)
    {
        sum+=i;
    }
    return sum;

}

console.log("Sum is:",sumArray(inputArray));

