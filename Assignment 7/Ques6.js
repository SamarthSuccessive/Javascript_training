// 6. Implement a function that returns a resolved Promise after a specified delay using async/await.


const resolved=async()=>{
    await new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Hello there !!!");
        },2000);
    });
}

resolved();