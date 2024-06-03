//this context explore

let std1 = {
  title: "is good",
  students: ["dilshad", "messi", "neymar"],
  getStd() {
    this.students.forEach(function (student) {
      console.log(` ${student} ${this.title}`); 
      // why we cant access this.title ? 
      //because the excution occure inside getStd so thre is not tilte
    });
  },
};

std.getStd();
let std = {
    title: "is good",
    students: ["dilshad", "messi", "neymar"],
    getStd() {
      this.students.forEach( (student) =>{
        console.log(` ${student} ${this.title}`); 
    // sloved this  with arrow function  because arrow function dont  have this context
      });
    },
  };
  
  std.getStd();
  