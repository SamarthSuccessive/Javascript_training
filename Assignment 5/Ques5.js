// 5. Write a program flattenObject that takes an object with nested properties and returns a flat object with the nested properties transformed into dot-separated properties. The function should handle nested objects and arrays.
// const obj = {
//    a: 1,
//    b: { c: 2, d: [3, 4] }
// };
// Output: { 'a': 1, 'b.c': 2, 'b.d.0': 3, 'b.d.1': 4 }


const obj={
    a:1,
    b:{c:2,d:[3,4]}
};

function flattenObject(obj)
{
    let result={};
    for(let i in obj)
    {
        if(typeof obj[i]==='object')
        {
            //i -->b
            let temp=flattenObject(obj[i]);  //{c:2,d:2};
            for(let j in temp)
            {
                result[i+'.'+j]=temp[j]; // b.c=2
            }

        }
        else{
            result[i]=obj[i];
        }
    }
    return result;  //returning the obj

}
console.log(flattenObject(obj));


  