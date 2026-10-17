class Person{
    constructor(name , age){
        this.name = name;
        this.age = age;
    }
    sayhello(){
        console.log(`Hello ${this.name}`)
    }
}
const p1 = new Person("Jawad" , 20)
console.log(p1.name)
console.log(p1.age)
p1.sayhello()