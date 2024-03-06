// Write a function expression that takes in a number and returns true if it's even and false if it's odd.

function checkEvenodd(num)
{
   if (num%2==0)
   {
       console.log("Number is Even");
   }
   else{
       console.log("Number is Odd");
   }
}
let number=parseInt(prompt("Enter the number:"),10);
console.log(checkEvenodd(number))