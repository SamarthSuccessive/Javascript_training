//  Create a class Teacher that inherits from the Person class and has a property subjectsTaught. Override the farewell() method to include information about what the teacher teaches.




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
      return `Hi my name is : ${this.name} \nAge is ${this.age} \nGender: ${this.gender}\nInterest: ${this.interest}`;
   } 
    farewell()
    {
      return `Goodby ${this.name}`;
   }
   }
   
 class Teacher extends Person{
    subjectsTaught;
    constructor(name,age,gender,interest,subjectsTaught)
    {
        super(name,age,gender,interest);
        this.subjectsTaught=subjectsTaught;
    }
    farewell()
    {
       let ans="";
       ans+=`${super.farewell()} \nSubject Taught :\n`;
      
       for(let i of this.subjectsTaught)
       {
         ans+=`${i}\n`;
       }
      return ans;
    }
 }
 
 const teacher1=new Teacher("samarth",22,"male","badminton",["programming","English"]);
 console.log(teacher1.farewell());