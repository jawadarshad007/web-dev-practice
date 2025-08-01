// create objects 
const employee = {
    name: "Jawad",
    age: 21,
    designation: "Software Engineer",
    salary: 50000,
    printName : function() {
        console.log("Hello, my name is " + this.name);  //here 'this' refers to the student objectitself
    },
    // we define functions inside an object using the function keyword, or without it.
    // The function keyword is optional when defining methods in an object.     
    printAge(){
        console.log("Hello, my age is " + this.age);  //here 'this' refers to the student objectitself
    }
};
// JS objects have a special property called prototype. 
// The prototype is an object that is associated with every function and object by default. It allows you to add properties and methods to existing objects. 







// objects in javascript with funtions and this keyword
    //  this keyword is used to access the properties of the object
// const student = {
//     fullName : "Jawad Arshad",
//     age : 20,
//     city : "Karachi",
//     isStudent : true,
//     skills : ["HTML", "CSS", "JavaScript", "React", "Node.js"],
//     greet : function () {
//         console.log("Hello, I am " + this.fullName); 
//     },
//     // this method is most appropriate for the object to write the function in them
//     printskills () {
//         console.log("My skills are " + this.skills);
//     },
//     calcfees(){
//         console.log("The fees is 20000 per Year");
//     }
// }
// student.greet();
// student.printskills();
// student.calcfees();

// // prototype in javascript is used to inherit the properties of the object
// const newstudent = {
//     fullName : "Ali",
//     age : 22,

   
// }
// __proto__ is used to inherit the properties of the object
// newstudent. __proto__ = student;
// console.log(newstudent.calcfees());




// classes in javascript
// class ToyataCar {
//     constructor(brand ,  mileage){
//        this.brand = brand;
//        this.mileage = mileage;
//        console.log("The brand is " + this.brand);
//        console.log("The mileage is " + this.mileage);

//     }
//     start() {
//         console.log("The car is starting");
//     }
//     // setBrand(brand){
//     //     this.brand = brand;
//     // }
// }
// const fortuner = new ToyataCar("Toyota" , 10);
// fortuner.start();
// // fortuner.setBrand("Toyota");
// console.log(typeof(fortuner));

// const lexus = new ToyataCar("Lexus" , 15);
// lexus.start();
// // lexus.setBrand("Lexus");

// inheritance in javascript
// class Person {
//     constructor(name , age){
//         this.name = name;
//         this.age = age;
//     }
//     eat (){
//         console.log("The person is eating");
//     }
// }
// class Student extends Person {
//     printname(){
//         console.log("The name is " + this.name);
//     }
// }
// class Teacher extends Person {
//     constructor(subject , name , age){
//         super(name , age);
//         this.subject = subject;
//     }
//     printsubject(){
//         super.eat();

//         console.log("The subject is " + this.subject);
//     }
// }
// const student2 = new Student("Jawad" , 20);
// student2.printname();

// const teacher = new Teacher("Math" , "Jawad" , 20);
// teacher.printsubject();


// Practice Questions
let website_Data = {
    name : "Jawad.com",
    deployed_on : "2025-07-29",
    version : "1.0.0",
    author : "Jawad",
    email : "jawad@gmail.com",
    phone : "03001234567",
    address : "Karachi",
    city : "Karachi",
}
class User {
    constructor(name ,  email){
        this.name = name;
        this.email = email;
    }
   viewData(){
    console.log("-------View Data---------");
    console.log(website_Data);
    // console.log("The email is " + this.email);
   }
}

class Admin extends User {
    constructor(name , email){
        super(name , email);
    }
    editData(){
        console.log("-------Edit Data-------");
        website_Data.name = "Updated_Jawad.com";
    }
}
const stu1 = new User("Jawad" , "jawad@gmail.com");
const stu2 = new User("Student_2" , "Student_2@gmail.com");
stu1.viewData();
const admin = new Admin("Admin" , "admin@gmail.com");
admin.editData();
admin.viewData();





// Error Handling in javascript
let a =5;
let b = 8;
console.log(`a+b = ${a+b}`);
console.log(`a-b = ${a-b}`);
try {
    console.log(`a*b = ${a*c}`); // intentional error to demonstrate error handling

} catch (err){
    console.log("An error occurred: ", err.message);
}
console.log(`a/b = ${a/b}`);
console.log(`a%b = ${a%b}`);    
console.log(`a**b = ${a**b}`); // exponentiation operator 
console.log(`a++ = ${a++}`);
console.log(`a-- = ${a--}`);
console.log(`++a = ${++a}`);
