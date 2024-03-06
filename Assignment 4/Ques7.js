// 7. Write a program to find index of duplicate elements in an array

let inputArray=[1,2,3,4,5,1,3,5];
function duplicateIndex(arr)
{
  let set=new Set();
  for(let i of arr)
  {
    if(set.has(i)==false)
    {
        set.add(i);
    }
    else{
        console.log(arr.indexOf(i));
    }
  }
}

duplicateIndex(inputArray);
