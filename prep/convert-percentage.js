function convertToPercentage(decimalNumber) {
    const percentage = `${decimalNumber * 100}%`;
    return percentage;
}

const result1 = convertToPercentage(0.5);
const result2 = convertToPercentage(0.231);

console.log(result1);
console.log(result2);