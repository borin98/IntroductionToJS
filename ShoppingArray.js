/**
 * This program will create a python dict to simulate a shopping list and remove a random element
 * in the dict
 */

/**
 * Function that remove a random element of a python dict and print the removed element and the actual
 * dict
 * @param {Array<String>} dict a 2-D dimensional vector ([[a, b], [c, d], [e, f], ...])
 * @return {undefined} Returns nothing
 */
function removeRandomElement(dict)
{

    const random = Math.floor(Math.random() * dict.length);
    console.log("random value index ", random);
    const el = dict.splice(random, 1);
    console.log("Removed element ", el);
    console.log("Actual dict ", dict);

}

var myList = [["cereal", 3], ["milk", 2], ["bananas", 3], ["juice", 2], ["eggs", 12]];
removeRandomElement(myList);

console.log(removeRandomElement(myList));