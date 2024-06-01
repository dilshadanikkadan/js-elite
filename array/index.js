// deal with array leangth
let arr = [1, 2, 3, 4, 5];

arr.length = 2; // truncate to 2 elements
console.log(arr); // [1, 2]

// to check array is valid
let a =[];
console.log(Array.isArray(a)); // true


//   weak map and weak set why it is used for ?
//WeakMap is fundamentally different in this aspect. It doesn’t prevent garbage-collection of key objects.
// but how we can do that ? 
let dilu = { name: "dilu" };

let weakMap = new WeakMap();
weakMap.set(dilu, "...");

dilu = null; // overwrite the reference

// dilu is removed from memor
// if that normal map  it wont go 
