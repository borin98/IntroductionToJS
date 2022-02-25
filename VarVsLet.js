/**
 * This script will demonstrate diferences between let and var
 * In summary, if we use let, the program will not permit to create other variables with the same name
 * in the same scope or in the same block
 * Ex: If you create a variable let into a looping, this variable will be visible just there
 */

let catName = "Quincy";

/**
 * Function that demostrate that using the word "use strict" will force the user to declarete var or 
 * let in function scope. Otherwise will pop a eeror like
 * "ReferenceError: quote is not defined"
 */
function catTalk()
{"use strict";
    
    catName = "Oliver";
    quote = catName + "says Meow !";

}

/**
 * Function that demonstrate the use of let and var
 * @returns {string} returns the value of i
 */
function checkScope() 
{"use strict";

    let i = "function scope";

    if (true)
    {

        let i = "block scope";
        console.log("Block scope i is : ", i);

    }

    console.log("Function scope is : ", i);
    return i;

}

console.log("Outsite of function, the value of i is : ", checkScope());