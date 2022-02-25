/**
 * This script demonstrate an example of object in Js
 */

/**
 * 
 * @param {string} val string that represents the dict key 
 * @returns {string} returns a string that correspond that dict key and returns undefined if this key does 
 * not exist in the dict
 */
function phoneticLookUp(val)
{

    var LookUp =
    {

        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "Foxtrot": "Frank"

    };

    if (LookUp.hasOwnProperty(val))
    {

        return LookUp[val];

    }

    return undefined;

}

var OurDog =
{

    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything !"],
    5: "Happy :D"

};

var dogName = OurDog.name;
console.log("Dog name : ", dogName);
console.log("Dog tails : ", OurDog["tails"]);
console.log("Dog is happy ? : ", OurDog[5]);
OurDog.name = "Happy Camper";
console.log("New dogs name : ", OurDog.name);

OurDog.bark = "Auau"; // This add a new properties in an object
console.log("Dog's barking : ", OurDog.bark);
delete OurDog.bark;

console.log(phoneticLookUp("echo"));
console.log(phoneticLookUp("b"));