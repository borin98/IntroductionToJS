/**
 * This crpit demostrate the use of some Ternary Operators
 */

/**
 * Function to verify if two number are equals
 * @param {number} val1 it's a number
 * @param {number} val2 it's a number
 * @returns {boolean} return True if both number are equal and False otherwise
 */
function checkEqual(val1, val2)
{ 
    
    return val1 === val2 ? true: false;

}

/**
 * Function that see if a number is positive, negative or zero
 * @param {number} num it's a number
 * @returns {string} return a string "positive", "negative" or "zero" depending on the value of num
 */
function checkSign(num)
{

    return num > 0 ? "positive": num < 0 ? "negative" : "zero";

}

console.log("a = " + "10" + " is equal to b = " + "11 ? : ", checkEqual(10, 11));
console.log(checkSign(10));