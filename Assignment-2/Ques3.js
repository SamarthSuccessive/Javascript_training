//  Write a function expression that takes in another function as an argument

function getName(name)
{
    return "my name is "+name;
}
function userDetails(name,lastname)
{
    return "Hello "+ getName(name) +" "+lastname;
}

console.log(userDetails("Samarth","Srivastava"));

