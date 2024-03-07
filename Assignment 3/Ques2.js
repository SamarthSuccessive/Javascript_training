let pattern="";
let n=4;
let num=1;
for(let i=0;i<n;i++)
{
   for(let j=0;j<=i;j++)
   {
       pattern+=num;
       pattern+=" ";
       num++;
   }
   pattern+="\n";
}
console.log(pattern);


// b)

pattern="";
let n=4;
let num=1;
for(let i=0;i<n;i++)
{
   for(let j=0;j<=i;j++)
   {
       pattern+=num;
       pattern+=" ";
      
   }
   num++;
   pattern+="\n";
}
console.log(pattern);


// c)
pattern="";
let n=4;


for(let i=0;i<n;i++)
{
   let num=1;
   for(let j=0;j<=n-i;j++)
   {
       pattern+=num;
       pattern+=" ";
       num++;
      
   }
   pattern+="\n";
}
for(let i=0;i<5;i++)
{
   let num=1;
  for(let j=0;j<=i;j++)
  {
      pattern+=num;
      pattern+=" ";
      num++;
    
  }
   pattern+="\n";
}


console.log(pattern);


