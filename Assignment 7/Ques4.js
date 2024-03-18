const limit=4;

const callAPI = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    return data;
}

const rateLimiter=async()=>{
    let current=[];
    const totalpromise=[];
    for(i=0;i<=10;i++)
    {
        const req = callAPI(`https://jsonplaceholder.typicode.com/posts/${i}`);
    totalpromise.push(req);
    }

    while(totalpromise.length>0)
    {
    if(current.length<limit)
    {
        current.push(totalpromise.shift());
    }
    else{
        const response=await Promise.all(current);
        console.log(response);

        current=[];
        current.push(totalpromise.shift());
    }
    }
    if(current.length>0){
        const response=await Promise.all(current);
        console.log(response);
    }
}

rateLimiter();
