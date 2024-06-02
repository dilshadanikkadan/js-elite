let now = new Date();
console.log(now);

// the hour in UTC+0 time zone
console.log(now.getUTCHours());

// lets look another fun
let date = new Date(2015, 12, 30);
date.setDate(date.getDate()+2)
console.log(date );//2016-01-31T18:30:00.000Z


let _date = new Date(2016, 0, 2); 
_date.setDate(1);
console.log(_date);

// we can also measure the time well
let start = new Date(); // start measuring time

// do the job
for (let i = 0; i < 100000; i++) {
  let doSomething = i * i * i;
}

let end = new Date(); // end measuring time

console.log(`The loop took ${end - start} ms`);


// date now;
let date_  = Date.now();
// do the job
for (let i = 0; i < 100000; i++) {
    let doSomething = i * i * i;
  }
  
  let end_ = Date.now(); // done
  
console.log(`The loop took ${end_ - date_} ms` );