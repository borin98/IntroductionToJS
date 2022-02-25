/**=========================== 
 * Scape syntax
 * \' single quotes
 * \'' double quotes
 * \\ backslashes
 * ===========================
 * New elements strings
 * \n new line
 * \r carriage return
 * \t tab
 * \b backspace
 * \f form feed
 * ===========================
 * 
 * OBS : In js, strings are immutable, which means that strings can't change once they're created.
 * The best you can do is to create a new string with the changed content and 
 * assing the variable to point to it
**/

var myStr = "FristLine\n\t\\SecondLine\nThirdLine";
console.log(myStr);