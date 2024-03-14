// 6. Implement a function that returns a resolved Promise after a specified delay using async/await.


const resolved=async()=>{
    return await new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Hello there !!!");
        },2000);
    });
}

resolved().then((result)=>{
    console.log(result);
})



