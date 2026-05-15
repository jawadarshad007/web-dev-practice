class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    sayhello(){
        console.log("Hello, my name is " + this.name + " and I am " + this.age + " years old.");
    }
}

// to create an object of the class
const person1 = new Person("Jawad", 22)
console.log(person1)