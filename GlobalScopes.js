/**
 * All var variables created outside of functions are considered global variables.
 * This lenguage is like c syntax with some python logic +-
 */

var global = 10;

function fun2()
{
    
    //var oopsGlobal = 5; // In this case, this variable is global just for this function
    oopsGlobal = 5; // In this case, this variable is global

}

function fun()
{

    var output = "";

    if(typeof global != "undefined")
    {

        output += "global = " + 10;

    }

    if(typeof oopsGlobal != "undefined")
    {

        output += "\noopsGlobal = " + oopsGlobal;

    }

    console.log(output);

}

fun2();
fun();