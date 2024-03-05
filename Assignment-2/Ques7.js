// ARROW FUNCTIONS:

//  Write a function expression that takes in another function as an argument

const getName=(name)=>"my name is "+name;

const userDetails=(name,lastname)=>{
    return "Hello "+ getName(name) +" "+lastname;
}

console.log(userDetails("Samarth","Srivastava"));

// Write a function expression that takes in a number and returns its square.

const square=(number)=>number*number;
let number=prompt("Enter the number:");
console.log(square(number));

// Write a function expression that takes in two numbers and returns their sum.

const sum=(a,b)=>a+b;
let num1=parseInt(prompt("Enter the first number"),10);
let num2=parseInt(prompt("Enter the second number"),10);
console.log(sum(num1,num2));

// Write a function expression that takes in a number and returns true if it's even and false if it's odd.

const checkEvenodd=(num)=>{
    if (num%2==0)
    {
        return "Number is even"
    }
    else{
        return "Number is odd";
    }
    }
    let number=parseInt(prompt("Enter the number:"),10);
    const result=checkEvenodd(number);
    console.log(result);