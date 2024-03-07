function add(num1,num2)
{
   return num1+num2;
}

function minus(num1,num2)
{
   return num1-num2;
}

function mul(num1,num2)
{
   return num1*num2;
}

function divide(num1,num2)
{
   return num1/num2;
}

let opt=parseInt(prompt("Enter the operation sum -0 ,mul-1,divide-2,minus-3:"),10);

let num1=parseInt(prompt("Enter the first number:"));
let num2=parseInt(prompt("Enter the second number:"));

switch(opt)
{
   case 0: console.log("output:" + add(num1,num2));
           break;
   case 1: console.log("output:"+ mul(num1,num2));
           break;
   case 2: console.log("output:"+ divide(num1,num2));
           break;
   case 3: console.log("output:"+ minus(num1,num2));
           break;
}
