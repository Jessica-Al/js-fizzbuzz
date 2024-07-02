// This is our main function
function fizzbuzz() {
    console.log("WELCOME TO FIZZBUZZ");

    //initialise multiples to check
    const fizz = 3
    const buzz = 5

    //initilaise counter
    for (let count = 1; count <= 100; count ++) {
        //fizzbuzz check
        if (count % fizz == 0 && count % buzz == 0) {
            console.log("fizzbuzz");
        }
        //buzz check
        else if (count % buzz == 0) {
            console.log("buzz");
        }
        //fizz check
        else if (count % fizz == 0) {
            console.log("fizz");
        }
        //not a multiple of 3 and/or 5
        else {
            console.log(count);
        }
    }

}

// Now, we run the main function:
fizzbuzz();

