let firstName = "Creola";
let middleName = "Katherine";
let lastName = "Johnson";

// Declare a variable called initials that stores the first character of each string.
// This should produce the string "CKJ", but you must not write the characters C, K, or J in the code of your solution.
let initials = ``;
let firstNameInitial = firstName[0];
let secondNameInitial = middleName[0];
let lastNameInitial = lastName[0];

initials= `${firstNameInitial+secondNameInitial+lastNameInitial}`;
console.log(initials);
// https://www.google.com/search?q=get+first+character+of+string+mdn

