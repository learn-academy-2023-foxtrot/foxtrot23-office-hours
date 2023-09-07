// Process
  // Setup
    // cd into the github repository: $ cd <github-repo>
    // Create a new branch: $ git checkout -b jest-initials1-initials2
    // Create a new directory: $ mkdir <project-name> 
    // cd into the project directory you just created: $ cd <project-name>
    // create a test file with the extension .test.js: $ touch jest.test.js
    // Add the dependencies: $ yarn add jest
    // Open the project directory in a text editor
    // Code!

  // Git flow to push changes from the project directory to GitHub 
  // cd up to the level of the github directory: $ cd ..
  // perform git flow to push local code to github
    // $ git status
      // NOTE: If you see ./ on the untracked files then you are still at the project level
    // $ git add <project-name>
    // $ git commit -m "message describing the work that was accomplished"
    // $ git push origin <branch-name>

  // Switching drivers
    // make sure you have clone the github repo: $ git clone <url code from the github repo>
    // $ git fetch origin <branch-name>
    // $ git checkout <branch-name>
    // cd into the project directory: $ cd <project-name>
    // add the yarn dependencies: $ yarn

  // Additional swaps
    // ensure you are on github repo and the correct branch 
    // $ git pull origin <branch-name>

// Useful Commands
  // check the data: $ console.log()
  // to run the test suite: $ yarn jest

// Red-Green-Refactor
  // Write the test
  // See the test fail
  // Write the code
  // See the test pass
  // Refactor, if necessary

// boiler plate for jest test
  // describe("functionName", () => {
  //   it("action of the function", () => {
  //     // any test variables that will be used as an argument 
  //     expect(functionName("argument")).toEqual("expected output")
  //   })
  // })

// boiler plate for pseudocode:
  // function name:
  // input:
  // output:
  // process:

// boiler plate for function
  // const functionName = (parameter) => {
  //   // any additional logic
  //   return "something"
  // }

// Challenges
// Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.
  
  // RED
  // Write the test
  describe("coffeeStatus", () => {
    it("returns drink coffee if you are tired and keep working if you are not tired", () => {
      expect(coffeeStatus("yes")).toEqual("drink coffee")
      expect(coffeeStatus("no")).toEqual("keep working")
      expect(coffeeStatus(0)).toEqual("Please answer yes or no")
    })
  })

  // See the test fail
    // $ yarn jest
    // Good failure:  FAIL  ./week2.test.js ReferenceError: coffeeStatus is not defined

  // Create the function that will make the test pass.
  // GREEN
  // Write the code
    // Pseudocode:
    // function name: coffeeStatus
    // input: string
    // output: string based on yes or no input
    // process: conditional statements to evaluate if a person is tired and returns the appropriate string based on yes or no input

    // function expression:
    // const coffeeStatus = (string) => {
    //   if(string === "yes") {
    //     return "drink coffee"
    //   } else if(string === "no") {
    //     return "keep working"
    //   } else {
    //     return "Please answer yes or no"
    //   }
    // }

  // See the test pass
    //  PASS  ./week2.test.js

  // REFACTOR
   // Refactor, if necessary
    //  ternary operator

    // basic with a true or false option
      // const coffeeStatus = (string) => {
      //   // condition
      //   string === "yes"
      //     // true
      //     ? "drink coffee"
      //     // false
      //     : "keep working"
      // }

    // additional conditional statements
      // ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator

      const coffeeStatus = (string) => {
        // first true condition
        return string === "yes" ? "drink coffee"
        // second true condition
        : string === "no" ? "keep working"
        // catch all
        : "Please answer yes or no"
      } 

      // run test suite again to check refactor
        //  PASS  ./week2.test.js


// Write the test for a function called fizzbuzz. If a number is a multiple of 3, replace it with the word "fizz". If a number is a multiple of five, replace it with the word "buzz". If a number is a multiple of both 3 and 5, replace it with "fizzbuzz".

// do not comment out previous test and function expression. Allow test suite to check if additional code is making previous code fail
describe("fizzbuzz", () => {
  it("If a number is a multiple of 3, replace it with the word 'fizz'. If a number is a multiple of five, replace it with the word 'buzz'. If a number is a multiple of both 3 and 5, replace it with 'fizzbuzz'.", () => {
    expect(fizzbuzz(9)).toEqual("fizz")
    expect(fizzbuzz(10)).toEqual("buzz")
    expect(fizzbuzz(15)).toEqual("fizzbuzz")
    // make sure to test out all edge cases of the function
    expect(fizzbuzz(8)).toEqual("not a multiple of 3 or 5")
  })
})

// Good failure: ReferenceError: fizzbuzz is not defined

// Create the function that will make the test pass.
// Pseudocode:
  // function name: fizzbuzz
  // input: number
  // output: string of fizz, buzz, or fizzbuzz based of if the number is a multiple of 3, 5, or 3 and 5
  // process: 
    // create a function named fizzbuzz
    // takes in a parameter called value
    // ternary operator to provides conditions if multiple of 3 --> "fizz", if multiple of 5 --> "buzz", if multiple of 3 and 5 --> "fizzbuzz"

  // function expression
  // const fizzbuzz = (value) => {
  //   // make sure to place the most stringent condition first
  //   return value % 3 === 0 && value % 5 === 0 ? "fizzbuzz"
  //     : value % 5 === 0 ? "buzz"
  //     : value % 3 === 0 ? "fizz"
  //     : "not a multiple of 3 or 5"
  // } 

  // success --->  PASS  ./week2.test.js

  // refactor
    // combine the 3 and 5 multiple into 15
    const fizzbuzz = (value) => {
      // make sure to place the most stringent condition first
      return value % 15 === 0 ? "fizzbuzz"
        : value % 5 === 0 ? "buzz"
        : value % 3 === 0 ? "fizz"
        : "not a multiple of 3 or 5"
    } 

    // make sure refactor passes
    // success --->  PASS  ./week2.test.js
    