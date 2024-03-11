// 3.2 Create a class Student that inherits from the Person class and has a property studies. Override the greeting() method to include information about what the student is studying.

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
   
 class Student extends Person{
    study;
    constructor(name,age,gender,interest,study)
    {
        super(name,age,gender,interest);
        this.study=study;
    }
    greeting()
    {
        return "Hi my name is : "+this.name+"\nAge is "+this.age+"\nGender: "+this.gender+"."+"\nInterest: "+this.interest+"\nStudy :"+this.study;

    }
 }
 
 const student1=new Student("samarth",22,"male","badminton","programming");
 console.log(student1.greeting());