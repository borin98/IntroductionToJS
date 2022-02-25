/**
 * This script is an example on how you can use Simple field in objects
 * and some POO concepts
 */

const createPerson = (name, age, gender) => ({name, age, gender});
console.log(createPerson(1, 2, 3));
const bicycle =
{

    "gear": 2,
    setGear(newGear)
    {"use strict";

        this.gear = newGear;

    },

    getGear()
    {

        return this.gear;

    }

};

class SpaceShuttle
{

    constructor(targetPlanet)
    {

        this.targetPlanet = targetPlanet;

    }

}

/**
 * This function is an Example on how you create a Class in JS
 * @returns {Class} returns a object that recive a name
 */
function makeClass()
{

    class Vegetable
    {
    
        constructor(name)
        {
        
            this.name = name;

        }

    }

    return Vegetable;

}

function makeClassBook()
{

    class Book
    {

        constructor(author)
        {

            this._author = author;

        }

        get writer()
        {

            return this._author;

        }

        set writer(author)
        {

            this._author = author;

        }

    }

    return Book;

};

var Zeus = new SpaceShuttle("Jupiter");
const Vegetable = makeClass();
const carrot = new Vegetable("carrot");
bicycle.setGear(5);
console.log("Getting the gear ", bicycle.getGear());
console.log(Zeus.targetPlanet)

//Now, i'll use the get and setter method;
var Books2 = makeClassBook()
const book = new Books2("Maquiavel");
console.log("Name before the change : ", book.writer);
book.writer = "Ishikawa";
console.log("name after the change : ", book.writer);