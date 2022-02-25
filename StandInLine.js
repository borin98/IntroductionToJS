/**
 * This program simulates a queue insert and remove
 * Array in js works like queues
 */

/**
 * Function that does a queue insert and remove the first elemement of the vector
 * @param {Array<int>} arr it's an int array
 * @param {int} item it's an int number
 * @returns {Array<int>} returns an array with the new item insert in the end of the 
 * queue and the first element removed from the array
 */
function nextInLine(arr, item)
{

    arr.push(item);
    return arr.shift();

}

var arr = [1, 2, 3, 4, 5];

console.log("Before : ", JSON.stringify(arr));
console.log(nextInLine(arr, 6));
console.log("After : ", JSON.stringify(arr));