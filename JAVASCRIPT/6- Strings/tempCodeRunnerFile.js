let unique = [];
function printUiquee(str){
   
    for (let i=0; i<str.length; i++){
         let count = 0;
        for (let j=0; j<str.length; j++){
            if (str[i] == str[j]){
                count++;
            }
           
        }
         if (count == 1){
                unique.push(str[i])
            }
    }

    for (let i=0; i<unique.length; i++){
        console.log(unique[i])
    }
}

let str = "Hello"
printUiquee(str)