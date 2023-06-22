"use strict";
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
class Animal {
    constructor(id, name, breed, age) {
        this.id = id;
        this.name = name;
        this.breed = breed;
        this.age = age;
    }
    getAnimalDetails() {
        return `My dog's name is ${this.name}, a ${this.breed} and is ${this.age}months old`;
    }
}
const newAnimal = new Animal(1, 'Rex', 'German shephered', 13);
log(newAnimal.getAnimalDetails()); //My dog's name is Rex, a German shephered and is 13months old
log(newAnimal.age); //13
// class with visibility modifiers
class MyMath {
    constructor(PI, a, b) {
        this.PI = PI;
        this.a = a;
        this.b = b;
        this.PI = PI;
        this.a = a;
        this.b = b;
    }
    getSum() {
        return this.a + this.b;
    }
    getCircleArea() {
        return this.PI * this.a * this.a;
    }
    static getAreaofCircle() {
        return this.PI * this.r * this.r + " cm2";
    }
}
MyMath.PI = 3.142;
MyMath.r = 7;
log(MyMath.getAreaofCircle()); //153.958 cm2
let newMath = new MyMath(3.142, 7, 8);
log(newMath.getCircleArea());
log(newMath.getSum());
class Footballer {
    constructor(name, sport) {
        this.name = name;
        this.sport = sport;
        this.name = name;
        this.sport = sport;
    }
    play(action) {
        return `${this.name} ${action} ${this.sport}`;
    }
}
const Ronaldo = new Footballer('Christiano', 'football');
const Messi = new Footballer('Messi', 'football');
log(Ronaldo.play("plays"));
log(Messi.play("likes"));
log(Messi.name);
// static members
class Liverpool extends Footballer {
    constructor(name, sport, age) {
        super(name, sport);
        this.age = age;
        this.age = age;
    }
    play(action) {
        return `Liverpool ${action} ${this.sport}`;
    }
    static fact() {
        return Liverpool.PI;
    }
}
Liverpool.PI = 3.142;
log(Liverpool.fact());
const todaysTrans = {
    Books: -10,
    Mchele: -5,
    Unga: 50
};
const todaysNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    return `Today's total sales is: Ksh.${total}`;
};
log(todaysNet(todaysTrans));
const student = {
    name: "John Doe",
    GPA: 4.50,
    classes: [101, 203, 336]
};
//v1
for (let key in student) {
    // log(`${key}: ${student[key]}`) will not work as in normal JS
    log(`${key}: ${student[key]}`);
}
;
// v2     ///NB: ==>>V1 AND V2 produced the same results
Object.keys(student).map(key => {
    log(`${key}: ${student[key]}`);
});
//v3: Improved v1 & V2, using functions instead
let logSTudentDetails = (student, key) => {
    log(`Student ${key}: ${student[key]}`);
};
// let write = document.write
// write("Hello world in TypeScript!")
logSTudentDetails(student, "name");
let newIncome = {
    salary: 18000,
    bonus: 10000,
    sidehustle: 5000
};
for (let key in newIncome) {
    log(`${key}: ${newIncome[key]}`);
}
;
class StoreObj {
    constructor(name) {
        this.name = name;
        this.name = name;
    }
    get nameObj() {
        return this.name;
    }
    set nameObj(name) {
        this.name = name;
    }
    static getName() {
        return "Hello world";
    }
}
let newName = new StoreObj("Job");
newName.nameObj = "Dave";
log(newName.nameObj);
log(StoreObj.getName());
