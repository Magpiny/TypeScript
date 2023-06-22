"use strict";
// A typescript types
const print_ = console.log;
// Utility types
document.write(window.location.href);
const myAssgnmnt = {
    name: "John Doe",
    title: "Final Year Project",
    grade: "A"
};
const checkAssignmnt = (assign, updateProps) => {
    return Object.assign(Object.assign({}, assign), updateProps);
};
print_(checkAssignmnt(myAssgnmnt, { name: "George Masinde" }));
// 2. required and readonly
//Required: All the properties including ? optional ones are required
const checkAssignmnt1 = (assign) => {
    return assign;
};
// print_(checkAssignmnt1(myAssgnmnt)) //wont work/ -->Types of property 'verified' are incompatible.
//Readonly
let assignVerified = Object.assign(Object.assign({}, myAssgnmnt), { verified: true });
// print_(checkAssignmnt1(assignVerified))  //wont work ->Argument of type 'Readonly<Assignment>' is not assignable to parameter of type 'Required<Assignment>'.
// assignVerified.grade = "B" /This wont work/ -->Cannot assign to 'grade' because it is a read-only property.
print_(checkAssignmnt1(Object.assign(Object.assign({}, myAssgnmnt), { verified: true }))); // -> Works! Hooray!!
////////////////////////////////////////////////////////////////////////////////////
//3: Record utility type
const incomeStreams = {
    salary: 18000,
    bonus: 10000,
    sideHustle: 50000
};
let finalScore = {
    "Jane": "A",
    "Jack": "B",
    "Japheth": "C"
};
for (let key in finalScore) {
    print_(`${key}: ${finalScore[key]}`);
}
let newMarks = {
    "Jack": { math: 85, eng: 78 },
    "Jane": { math: 91, eng: 88 },
    "Japheth": { math: 81, eng: 68 }
};
for (let key in newMarks) {
    print_(`${key}: ${Object.keys(newMarks[key])}`);
} //Jack: math,eng????
let regDetails = {
    id: 34567894,
    name: "Pick Omit"
};
print_(regDetails); // ->Object { id: 34567894, name: "Pick Omit" }
let registerDet = {
    id: 33456783,
    name: "Omit Pick",
};
print_(registerDet); // ->Object { id: 33456783, name: "Omit Pick" }
// type validWifiState = "High" | "Low" | "Moderate"
/////////////////////////////////////////////////////////////////
// 7: Return type
// create a function that we'll generate our new type from
// create our new type from the functions return type
// call the function with the type
//func 1: return type is a string
let infoMssg = (name, action, hobby) => {
    return `${name} ${action} ${hobby}`;
};
//func 2: return type is an object
let getStudMarks = (name, marks) => {
    return {
        name, marks
    };
};
//use the types
const getStudBehavior = infoMssg("Jane", "likes", "Coding");
print_(getStudBehavior); // ->Jane likes Coding
const getStudScore = getStudMarks("Utility Types ReturnTypes", 100);
print_(getStudScore); // -> Object { name: "Utility Types ReturnTypes", marks: 100 }
let infoMssgArgs = ["Omondi", "enjoys playing", "Football"];
let marksAgrs = ["Physics", 94];
//Pass the parameters to the functions
const newHobby = infoMssg(...infoMssgArgs);
const phyMarks = getStudMarks(...marksAgrs);
//call the functions
print_(newHobby); // -> Omondi enjoys playing Football
print_(phyMarks); // -> Object { name: "Physics", marks: 94 }
// Awaited;
//New type that works with promises
// To be covered another day
//The End
