/**
 * This scripts demonstrate two examples on how to create random fractional or Whole number in js
 */

/**
 * Function that recives an integer value and returns a random fraction number
 * @param {int} val int value that represent the limit value to generate
 * @returns {float} returns a float random number between 0 and val but not including val as integer
 */
function randomFraction(val)
{

    return (Math.random() * val);

}

/**
 * Function that recives an integer value and returns a random integer number
 * @param {int} val int value that represent the limit value to generate 
 * @returns {int} returns a int random number between 0 and val
 */
function randomWhole(val)
{

    return Math.floor(Math.random() * val);

}
/**
 * Function that recives two integers values and return a float number between them
 * @param {int} minVal an interger that represent the minimum value of the interval to generate
 * @param {int} maxVal an interger that represent the maximum value of the interval to generate
 * @returns {float} returns a float random number between minVal and maxVal
 */
function randomFractionRange(minVal, maxVal)
{ 

    return Math.random() * (maxVal - minVal + 1) + minVal;

}

/**
 *  Function that recives two integers values and return an integer number between them
 * @param {int} minVal an interger that represent the minimum value of the interval to generate 
 * @param {int} maxVal an interger that represent the maximum value of the interval to generate
 * @returns returns an integer random number between minVal and maxVal
 */
function randomWholeRange(minVal, maxVal)
{

    return Math.floor(Math.random() * (maxVal - minVal + 1)) + minVal;

}

console.log("Random float number between 0 and 10 : ", randomFraction(10));
console.log("Random whole number between 0 and 10 : ", randomWhole(10));
console.log("Random float number between 10 and 30 : ", randomFractionRange(10, 30));
console.log("Random whole number between 10 and 30 : ", randomWholeRange(10, 30));