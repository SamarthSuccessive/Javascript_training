// 3. Write a program to remove all the id key from array of object ({name:"John", age:27, id:1})


let array=[
    {"name":"John","age":27,"id":1},
    {"name":"Samarth","age":22,"id":2},
    {"name":"Harry","age":30,"id":3}
]


array.forEach(function(value,key)
{
    delete value.id;
})
console.log(array);
