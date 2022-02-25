/**
 * This script demonstrate how you can use Destructuring Assigment
 */

var voxel =
{

    x: 3.6,
    y: 7.4,
    z: 6.54

};

const {x: a, y: b, z: c} = voxel;
console.log(a, b, c);

const AVG_TEMP =
{

    "today": 77.5,
    "tomorrow": 79

};

const LOCAL_FORECAST =
{

    "today": {"min": 72, "max": 83},
    "tomorrow": {"min": 73.3, "max": 84.6}

};

/**
 * Function that demonstrate an use of destructuring operators 
 * @param {Object} avgTemp an object that contains the temp of today and tomorrow
 * @returns {float} returns the parameter "tomorrow" from the object
 */
function getTemp(avgTemp)
{ "use strict";

    const {tomorrow: tempAvg } = avgTemp;
    return tempAvg;

}
/**
 * This function is an example on how to use multiple destructuring functions
 * @param {Object} forecast an object that contains the temp of today and tomorrow
 * @returns {float} returns a float number that represents the max value of tomorrow
 */
function getMaxTemp(forecast)
{"use strict";

    const {tomorrow: {max: maxTom}} = forecast;
    return maxTom;

}

const SOURCE = [1, 2, 3, 4, 5, 6];

/**
 * Function that remove the first elements of a vector
 * @param {Vector<Numbers>} args it's a vector with Numbers
 * @returns {Vector<Numbers>} it's the vector without the first two elements.
 */
function removeFirstTwo(args)
{

    const [, , ...vec] = args;
    return vec;

}

//Function just to demonstrate how to pass information using this kind of information
const halfTemp = (function()
{

    return function halfTemp({today: {max, min}})
    {

        return (max + min)/2.0;

    }

})();

console.log(getTemp(AVG_TEMP));
console.log(getMaxTemp(LOCAL_FORECAST));

const [Z, X, , Y] = [1, 2, 3, 4, 5, 6];
console.log(Z, X, Y);

let d = 8;
let e = 6;
(() => 
{"use strict";

    [d, e] = [e, d];

})();
console.log("\n");
console.log(d);
console.log(e);
console.log("Returning the vector with the first two elements removed : ", removeFirstTwo(SOURCE));
console.log(halfTemp(LOCAL_FORECAST));