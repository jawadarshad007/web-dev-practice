// Problem 01
// The Magical Sorting Hat: Imagine you are creating a magical sorting hat for a wizard school. Implement a JavaScript function that takes an array of student names and assigns them to one of the four houses (Gryffindor (length less than 6), Hufflepuff(length less than 8), Ravenclaw(length less than 12), or Slytherin(length greater than or equal to 12)) based on the length of their names.

const students = [
    "Ali",
    "Omar",
    "Sana",
    "Iqra",
    "Hamza",
    "Hina",
    "Bilal",
    "Nimra",
    "Zeeshan",
    "Mehwish",
    "Shahbaz",
    "Kashif",
    "MuhammadAslam",
    "AbdulRehman",
    "MuhammadZubair",
    "SyedShahrozAli"
];

let houses = []

for (const stu of students){
    if (stu.length < 6){
        houses.push({ name: stu, house: "Gryffindor" });
    }
    else if (stu.length < 8){
        houses.push({ name: stu, house: "Hufflepuff" });
    }
    else if (stu.length < 12){
        houses.push({ name: stu, house: "Ravenclaw" });
    }
    else {
        houses.push({ name: stu, house: "Slytherin" });
    }
}
console.log(houses)