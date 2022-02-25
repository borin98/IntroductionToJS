/**
 * This script is an example of how array can mutate in js
 * Basically, const is like a let variable, but you can only read them
 * Except for array, for any reason
 */

const vec = [5, 7, 2];

/**
 * Function that demonstrate an array mutation in js
 */
function editInPlace()
{"use strict";

    vec[0] = 2;
    vec[1] = 5;
    vec[2] = 7;

}

/**
 * Function that prevents objects to mutate
 * @returns {float} returns a float number
 */
function freezeObj()
{"use strict";

    const MATH_CONST = 
    {

        PI:3.14

    };

    Object.freeze(MATH_CONST);

    try
    {

        MATH_CONST.PI = 99;

    }

    catch (e)
    {

        console.log(e);

    }

    return MATH_CONST.PI;

}

editInPlace();
console.log(vec);
const PI = freezeObj();