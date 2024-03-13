// 2. Give an example of using multiple callback functions in a single function in JavaScript

 const multipleCallback=(callback1)=>{
        setTimeout(()=>{
            console.log("Hello 1");
            callback1();
        },2000);


}
const callback2=()=>{
    console.log("hello 3");
}
const callback=()=>{
    console.log("Hello 2");
    callback2();
}

multipleCallback(callback);