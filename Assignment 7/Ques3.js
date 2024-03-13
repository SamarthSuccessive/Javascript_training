// 3. Convert a callback-based API to a Promise-based API (function fetchData(callback) { setTimeout(() => { callback(null, "Data fetched successfully"); }, 1000); })

// function fetchData(callback) 
// { 
//        setTimeout(() => { callback(null, "Data fetched successfully"); 
// }, 1000); 
// }


const fetchData=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Data fetched Successfully");
        },1000)
    })
}

fetchData().then((result)=>{
    console.log(result);

}).catch((err)=>{
    console.log(err);
})