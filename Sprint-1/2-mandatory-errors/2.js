// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?
//The error was that the variable was declare after the statement. Which made the statement run first and bring up an error
const cityOfBirth = "Bolton";
console.log(`I was born in ${cityOfBirth}`);
