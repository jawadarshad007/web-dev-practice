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
console.log(q) // it is not change the original string because string is immutable
console.log(q.toLowerCase())
//str.slice(start, end?)  returns part of string
console.log(q.slice(1 , 4 )) //thats mean 1 sa la kar 4 include nai ho ga
console.log(q.slice(1)) // thats mean 1 sa la kr end tq print kre ga
console.log(q.slice(-7))// thats mean 7 sa la kr end tq print kre ga
console.log(q.slice(-7,-1))//Ans:letter... thats mean 7 sa la kr 1 sa pehle tk print kre ga
console.log(q.substring(1,4)) // it is same as slice but it does not accept negative index


// let q = "biGletters"
//str.replace( searchVal, newVal )
console.log(q.replace("biG" , "upper")) //replace words
console.log(q)// it is not change the original string because string is immutable   
let m= "helololo";
console.log(m.replace("lo","she")) // replace only one time
console.log(m.replaceAll("lo","she")) // replace multiple times
console.log(q.concat(str , "moreData")) // it combine multiple strings    


// removes white spaces just in ending and start
let w= "    removes empty   spaces "
console.log(w)
console.log(w.trim());// it remove the empty spaces from start and end but not in between
console.log(w.trimStart())// it remove the empty spaces from start but not in end
console.log(w.trimEnd())// it remove the empty spaces from end but not in start
let  newvar=w.trim() ;
console.log(newvar)


let names = "Jawad, Arshad, Ali, Ahmed"
let arr = names.split(",") // it split the string into array by using separator
console.log(arr) // it split the string into array by using separator 
console.log(arr[1]) 




// Modern way to create string is using backticks(``) and it is called template literals
let newstr = `This is a         
                      string`
console.log(newstr)
console.log(newstr.length) // it count all the spaces and new lines as well 

// to find the word in string we have some methods.
const str2 = "Hello Coder Army Coder"
console.log(str2.indexOf("Cod")) // it return the index of first character of word
console.log(str2.lastIndexOf("Cod")) // it return the index of first character of last word 
console.log(str2.includes("Cod")) // it return true if word is present in string otherwise false