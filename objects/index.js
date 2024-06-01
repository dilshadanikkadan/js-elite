// dealing with objects
let user = {};
//setting
user["player"] = "dilshad";
console.log(user["player"]); //dilshad

// delete
delete user["likes birds"];

// these properties are all right
let obj = {
  for: 1,
  let: 2,
  return: 3,
};

console.log(obj.for + obj.let + obj.return);

// trying to access with porperty
let objj = {};
objj.__proto__ = 5;
console.log(obj.__proto__); // stil not getting

// we cah check prop exist in obj
let me = { name: "John", age: 30 };

console.log('agee' in me); // false
console.log('age' in me); // true

//why ?
let user1 ={name:"dilu"};
let mine = user1;
mine.name = "dilshad";
console.log("after update",user1.name); // dilshad

// becuase the suppose user1 "refernce :"#123"  is copying  not the obj itself
// so when we access it will look up with ref both obj have to ref to with same name

// can we clone without ref ?
let object ={
    name:"messi"
}

let clone ={};
// cloning through iteration
for (let key in object) {
    clone[key] = object[key]
}
clone.name="neymar";
console.log(clone.name); // neymar

// object asign what will do ?
let test ={name:"test"}
let copyAttr = {drag:true};
let copyAttr2 = {isOpen:true};
// copied the copyAttr copyAttr2 to tes obj
let moc = Object.assign(test,copyAttr,copyAttr2)


//nested clone issue 
let _one = {
    y:10,
    nest:{
        x:99
    }
}

let _second= Object.assign({},_one);
_second.nest.x= 100
console.log(_one.nest.x);  // 100

// we can fiz with that
let _user = {
    name: "dilshad",
    sizes: {
      height: 182,
      width: 50
    }
  };

  let _clone = structuredClone(_user);
  _clone.sizes.height=999;
  console.log(_user.sizes.height); // 182
  //The structuredClone method can clone most data types, such as objects, arrays, primitive values.
  

  /// grabage collection
  //The basic garbage collection algorithm is called “mark-and-sweep”.


  // symbols in js uniquie identifier
  let id1 = Symbol("id");
let id2 = Symbol("id");

console.log(id1 == id2); // false

let user = { // belongs to another code
    name: "John"
  };
  
  let id = Symbol("id");
  
  user[id] = 1;