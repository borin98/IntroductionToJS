/**
 * This program is to demonstrate the diferente between "==" and "===" operator
 * == operator tries to convert as the same type to see if the values are equal
 * === operator doesn't convert as the same type to see if the values are equal
 */

/**
 * This function use double equal to verify if a int value is equal to 12
 * @param {int} val it's a int value
 * @returns {string} string that returns "Equal" if the value of val is equal to 12 and "Not equal" otherwise
 */
function testDoubleEqual(val) 
{

    if(val == 12)
    {

        return "Equal";

    }

    else
    {

        return "Not equal";

    }

}

/**
 * This function use double equal to verify if a int value is equal to 12
 * @param {int} val it's a int value
 * @returns {string} string that returns "Equal" if the value of val is equal to 12 and "Not equal" otherwise
 */
function testTripleEqual(val)
{

    if(val === 12)
    {

        return "Equal";

    }

    else
    {

        return "Not equal";

    }

}

/**
 * This function use double equal to verify if a int value isn't equal to 12
 * @param {int} val it's a int value
 * @returns {string} string that returns "Equal" if the value of val is equal to 12 and "Not equal" otherwise
 */
 function testDoubleInequality(val)
 {
 
     if(val != 12)
     {
 
         return "Not equal";
 
     }
 
     else
     {
 
         return "Equal";
 
     }
 
 }

 /**
 * This function use triple equal to verify if a int value isn't equal to 12
 * @param {int} val it's a int value
 * @returns {string} string that returns "Equal" if the value of val is equal to 12 and "Not equal" otherwise
 */
  function testTripleInequality(val)
  {
  
      if(val !== 12)
      {
  
          return "Not equal";
  
      }
  
      else
      {
  
          return "Equal";
  
      }
  
  }

console.log("Double equal with 12 as int : ", testDoubleEqual(12));
console.log("Double equal with 12 as string : ", testDoubleEqual("12"));
console.log("Triple equal with 12 as int : ", testTripleEqual(12));
console.log("Triple equal with 12 as string : ", testTripleEqual("12"));
console.log("\n========================================\n")
console.log("Double ineq with 10 as int : ", testDoubleInequality(10));
console.log("Double ineq with 10 as string : ", testDoubleInequality("10"));
console.log("Triple ineq with 10 as int : ", testTripleInequality(10));
console.log("Triple ineq with 10 as string : ", testTripleInequality("10"));