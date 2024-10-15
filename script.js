// Function 1: Adds 5 to a number
const addFive = (x) => x + 5;

// Function 2: Multiplies a number by 2
const multiplyByTwo = (x) => x * 2;

// Composition function: Combines two functions
const compose = (f, g) => (x) => f(g(x));

// Composing the functions: First multiply, then add
const multiplyThenAdd = compose(addFive, multiplyByTwo);

// Testing the composed function
const result = multiplyThenAdd(10); // First multiplyByTwo(10) -> 20, then addFive(20) -> 25
console.log(result); // Output: 25
