//  Write a program to remove duplicate charecters from a string ("Hello Yellow" => "Helo Yw")

let inputstring="Hello Yellow";
let set=new Set(inputstring);
console.log(set);
let uniqueInputString="";
set.forEach(function(val){
    uniqueInputString+=val;
});
console.log(uniqueInputString);
