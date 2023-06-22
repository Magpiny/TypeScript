"use strict";
//using types in functions
function addTwoNumbers(x, y) {
    return x + y;
}
console.log(addTwoNumbers(23, 24));
;
let addNums = (x, y) => x + y;
let subNums = (x, y) => x - y;
console.log(subNums(12, 3));
function getInfo(info) {
    return `${info[0]}, ${info[1]} is ${info[2]}yrs old`;
}
console.log(getInfo([1, "Wanjare", 45])); //1, Wanjare is 45yrs old
let mult = (h, j) => h * j;
console.log(mult(12, 10));
// Optional parameters and default parameters!
//1: Optional parameters
function addThreeNumbers(a, b, c) {
    if (c !== undefined) {
        return a + b + c;
    }
    return a + b;
}
//2: Default parameters
let sumThreeNumbers = (a, b, c = 4) => {
    return a + b + c;
};
console.log(addThreeNumbers(23, 24, 4)); //51
console.log(sumThreeNumbers(23, 12, 15)); //50
//Rest parameter
let totalNums = (...nums) => {
    return nums.reduce((prev, curr) => prev + curr);
};
console.log(totalNums(12, 10, 13));
// The never type: used in functions that throw error mssgs and infinite loops
let myerror = (errMssg) => {
    throw new Error(errMssg);
};
