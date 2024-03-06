//Write a function to take input(age, name, phone no.) from user and display it

let user_name=prompt("enter the name");
let age=prompt("Enter the age");
let phone_no=prompt("Enter the phone no");

function displayInformation(name,age,phone_no)
{
    return "Name:"+name+" Age:"+age+" Phone Number:"+phone_no;
}

console.log(displayInformation(user_name,age,phone_no));


