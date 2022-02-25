/**
 * This script count cards from a black jack card game
 */

/**
 * 
 * @param card it's a parameter that represent the card it can be both a int or a string 
 * @type {int, string} types for the card variable
 * @param {int} count a int value that represents if is better for the user to bet or hold
 * @param {bool} display when this flag is true, it'll print a mensagem with the count value and if is 
 * better for bet or hold
 * @returns {int} return and int that represents the actual count value
 */
function cc(card, count, display)
{

    var holdbet = "Hold";

    if(card >= 2 && card <= 6)
    {

        count++;

    }

    else if(card == 10 || card == "J" || card == "Q" || card == "K" || card == "A")
    { 
    
        count--;

    }

    if (count > 0)
    {

        holdbet = "Bet";

    }

    if (display)
    {

        console.log(count + " " + holdbet);

    }

    return count;

}

var count = 0;
count = cc(2, count, false);
count = cc(3, count, false);
count = cc(7, count, false);
count = cc("K", count, false);
count = cc("A", count, false);
count = cc(4, count, true);

count = 0;
count = cc(2, count, false);
count = cc("K", count, false);
count = cc(10, count, false);
count = cc("K", count, false);
count = cc("A", count, false);
count = cc(4, count, true);