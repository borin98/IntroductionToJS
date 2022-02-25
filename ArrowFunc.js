/**
 * This script demonstrate the use of Arrow functions
 * This Arrow function is used to write short functions
 */

var magic = () =>
{

    return new Date()

}; 

// More short
const moreMagic = () => new Date();

/**
 * Function that concat 2 vecs
 * @param {Vector <any>} vec1 the first vector
 * @param {Vector <any>} vec2 the second vector
 * @returns {Vector <any>} the concatenated vector
 */
const contVec = (vec1, vec2) => vec1.concat(vec2);

/**
 * Function that calculates the square value of each element in a vecotr
 * @param {Vector <Number>} arr it's a vector with numbers
 * @return {Vector <Float>} the square value of each value if exist
 */
const squareValue = (arr) =>
{

    // This's equivalent as doing lambda function in python
    const squareIntegers = arr.filter(square => Number.isInteger(square) && square > 0).map(x => x * x);
    return squareIntegers;

}

// This example demonstre how you can use another function inside another function
const incrementNumber = (function () 
{
    
    return function increment(number, value = 1)
    {

        return number + value;

    };

})();

// this example demonstre how you can use another function to return just a value
const sumNumbers = (function ()
{

    return function sum(...args)
    {

        return args.reduce((a, b) => a + b, 0);

    };

})();

var vec1 = [1, 2, 3];
var vec2 = [4, 5, 6];
let mouthVec2;
console.log("Concat vec : ", contVec(vec1, vec2));

const REAL_NUMBERS_ARR = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const MOUTH_VEC = ["Jan", "Fev", "Mar", "April", "may"];
console.log("Square values of each element in the vector : ", squareValue(REAL_NUMBERS_ARR));
console.log(incrementNumber(5, 2));
console.log(incrementNumber(5));
console.log(sumNumbers(1, 2, 3, 4));

// This example demonstrate the spread operator and how you can change a constant value.
(function()
{

    mouthVec2 = [...MOUTH_VEC];
    MOUTH_VEC[0] = "Potato";

})();

console.log(mouthVec2);
console.log(MOUTH_VEC);