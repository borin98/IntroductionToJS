/**
 * This program is demonstrate how a function in js works  
 */

/** Function that takes strings and return another string
* @param {string} myNoun string that represents the first name 
* @param {string} myAdj string that reprents the adjective
* @param {string} myVerb string that represents a verb
* @param {string} myAdverb string that represents an adverb
* @return {string} return a concat string to form a phrase
*/
function wordBlanks(myNoun, myAdj, myVerb, myAdverb)
{

    var result = "";
    result += "The " + myAdj + " " + myNoun + " " + myVerb + " to the store " + myAdverb;
    return result;

}

console.log(wordBlanks("dog", "big", "ran", "quickly"));