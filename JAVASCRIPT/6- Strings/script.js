//(Imp qs) Strings are immutable(the thing that never change) in JavaScript
console.log("This is String tutorials")
let a = "Jawad"
console.log(a[0])
console.log(a[1])
console.log(a[2])
console.log(a[3])
console.log(a[4])
console.log(a.length)
let real_name = "Jawad"
let city = "Lahore"
console.log(`My name is ${real_name} and city is ${city}`) //Templeta literals
console.log(`this is also template literals  ${1 + 2 + 3}`)
//  agr templete literals ma placeHolders(${..}) ka use krn to ise hm kehte hn String interpolation
let obj = {
    fruit : "Apple",
    Drink : "Shake"
};
console.log("I eat",obj.fruit, "But i like",obj.Drink)
console.log(`I eat ${obj.fruit} But i like ${obj.Drink}`)  //Templete literals

//  string can also be created in single quote
let str = 'letsCHk'
console.log(str)
//Escape characters
console.log( 'Apna\nCollage') //next line
console.log( 'Apna\tCollage') //tab space
let chk = "Jawad\tArshad"     //\t is count as single character
console.log(chk.length)

let q = "biGletters"
console.log(q.toUpperCase())
console.log(q.toLowerCase())
//str.slice(start, end?)  returns part of string
console.log(q.slice(1 , 4 )) //thats mean 1 sa la kar 4 include nai ho ga
console.log(q.slice(1)) // thats mean 1 sa la kr end tq print kre ga
//str.replace( searchVal, newVal )
console.log(q.replace("biG" , "upper")) //replace words
let m= "helololo";
console.log(m.replace("lo","she")) // replace only one time
console.log(m.replaceAll("lo","she")) // replace multiple times
console.log(q.concat(str , "moreData")) // it combine multiple strings    


// removes white spaces just in ending and start
let w= "    removes empty   spaces "
console.log(w.trim());
let  newvar=w.trim() ;
console.log(newvar)