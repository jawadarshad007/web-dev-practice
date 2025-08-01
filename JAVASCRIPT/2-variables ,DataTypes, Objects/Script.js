console.log("Hello World 2");
let a = 5;
let b = 5;
let c = "Jawad";
console.log(a + b);
{
  let a = 66;
  console.log(a);
}
console.log(a);
// to know what type of datatype of variable we use typeof
console.log(typeof a, typeof b, typeof c);

    let x = "Jawad Bhai";
    let y = 22;
    let z = 3.6;
    const p = true;
    let q = undefined;  // undefined=jab koi variable bn jahe or is ma koi value store na ho
    let r = null;
    console.log(x, y, z, p, q, r);
    console.log(typeof x, typeof y, typeof z, typeof p, typeof q, typeof r);

    // Objects
    let obj ={
        name:"Jawad in obj" , 
        "job code":5600, 
        "is_handsome":true
    };
  
    console.log(obj);
    obj.salary = "1 Crore"
    console.log(obj);
    obj.salary = "5 Crore"
    console.log(obj);


    //practice qs
    const profile = {
        username: "Shradha" ,
        posts: 156, 
        isfollow: true,
        bio: "kuch bhi"
    };
    console.log(Object.keys(profile)) //just keys
    console.log(Object.values(profile)) // just values
    console.log(Object.entries(profile)) //print both
    console.log(profile);
    console.log(typeof profile["username"]);
    profile.posts = 160;
    console.log(profile);
    profile.dp= true;
    console.log(profile);
    console.log(typeof profile["dp"]);


let jump = "kudna";
let eating = "kana";
let sleep = "Sona";
console.log("Jump meaning is:",jump)
console.log("Eating meaning is:",eating)
console.log("waaaa")
console.log("geo")
