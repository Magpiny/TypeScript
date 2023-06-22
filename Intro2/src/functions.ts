//using types in functions
function addTwoNumbers(x:number,y:number):number{
    return x+y;
}

console.log(addTwoNumbers(23,24));

//1: interfaces with functions --interface
interface mathFn{
    (x: number, y:number):number
};

let addNums: mathFn = (x: number, y: number) => x + y;

let subNums: mathFn = (x: number, y: number) => x - y;
    
console.log(subNums(12,3))

function getInfo(info:[number, string, number]):string{
    return `${info[0]}, ${info[1]} is ${info[2]}yrs old`;
}

console.log(getInfo([1, "Wanjare", 45])) //1, Wanjare is 45yrs old

//2: Another way of setting function types: by Inference ---type
type mathType = (a: number, b: number) => number;
let mult: mathType = (h,j) => h*j;
console.log(mult(12,10));

// Optional parameters and default parameters!

//1: Optional parameters
function addThreeNumbers(a: number, b: number, c?: number):number{
    if(c!==undefined){
        return a+b+c
    }
    return a+b;
}

//2: Default parameters
let sumThreeNumbers = (a: number, b: number, c: number=4): number => {
    return a+b+c;
}

console.log(addThreeNumbers(23,24,4));    //51
console.log(sumThreeNumbers(23,12,15));  //50

//Rest parameter
let totalNums = (...nums:number[]):number =>{
    return nums.reduce((prev, curr)=>prev+curr);
};

console.log(totalNums(12,10,13));

// The never type: used in functions that throw error mssgs and infinite loops
let myerror = (errMssg: string): never => {
    throw new Error(errMssg)
};
