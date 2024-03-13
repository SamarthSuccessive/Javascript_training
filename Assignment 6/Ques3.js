// 3.1 Create a class Person with properties name, age, gender, and interests. Add a method greeting() that returns a string introducing the person. Also add a method farewell() that returns a string saying goodbye to the person.

class Person{
 name;
 age;
 gender;
 interest;
 constructor(name,age,gender,interest)
 {
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.interest=interest;
 }
 greeting()
 {
    return "Hi my name is : "+this.name+"\nAge is "+this.age+"\nGender: "+this.gender+"."+"\nInterest: "+this.gender;
 } 
 farewell()
 {
    return "Goodby "+ this.name;
 }
}

const person1=new Person("samarth","22","male","badminton");
console.log(person1.greeting());
console.log(person1.farewell());