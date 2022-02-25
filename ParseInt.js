/**
 * Function that demonstrate the Parse function
 */

/**
 * Function that recives an string an convert it to a number
 * @param {string} str it's a string to convert
 * @returns {number} Returns the converted string to a number
 */
function convertToInteger(str)
{

    return parseInt(str);

}

/**
 * Function that recives an string an convert it to a number in any base
 * @param {string} str it's a string to convert
 * @param {int} base it's an interger that will be the base for the convertion
 * @returns {number} Returns the converted string to a number
 */
function converToIntergerAnyBase(str, base)
{

    return parseInt(str, base);

}

console.log('Converting "52" into a string : ', convertToInteger("52"));
console.log('Converting "10011" that is a binary into his hexadecimal value : ', converToIntergerAnyBase("10011", 2));