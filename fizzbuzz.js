// This is our main function
function fizzbuzz() {
    console.log("WELCOME TO FIZZBUZZ");

    const fizz = 3;
    const buzz = 5;
    const bang = 7;
    const bong = 11;
    const fezz = 13;

    for (let count = 1; count <= 100; count ++) {
        //fizz check
        let fizz_number = false;
        if (count % fizz ==0) {
            fizz_number = true;
        }

        //buzz check
        let buzz_number = false;
        if (count % buzz ==0) {
            buzz_number = true;
        }

        //bang check
        let bang_number = false;
        if (count % bang ==0) {
            bang_number = true;
        }

        //bong check
        let bong_number = false;
        if (count % bong ==0) {
            bong_number = true;
        }

        //fezz check
        let fezz_number = false;
        if (count % fezz ==0) {
            fezz_number = true;
        }

        //output correct result
        switch(true) {
        case (fezz_number && bong_number): {
            console.log("FezzBong");
            break;
        }
        case (bong_number): {
            console.log("Bong");
            break;
        }
        case (fizz_number && buzz_number && bang_number && fezz_number): {
            console.log("FizzFezzBuzzBang");
            break;
        }
        case (fizz_number && buzz_number && bang_number): {
            console.log("FizzBuzzBang");
            break;
        }
        case (fizz_number && bang_number && fezz_number): {
            console.log("FizzFezzBang");
            break;
        }
        case (buzz_number && bang_number && fezz_number): {
            console.log("FezzBuzzBang");
            break;
        }
        case (fizz_number && buzz_number && fezz_number): {
            console.log("FizzFezzBuzz");
            break;
        }
        case (fizz_number && bang_number): {
            console.log("FizzBang");
            break;
        }
        case (fizz_number && buzz_number): {
            console.log("FizzBuzz");
            break;
        }
        case (buzz_number && bang_number): {
            console.log("BuzzBang");
            break;
        }
        case (fizz_number && fezz_number): {
            console.log("FizzFezz");
            break;
        }
        case (buzz_number && fezz_number): {
            console.log("FezzBuzz");
            break;
        }
        case (bang_number && fezz_number): {
            console.log("FezzBang");
            break;
        }
        case (fizz_number): {
            console.log("Fizz");
            break;
        }
        case (buzz_number): {
            console.log("Buzz");
            break;
        }
        case (bang_number): {
            console.log("Bang");
            break;
        }
        case (fezz_number): {
            console.log("Fezz");
            break;
        }
        default: {
            console.log(count);
        }
        }


    }

}


/*
    //initialise multiples to check
    const fizz = 3;
    const buzz = 5;
    const bang = 7;
    const bong = 11;
  
    for (let count = 10; count <= 30; count ++) {
        //false if number replaced by fizz or buzz on output
        let no_multiples = true;

        switch (true) {
        
            //bong check
            case (count % bong == 0): {
                no_multiples = false;
                process.stdout.write("bong");
                break;
            }

            //fizz check
            case (count % fizz == 0): {
                no_multiples = false;
                process.stdout.write("fizz");
                break;
            }

            //buzz check
            case (count % buzz == 0): {
                no_multiples = false;
                process.stdout.write("buzz");
            }

            //bang check
            case (count % bang == 0): {
                no_multiples = false;
                process.stdout.write("bang");
            }

            //not a multiple of any
            default:
                process.stdout.write(count.toString());
        }

        //newline for next number
        process.stdout.write("\n");
    }
}
*/



// Now, we run the main function:
fizzbuzz();

