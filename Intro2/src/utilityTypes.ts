// A typescript types
const print_ = console.log;
// Utility types
document.write(window.location.href);
//document.write(window.history.state);
// -> PARTIAL ---> Takes one argument ...Partial<Type>
interface Assignment{
    name: string,
    title: string,
    grade: string|number,
    verified?: boolean
}

const myAssgnmnt: Assignment = {
    name: "John Doe",
    title: "Final Year Project",
    grade: "A"
}

const checkAssignmnt = (assign: Assignment, updateProps: Partial<Assignment>):Assignment =>{
    return {
        ...assign, 
        ...updateProps
    }
}

print_(checkAssignmnt(myAssgnmnt, {name: "George Masinde"}));

// 2. required and readonly
  //Required: All the properties including ? optional ones are required
const checkAssignmnt1 = (assign: Required<Assignment>): Assignment => {
    return assign
}

// print_(checkAssignmnt1(myAssgnmnt)) //wont work/ -->Types of property 'verified' are incompatible.

//Readonly
let assignVerified: Readonly<Assignment> = {
    ...myAssgnmnt, verified: true,
}

// print_(checkAssignmnt1(assignVerified))  //wont work ->Argument of type 'Readonly<Assignment>' is not assignable to parameter of type 'Required<Assignment>'.

// assignVerified.grade = "B" /This wont work/ -->Cannot assign to 'grade' because it is a read-only property.

print_(checkAssignmnt1({...myAssgnmnt, verified: true})) // -> Works! Hooray!!

////////////////////////////////////////////////////////////////////////////////////
//3: Record utility type
const incomeStreams: Record<string, number> = {
    salary: 18_000,
    bonus: 10_000,
    sideHustle: 50_000
}

//v2:
type Grades = "A"|"B"|"C"|"D"|"E";
type pupils = "Jane"|"Jack"|"Japheth";

let finalScore: Record<pupils, Grades> = {
    "Jane": "A",
    "Jack": "B",
    "Japheth": "C"
}

for (let key in finalScore){
    print_(`${key}: ${finalScore[key as keyof typeof finalScore]}` );
}

//v3 
interface marks{
    math: number,
    eng: number,
}

let newMarks: Record<pupils, marks> = {
    "Jack": {math: 85, eng: 78},
    "Jane": {math: 91, eng: 88},
    "Japheth": {math: 81, eng: 68}
};

for (let key in newMarks){
    print_(`${key}: ${Object.keys(newMarks[key as keyof typeof newMarks])}`)
} //Jack: math,eng????


/////////////////////////////////////////////////////////////////////////
// 4:  Pick and omit
// In Pick we only use a portion of the datatype provided
// e.g for a datatype that requires 4 values we can decide
// to only use 1 or two or three instead of the entire 
// datatype variables as shown

// Our new datatype
interface Reg{
    id: number,
    name: string,
    gender: string,
    hasDegree?: boolean
}

//Using pick we can for e.g use two datatypes of the 4
// Although the first 3 are required & the last on is optional

// let's create a new type from the above interface
type Register = Pick<Reg, "id"|"name">;

let regDetails: Register = {
    id: 34567894,
    name: "Pick Omit"
};

print_(regDetails); // ->Object { id: 34567894, name: "Pick Omit" }

// Omit does the exact opposite of Pick
// It ignores whatever is passed to it

//create a new type with omit
type Registration = Omit<Reg, "gender"|"hasDegree" >

let registerDet: Registration = {
    id: 33456783,
    name: "Omit Pick",
};

print_(registerDet); // ->Object { id: 33456783, name: "Omit Pick" }

///////////////////////////////////////////////////////////////////////
// 5: Exclude and Extract
// Exclude and Extract are used only for union types
// Exclude removes one or more types from a union while
// Extract includes one or more types from the specified union types
//i.e
type newGrading = Exclude<Grades, "D"|"E">
// -> type newGrading = "A" | "B" | "C"

type highGrades = Extract<Grades, "A"|"B" >
// -> type highGrades = "A" | "B"


////////////////////////////////////////////////////////
//6: Nonnullable
type wifiStates = "High"|"Low"|"Moderate"|undefined|null;
//type wifiStates = "High" | "Low" | "Moderate" | null | undefined

type validWifiState = NonNullable<wifiStates>
// type validWifiState = "High" | "Low" | "Moderate"


/////////////////////////////////////////////////////////////////
// 7: Return type
// create a function that we'll generate our new type from
// create our new type from the functions return type
// call the function with the type
//func 1: return type is a string
let infoMssg = (name: string, action: string, hobby: string)=>{
    return `${name} ${action} ${hobby}`
}
//func 2: return type is an object
let getStudMarks = (name: string, marks: number) =>{
    return {
        name, marks
    }
}

// create the types
type StudHobby = ReturnType<typeof infoMssg>;
type StudMarks = ReturnType<typeof getStudMarks>;

//use the types
const getStudBehavior: StudHobby = infoMssg("Jane", "likes", "Coding");
print_(getStudBehavior); // ->Jane likes Coding

const getStudScore: StudMarks = getStudMarks("Utility Types ReturnTypes", 100);
print_(getStudScore); // -> Object { name: "Utility Types ReturnTypes", marks: 100 }


///////////////////////////////////////////////////////////////////////////
// Parameters
// It's like returnType but uses parameters instead 

//create new types from func1 and func2
// the new types will be tuples of the parameters passed []
type TypeInfoMssg = Parameters<typeof infoMssg>;
type TypeStudMarks = Parameters<typeof getStudMarks>;

let infoMssgArgs: TypeInfoMssg = ["Omondi", "enjoys playing", "Football"];
let marksAgrs: TypeStudMarks = ["Physics", 94];

//Pass the parameters to the functions
const newHobby: StudHobby = infoMssg(...infoMssgArgs);
const phyMarks: StudMarks = getStudMarks(...marksAgrs);

//call the functions
print_(newHobby); // -> Omondi enjoys playing Football
print_(phyMarks); // -> Object { name: "Physics", marks: 94 }

// Awaited;
//New type that works with promises
// To be covered another day
//The End
