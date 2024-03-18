// 7. Create a function that performs multiple asynchronous operations in parallel using async/await and waits for all of them to complete before returning the results.

const result=async(promise1,promise2,promise3,promise4)=>{
    const response=await Promise.all([promise1,promise2,promise3,promise4]);
    console.log(response);

}

const promise1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Hello i am promise 1");
    },1000)
})

const promise2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Hello i am promise 2");
    },2000)
})

const promise3=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Hello i am promise 3");
    },3000)
})

const promise4=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Hello i am promise 4");
    },4000)
})

result(promise1,promise2,promise3,promise4);


