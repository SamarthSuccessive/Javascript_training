
let pattern="";
for(let i=1;i<=5;i++)
{
let toggle=1;
for(let j=1;j<=9;j++)
{
if(j>=6-i && j<=4+i && toggle )
{
   pattern+="*";
   toggle=0;
}
else{
   pattern+=" ";
   toggle=1;
}
}
pattern+="\n";
}



for(let i=6;i<=9;i++)
{
   let toggle=1;
   for(let j=1;j<=9;j++)
   {


       if(j>=i-4 && j<=14-i && toggle)
       {
           pattern+="*";
           toggle=0;
       }
       else{
           pattern+=" ";
           toggle=1;
       }


   }
   pattern+="\n";
}
console.log(pattern);


