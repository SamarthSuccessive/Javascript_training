// 9. Write a program to print fibonaaci series

function printFibonaaci(n)
{
   if(n==0 || n==1)
   {
       return 1;
   }
  
   return printFibonaaci(n-1)+printFibonaaci(n-2);
}


let n=10;
for (let i = 0; i < n; i++) {
   console.log(printFibonaaci(i));
};


