// This is our main function
function fizzbuzz() {
    console.log("WELCOME TO FIZZBUZZ");

    //initialise multiples to check
    const fizz = 3;
    const buzz = 5;
    const bang = 7;

    //initilaise counter
    for (let count = 1; count <= 100; count ++) {
        //false if number replaced by fizz or buzz on output
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
        //bang check
        if (count % bang == 0) {
            no_multiples = false;
            process.stdout.write("bang");
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

