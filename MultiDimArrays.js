var myArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [[10, 11, 12], 13, 14]];

console.log(myArray[3]);
console.log(myArray[3][0]);
console.log(myArray[3][0][0]);

myArray.push([[15, 16], 17]);
console.log(myArray[4]);
console.log(myArray[4][0]);
console.log(myArray[4][0][1]);

var removedElement = myArray.pop(); // This also remove the last element of a vector
console.log(removedElement);

removedElement = myArray.shift(); // This also remove the first element of a vector
console.log(removedElement);

myArray.unshift(removedElement); // This adds an element in the first position of a vector
console.log(myArray);