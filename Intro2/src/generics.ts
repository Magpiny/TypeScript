//Generics
// Used to build custom components

function getArray<Type>(items: Type[]):Type[]{
    return new Array().concat(items)
};

let numArray = getArray<number>([1,2,4]);
let stringArray = getArray<string>(['hello', 'world']);


// Structural type system: duck typing

// The point variable is never declared to be a Point type. However, TypeScript compares the
//  shape of point to the shape of Point in the type-check. They have the same shape, so the code
//   passes.

// The shape-matching only requires a subset of the object’s fields to match.
interface Point {
  x: number;
  y: number;
}
 
function logPoint(p: Point) {
  console.log(`${p.x}, ${p.y}`);
}

 
// logs "12, 26"
const point = { x: 12, y: 26 };
logPoint(point);

////// Generics 2.0
interface HasID{
  id: number
}

const process = <T extends HasID>(PID: T):T =>{
  //return PID
  return PID
}
