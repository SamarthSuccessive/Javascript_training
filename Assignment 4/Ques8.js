// 8. Write a program to remove dupliacte elements from an array

let inputArray=[1,2,3,4,5,1,3,5];
function removeDuplicate(arr)
{
  let set=[...new Set(arr)];
  console.log(set);
  
}

removeDuplicate(inputArray);


//Logic 2

// let inputArray=[1,2,3,4,5,1,3,5];
// function removeDuplicate(arr)
// {
//     console.log(arr.filter(function(val,index){
//         return arr.indexOf(val)===index;
//     }))
  
  
// }

// removeDuplicate(inputArray);
