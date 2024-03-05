// Write a program to give a random output between 1 to 10

// Logic 1

function generateRandom(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

let randomnumber1=generateRandom(1,10);
let randomnumber2;
do{
    randomnumber2=generateRandom(1,10);

}while(randomnumber1==randomnumber2);

console.log(randomnumber1+" and "+randomnumber2);

//Logic 2: This is the second approach of the problem :


// let prev=-1;
// let totalnumber=10;
// while(totalnumber)
// {
// let curr=Math.floor(Math.random()*10+1);
// if(prev==-1)
// {
//    console.log(curr);
//    prev=curr;
// }
// else if(curr!=prev)
// {
//    console.log(curr);
//    totalnumber--;
// }
// }

