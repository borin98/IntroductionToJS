/**
 * This function is an example on how you can export a file in js
 * @param {String} str a string to capitalize
 * @returns {string} returns a capitalized string
 */

export const capitalizeString = str => str.toUpperCase();

const capitalizeString2 = (string) =>
{

    return string.charAt(0).toUpperCase() + string.slice(1);

}

export { capitalizeString2 };
export const foo = "bar";
export const bar = "foo";