//let height = 10;
//let width = 30;

//calculating the area

function calculateArea(height, width) {
    const area = height * width;
    return area;
}

const areaResult1 = calculateArea(10,30);
const areaResult2 = calculateArea(50,20);
//print the area
console.log(`The area is ${areaResult1}`);
console.log(`The area is ${areaResult2}`);


//calculating the perimeter
function calculatePerimeter(height,width) {
    const perimeter = (height + width) * 2;
    return perimeter
}

const perimeterResult1 = calculatePerimeter(10,30);
const perimeterResult2 = calculatePerimeter(50,20);
//print the perimeter
console.log(`the perimeter is ${perimeterResult1}`);
console.log(`the perimeter is ${perimeterResult2}`);