// Create a class called `Person` that has properties for `firstName`, `lastName`, and `age`. The class should also have a method called `fullName` that returns the person's full name.
// Additionally, the class should have a method called `averageAge` that takes in an array of `Person` objects and returns the average age of all the people in the array.


class Person{
    firstName;
    lastName;
    age;
    constructor(firstname,lastname,age)
    {
        this.firstName=firstname;
        this.lastName=lastname;
        this.age=age;
    }
    fullName()
    {
        return this.firstName+" "+ this.lastName;
    }
    static averageAge(array)
    {
        let sum=0;
        let totalpeople=array.length-1;
        let result=array.reduce((accumulator,current)=>{
            
            return accumulator=accumulator+current;

        },0);

    }
}

const person1=new Person("Samarth","Srivastava",22);
const person2=new Person("Harry","Kumar",21);
const person3=new Person("OM","Pratap",30);

const array=[person1,person2,person3];
const avgAge=Person.averageAge(array); //making static so that it can be called by the Classname.