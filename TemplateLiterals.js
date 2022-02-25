/**
 * This script create String using template Literals
 */

const person =
{

    "name": "Zodiac Hasbro",
    "age": 56

};

const result =
{

    "sucess": ["Max-length", "No-amd", "Prefer-arrow-functions"],
    "failure": ["no-var", "var-on-top", "linebreak"],
    "skipped": ["id-blacklist", "no-dup-keys"]

};
/**
 * This function is a example on how to use template.
 * @param {object} arr an Object that contain an string id and a list that correspond that id
 * @param {string} resultName a string that correspond the object id
 * @returns {string[]} returns a vector of string
 */
function makeList(arr, resultName)
{

    var arrVecResultsAux = [];
    var arrVecFinal = [];

    try
    {

        if(arr.hasOwnProperty(resultName) && typeof(resultName) === "string")
        {

            arrVecResultsAux = arr[resultName];

        }

        else
        {
            
            if(typeof(resultName) !== "string")
            {

                throw new Error(`Error: the type of "${resultName}" (${typeof(resultName)}) is not a string !!`);

            }

            else
            {

                throw new Error(`The property "${resultName}" doesn't exist !!`);

            }

            return undefined;

        }

    }catch(e)
    {

        console.error(e);

    }

    for (var i = 0; i < arrVecResultsAux.length; i++)
    {

        arrVecFinal.push(`<li classes="text-warning">${arr[resultName][i]}</li>`);

    }

    return arrVecFinal;

}

const greeting = `Hello, my name is ${person["name"]}!
  I'm ${person["age"]} years old.`;

console.log(greeting);
console.log(makeList(result, "failure"));