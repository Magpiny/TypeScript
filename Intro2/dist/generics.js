"use strict";
//Generics
// Used to build custom components
function getArray(items) {
    return new Array().concat(items);
}
;
let numArray = getArray([1, 2, 4]);
let stringArray = getArray(['hello', 'world']);
function logPoint(p) {
    console.log(`${p.x}, ${p.y}`);
}
// logs "12, 26"
const point = { x: 12, y: 26 };
logPoint(point);
const process = (PID) => {
    //return PID
    return PID;
};
