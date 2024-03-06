// 9. Write a program to find the last duplicate index in an array

let inputArray=[1,2,3,4,1,3,5];
function lastDuplicate(arr)
{
  let result=arr.filter(function(val,index){
                return arr.indexOf(val)!==index;
            })
    console.log(result[result.length-1]);

}

lastDuplicate(inputArray);

