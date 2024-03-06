// 6. Write a program to display prime numbers from 1 to 50
for(let i=2;i<=50;i++)
{
   let count=0;
   for(let j=1;j<=i;j++)
   {
       if(i%j==0)
       {
           count++;
       }
   }
   if(count==2)
   {
       console.log(i);
   }
}
