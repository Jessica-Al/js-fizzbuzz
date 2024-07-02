// This is our main function
function fizzbuzz() {
    console.log("WELCOME TO FIZZBUZZ");

    //initialise multiples to check
    const fizz = 3;
    const buzz = 5;

    //initilaise counter
    for (let count = 1; count <= 100; count ++) {
        //true if the number is not a multiple of `fizz` or `buzz`
        let no_multiples = true;
        //fizz check
        if (count % fizz == 0) {
            no_multiples = false
            process.stdout.write("fizz");
        }
        //buzz check
        if (count % buzz == 0) {
            no_multiples = false
            process.stdout.write("buzz");
        }
        //not a multiple of `fizz` or `buzz`
        if (no_multiples) {
            process.stdout.write(count.toString());
        }
        //newline for next number
        process.stdout.write("\n");
    }

}

// Now, we run the main function:
fizzbuzz();

