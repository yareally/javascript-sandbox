$(function () {
    // the above loads jquery (also put }); at the very end of this file to close it out!

// to print messages, use console.log()
// to ask the user for information, use prompt()
// cupsOfCoffee = prompt("Would you like another cup of coffee?");
    let cupsOfCoffee = 2;

    console.log(`Cups of coffee so far: ${cupsOfCoffee}`);
// is equivalent to doing this:
    console.log("Cups of coffee so far: " + cupsOfCoffee);

// a series of if statements to determine how many cups of coffee the user has had
// if less than 3 cups, print "Yes I'll take another cup of coffee"
// if greater or equal to 3 cups, "I think I'm okay for now"

    /* cupsOfCoffee is less than 3 cups, do this */
    if (cupsOfCoffee < 3) {
        console.log("Yes I'll take another cup of coffee");
    }
    /* cupsOfCoffee is greater than or equal to 3 cups, do this */
    else {
        console.log("I think I'm okay for now");
    }

    /*
    1. Create a variable for the temperature and set it to 80

    2. Write a statement that outputs the temperature as "The temperature is 80 degrees";

    3. If the temp is greater than 80, output "time to swim" (set temp to 60, 90) and test;

    4. Create a precipitation variable and set it to false

    5. Only output "time to swim" if temp is greater than 80 and its not raining

    6. Set the precipitation variable to 'raining' or 'snowing' and only output 'time to swim' if there is no precipitation

    7. Create an 'indoors' variable and set it to true

    8. If indoors, then output 'time to swim' regardless of the temp and precip.

     */

    let temperature = 89;
    let precipitation = ""; // give it one of 3 values ("", "raining", "snowing")
    let indoors = true;
    console.log(`The temperature is ${temperature} degrees`);
    /* temperature is greater than 80 */
    if (temperature > 80) {
        console.log("Time to swim!");
        // print out time to swim in the console here
    }
    /* if temp is greater than 80 AND no precipitation */
    if (temperature > 80 && precipitation === "") {
        console.log("Time to swim! Temp is above 80 and no rain or snow");
        // print out time to swim in the console here
    }

    precipitation = "raining"; // reassign it to be raining or snowing
    /* if no precipitation */
    if (precipitation === "") {
        console.log("Time to swim! No rain or snow");
        // print out time to swim in the console here
    }

    /* if indoors is true */
    if (indoors) {
        console.log("We're indoors, who cares about the weather");
        // print out time to swim even if the temp is bad or it's raining/snowing
    }

    for (let i = 0; i <= 9; i++) {
        console.log(i);
    }

    for (let bottles = 99; bottles >= 0; --bottles) {
        console.log(`${bottles} bottles of beer left on the wall`);

        // if bottles === we must print something else besides what is above
        if (bottles === 10) {
            console.log("Hey! We need more beer!");
        }
        else if (bottles === 0) {
            console.log("hey you idiot, we're out of beer!");
        }
    }

// following is equivalent to the for loop above:
    let bottles = 99;

    while (bottles >= 0) {
        console.log(`${bottles} bottles of beer left on the wall`);

        // if bottles === we must print something else besides what is above
        if (bottles === 10) {
            console.log("Hey! We need more beer!");
        }
        else if (bottles === 0) {
            console.log("hey you idiot, we're out of beer!");
        }
        --bottles;
    }

    bottles = 0;

    switch (bottles) {
        case 10:
            console.log("Hey! We need more beer");
            break;
        case 0:
            console.log("Hey you idiot, we're out of beer!");
            break;
    }

    /*** jquery notes ***/

    /*** jquery notes ***/
    $('#myButton').click(function (event) {
        // currently, "this" refers to the button on the index.html page
        let btn = $(this);

        btn.html('FOO')

        $('#someOtherElement').css('background-color', 'green');

        console.log('button clicked!');

        btn.css('color', 'red');

        doStuff(btn);
    });

    function doStuff(btn)
    {
        // btn still refers to the html button
        console.log($(this));
        // "this" refers to the entire html document window (i.e. everything on the html page)
        console.log(btn);
    }


});

