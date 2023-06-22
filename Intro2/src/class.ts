// // classes in TS
// // public, private and protected

// class Person{
//     id: number;
//     public name: string;
//     protected age: number;
//     profession: string;

//     constructor(id:number, name: string, age: number, prof: string){
//         this.id = id
//         this.name = name
//         this.age = age
//         this.profession = prof
//     }
// }

// const mas = new Person(2, "Leumas", 98, "Pastor");
// console.log(mas.name);

// // using interfaces in classes
// interface dogInterface{
//     id: Number,
//     name: string,
//     isVaccinated(): string,
// }

// class Dog implements dogInterface{
//     id: number;
//     public name: string;

//     constructor(id: number, name: string){
//         this.id = id;
//         this.name = name;
//     }

//     isVaccinated(){
//         return `${this.name} is vaccinated`
//     }
// }

// let mydog = new Dog(1, "Rakes");

// console.log(mydog.isVaccinated());

// // subclasses
// class GermanShephered extends Dog{
//     public weight: number | string;
//     public size : string;

//     constructor(id: number, name: string, weight: number, size: string){
//         super(id, name)
//         this.weight = weight;
//         this.size = size;
//     }
//     dogStatus():string{
//         return `My ${this.name} weighs about ${this.weight}kgs and is very ${this.size}`
//     }
// }

// let newDog = new GermanShephered(2, "German Shephered", 20, 'big');
// console.log(newDog.isVaccinated());
// console.log(newDog.dogStatus());



// ////////////// version 2

/* Visibility modifiers
    1. public
    2. private : accessible only inside a class
    3. protected: accessible inside a class and its subsequent sub classes only
    4. readonly

*/
let log = console.log;

class Animal{
    id: number;
    name: string;
    breed: string;
    age: number;

    constructor(id: number, name: string, breed: string, age: number){
        this.id = id;
        this.name = name;
        this.breed = breed;
        this.age = age;
    }

    public getAnimalDetails():string{
        return `My dog's name is ${this.name}, a ${this.breed} and is ${this.age}months old`
    }
}

const newAnimal = new Animal(1, 'Rex', 'German shephered', 13);
log(newAnimal.getAnimalDetails()); //My dog's name is Rex, a German shephered and is 13months old
log(newAnimal.age) //13

// class with visibility modifiers

class MyMath{
    static PI: number = 3.142;
    static r: number = 7;
    constructor(private readonly PI:number, public a: number, public b:number){
        this.PI = PI;
        this.a = a;
        this.b = b;
        
    }

    getSum():number{
        return this.a + this.b
    }

    getCircleArea():number{
        return this.PI * this.a * this.a;
    }

    public static getAreaofCircle():number| string{
        return this.PI * this.r * this.r+" cm2";  
    }
}

log(MyMath.getAreaofCircle());  //153.958 cm2

let newMath = new MyMath(3.142, 7, 8);
log(newMath.getCircleArea());
log(newMath.getSum());

//////////////////////////////////////////////////
// Applying an interface to a class
interface SportsMan{
    name: string;
    sport: string;
    play(action: string): string;
}

class Footballer implements SportsMan {
    constructor(
        public name: string,
        public sport: string,
    ){
        this.name = name;
        this.sport = sport;
    }
    public play(action: string): string {
        return `${this.name} ${action} ${this.sport}`;
    }
}

const Ronaldo = new Footballer('Christiano', 'football');
const Messi = new Footballer('Messi', 'football');
log(Ronaldo.play("plays"))
log(Messi.play("likes"))
log(Messi.name)

// static members
class Liverpool extends Footballer{
    static readonly PI: number = 3.142
    static age: number;

    constructor(name: string, sport: string, public age:string){
        super(name, sport)
        this.age = age;
    }

    play(action:string){
        return `Liverpool ${action} ${this.sport}`
    }

    static fact(): number{
        return Liverpool.PI
    }
}
log(Liverpool.fact())

//////////////////////////////////////////////////////////////////////////
/// Getters and setters

// Same as in JavaScript
//// ////////////////////////////////////////////////////////////////////
// Index signature
interface transObj {
    [index: string]: number
}

const todaysTrans:transObj = {
    Books:-10,
    Mchele: -5,
    Unga:50
}

const todaysNet =(transactions:transObj): string => {
    let total = 0;
    for (const transaction in transactions){
        total += transactions[transaction]
    }
    return `Today's total sales is: Ksh.${total}`;
}  

log(todaysNet(todaysTrans));

// Assertions and keyof key word
interface Student{
   // [key:string]:number|string|number[]|undefined
    name: string,
    GPA: number,
    classes?:number[],
}

const student:Student = {
    name: "John Doe",
    GPA: 4.50,
    classes:[101, 203, 336]
}

//v1

for(let key in student){
    // log(`${key}: ${student[key]}`) will not work as in normal JS
    log(`${key}: ${student[key as keyof Student]}`)

};

// v2     ///NB: ==>>V1 AND V2 produced the same results
Object.keys(student).map(key=>{
    log(`${key}: ${student[key as keyof typeof student]}`)
});

//v3: Improved v1 & V2, using functions instead
let logSTudentDetails = (student:Student, key: keyof Student):void =>{
    log(`Student ${key}: ${student[key]}`)
};
// let write = document.write
// write("Hello world in TypeScript!")


logSTudentDetails(student, "name")

// Object.keys(student).map((key)=>{      //works but throws error in TS
//     logSTudentDetails(student, key)
// });

// New way: Utility types
type incomeStreams = 'salary'|'bonus'|'sidehustle';
type incomes = Record<incomeStreams, number>;

let newIncome: incomes = {
    salary: 18_000,
    bonus: 10_000,
    sidehustle: 5_000
}

for(let key in newIncome) {
    log(`${key}: ${newIncome[key as keyof incomes]}`)

};

class StoreObj<T>{
    constructor(public name: T){
        this.name = name;
    }

    get nameObj(){
        return this.name;
    }

    set nameObj(name: T){
        this.name = name;
    }

    static getName(): string {
        return "Hello world"
    }
}

let newName = new StoreObj("Job");
newName.nameObj = "Dave";

log(newName.nameObj);
log(StoreObj.getName());
