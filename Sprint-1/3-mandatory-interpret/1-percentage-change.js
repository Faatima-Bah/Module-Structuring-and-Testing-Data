let carPrice = "10,000"; //variable declaration
let priceAfterOneYear = "8,543";  //variable declaration

carPrice = Number(carPrice.replaceAll(",", ""));             //function call
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));      //function call and there’s a missing comma between "," and ""

// Number("10000") converts the string "10000" into the actual number 10000

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);  //function call

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
//  There are 5 function calls:
//  carPrice.replaceAll(",", "")
//  Number(carPrice.replaceAll(",", ""))
//  priceAfterOneYear.replaceAll(",", "")
//  Number(priceAfterOneYear.replaceAll(",", ""))
//  console.log(...)

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
//  function call and there’s a missing comma between "," and ""

// c) Identify all the lines that are variable reassignment statements
//  line 4 and 5 are variable reassignments

// d) Identify all the lines that are variable declarations
//  line 1 abd 2 are variable declarations

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
//   carPrice.replaceAll(",", "") replaces all commas in the stringwith nothing ""