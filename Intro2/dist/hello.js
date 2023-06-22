"use strict";
let greetings = "Hello world";
console.log(greetings);
// TYPES IN TS
let age = 5;
let story = false;
let myname = "James John";
let l;
l = 5;
l = 'five';
//Array type
let ids;
ids = [1, 2, 3, 4, 5, 6];
//if the array will contain different types then 'any' will do just fine
let info;
info = [{ name: "jane", age: 2 }, "hello", true, 2345];
// type: tuple --> You can specify the exact types inside an array
let person = [1, "John Doe", false];
// An array of tuples
let employee;
employee = [[1, 'John'], [2, 'Jane'], [3, 'Jack']];
//  type: Union --> A particular variable holding more than one type
let id = 23;
let isLocked;
isLocked = false;
let wi = 'minimized';
//enums: enumerated types --> Enables us define a set of named constants
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right"; // By default it counts from 0
})(Direction || (Direction = {}));
;
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right"; // Will now start counting from 1
})(Direction1 || (Direction1 = {}));
;
var Direction3;
(function (Direction3) {
    Direction3["Up"] = "Up";
    Direction3["Down"] = "Down";
    Direction3["Left"] = "Left";
    Direction3["Right"] = "Right"; // Will now start counting from 1
})(Direction3 || (Direction3 = {}));
;
//Objects
//v1
let user = {
    id: 0,
    userName: "Wanjare",
    age: 88
};
let user1 = {
    id: 1,
    userName: "Wanjare",
    age: 80
};
let user2 = {
    id: 2,
    userName: "Wanjare",
    age: 79
};
//////////// Type Assertions /////////////////
// v1
let cid = 21;
let customerid = cid;
customerid = 34;
// v2
let custd = 21;
let customer_id = cid;
customer_id = 34;
// Furthermore: Type assertions
// 10 as string <-- this is wrong
10; // <-- this is right
//Assertions in the dom
//1:
let img = document.querySelector('img');
img.src = '';
//2:
let img1 = document.querySelector('img');
img1.width = 400;
//2:
let img2 = document.querySelector('img'); // <> not applicable in Reactjs
img2.title = '';
//3:
let img3 = document.querySelector('#img');
img3.src = "";
let user3 = {
    id: "001",
    name: "Jeff",
};
//regex type
let regxp = /\w+/;
//tuple type
let info4 = [1, "George", 45];
let mydetails = [1, 2, 3];
let mydetails1 = ['hello', 'sam', 'samuel'];
let mydetails3;
mydetails3 = [1, "John", 23];
