// 2. Write a program to sort an array of object on the basis of age ({name:"John", age:26})


let array=[
    {"name":"Samarth","age":27},
    {"name":"Harry","age":22},
    {"name":"John","age":30}
]


array.sort(function(a,b){
    return a.age-b.age;
})


console.log(array);
