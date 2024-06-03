//conversion in js handle with number
let x = true;
console.log(Number(x)); // 1


// boolean convertion
console.log(Boolean("")); //false
console.log(Boolean(" ")); //true
console.log(Boolean("false")); //true
console.log(Boolean("0")); //true

// manipulating function as well
let f1  = function(){
    return 4
}
f1.count =1
console.log(f1.count);