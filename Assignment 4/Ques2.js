//Write a program to reverse a string ("Hello John" => "olleH nhoJ")

//Logic 1
// let inputString="Hello is my John";
// let helpString="";
// let ans="";

// function reverseString(str)
// {
   
//     return str.split("").reverse().join("");
// }

// for(let i=0;i<inputString.length;i++)
// {
//     if(inputString[i]!=' '){
//         helpString+=inputString[i];

//     }
//     else if(inputString[i]=" ")
//     {
//         ans+=reverseString(helpString);
//         helpString="";
//         ans+=" ";
//     }
// }
// ans+=reverseString(helpString);


// console.log(ans);


//Logic 2
function reverseString(str)
{
   
    return str.split("").reverse().join("");
}


let str="Hello John";
let arr=str.split(" ");
let result="";
for(let i of arr)
{
    result+=reverseString(i);
    result+=" ";
}
console.log(result);

