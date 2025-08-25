// Problem 04
// The Password Validator: You are building a password validation feature. Create a function that checks if a given password meets the following criteria: at least 8 characters long, contains both uppercase and lowercase letters, and includes at least one digit


function validatePassword(password) {
    const minLength = 8;
    // Using Regular Expressions for validation 
    // redux of code
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasDigit = /\d/.test(password);

    if (password.length >= minLength && hasUpperCase && hasLowerCase && hasDigit) {
        console.log( "Password is valid.");
    } else {
        console.log( "Password is invalid❌. It must be at least 8 characters long, contain both uppercase and lowercase letters, and include at least one digit.");
    }
}

validatePassword("mypasssswqeA2");





// Without using Regular Expressions for validation

function validatePassword(password) {
    const minLength = 8;
    let  hasUpperCase = false;
    let  hasLowerCase = false;
    let  hasDigit = false;

    for (let i=0; i < password.length; i++){
        let char  = password[i]

        if (char>= "A" && char <= "Z"){
            hasUpperCase = true;
        }
        else if (char >= "a" && char <= "z"){
            hasLowerCase = true;
        }
        else if (char >= "0" && char <= "9"){
            hasDigit = true;
        }       

    }

    if (password.length >= minLength && hasUpperCase && hasLowerCase && hasDigit) {
        console.log( "Password is valid.");
    } else {
        console.log( "Password is invalid❌. It must be at least 8 characters long, contain both uppercase and lowercase letters, and include at least one digit.");
    }
}

validatePassword("mypasssswqeA1");