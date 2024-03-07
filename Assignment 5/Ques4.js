//4. Write a program deepClone that takes an object as input and returns a deep copy of that object. The function should handle nested objects and arrays.


const car={
    "name":"BMW",
    "price":1000000,
    "manufacture ":"India"
}

//by spread operator
const car2={... car};

car2.name="AUDI";
console.log(car2);
console.log(car);

//By object asign
const car3=Object.assign({},car);
car3.name="TATA";
console.log(car3);

console.log(typeof car3.name);
