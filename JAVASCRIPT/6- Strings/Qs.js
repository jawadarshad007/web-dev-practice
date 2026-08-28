// check palindrome or not
function isPalindrome(str) {
    let start = 0 , end= str.length-1;
    let ispalindrome = true;
    while(start < end){
        if (str[start] != str[end]){
            ispalindrome = false;
            break;

        }
        start++;
        end--;
    }

    if (ispalindrome){
        console.log("Yes it is palindrome")
    }
    else{
        console.log("Its not")
    }
  }
  let str = "Ahmad"
  isPalindrome(str);




// Print unique elements 
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