/**
 * Code challenge that we'll pass a name and prop and it'll return the value of this prop
 */

var Contracts =
[

   {

        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"],

   },

   {

        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"],

   },

   {

        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"],

   },

   {

        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "uknown",
        "likes": ["JavaScript", "Gaming", "Foxes"],

   }

];

/**
 * Function that recive the first name, last name, the property and an array of objects and return the
 * property of the object if exists and undefined otherwise
 * @param {string} firstName string that represents the first name id 
 * @param {string} lastName string that represents the last name id
 * @param {string} prop it's the string with the property to verify
 * @param {Array<object>} Contracts it's an array that contains object that we'll verify if the property exist
 * @returns {object} it'll return the founded property if exists and undefined otherwise
 */
function lookUpProfile(firstName, lastName, prop, Contracts)
{

     for (var i = 0; i < Contracts.length; i++)
     { 
    
          if (Contracts[i].firstName === firstName && Contracts[i].lastName === lastName)
          { 

               return Contracts[i][prop];

          }

     }

    console.log("No such prop \"" + prop + "\" match for the name " + firstName + " " + lastName)
    return undefined;

}

console.log(lookUpProfile("Sherlok", "Holmes", "likes", Contracts))