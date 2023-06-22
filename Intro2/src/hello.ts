let greetings: string = "Hello world";
console.log(greetings);

// TYPES IN TS
let age: number = 5;
let story: boolean = false;
let myname: string = "James John";
let l: any;

l = 5;
l = 'five';

//Array type
let ids: number[];
ids = [1,2,3,4,5,6];

//if the array will contain different types then 'any' will do just fine

let info: any[];
info = [{name:"jane", age: 2},"hello", true, 2345]

// type: tuple --> You can specify the exact types inside an array
let person: [number, string, boolean] = [1, "John Doe", false];

// An array of tuples
let employee: [number, string][];
    employee = [[1,'John'], [2, 'Jane'], [3, 'Jack']];

//  type: Union --> A particular variable holding more than one type
let id: number|string = 23;

// creating a new type
type mybool = true|false; 

let isLocked: mybool;
isLocked = false;

type windowStates = 'open' | 'clozed' | 'minimized';
let wi: windowStates = 'minimized'

//enums: enumerated types --> Enables us define a set of named constants
enum Direction{
    Up,Down,Left,Right // By default it counts from 0
};
enum Direction1{
    Up=1,Down,Left,Right  // Will now start counting from 1
};

enum Direction3{
    Up='Up',Down='Down',Left='Left',Right='Right'  // Will now start counting from 1
};

//Objects

//v1
let user:{id: number, userName: string, age: number} = {
    id: 0,
    userName: "Wanjare",
    age: 88
}

//v2
type userType = {id: number, userName: string, age: number}

let user1: userType = {
    id: 1,
    userName: "Wanjare",
    age: 80
}

//v3
interface userType2{
    id: number, 
    userName: string, 
    age: number
}

let user2: userType2 = {
    id: 2,
    userName: "Wanjare",
    age: 79
}

//////////// Type Assertions /////////////////
// v1
let cid: any = 21;
let customerid = <number>cid;

customerid = 34;

// v2
let custd: any = 21;
let customer_id = cid as number;

customer_id = 34;

// Furthermore: Type assertions
// 10 as string <-- this is wrong

(10 as unknown) as string // <-- this is right

//Assertions in the dom
//1:
let img = document.querySelector('img')!;
img.src = ''

//2:
let img1 = document.querySelector('img') as HTMLImageElement;
img1.width = 400;

//2:
let img2= <HTMLImageElement >document.querySelector('img'); // <> not applicable in Reactjs
img2.title=''

//3:
let img3 = document.querySelector('#img') as HTMLImageElement
img3.src = "";


///// interfaces: Creating custom types
interface Person{
    readonly id: number|string,
    name: string,
    age?: number, // ? makes the property optional
}

let user3: Person = {
    id: "001", 
    name: "Jeff", 
}

//regex type
let regxp:RegExp = /\w+/;

//tuple type
let info4:[number, string, number] = [1,"George", 45];

let mydetails:number[] = [1,2,3];
let mydetails1: string[] = ['hello', 'sam', 'samuel'];

let mydetails3:[number, string, number];
mydetails3 = [1, "John", 23];