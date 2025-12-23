const { resolve } = require("path");

 // objects
 const person = {
  name: "Gaurang",  // name is property
  age:31,           // age is property
  greet: function()  // greet is property
  {
    console.log("Hello I am " + this.name);  // to access properties of object use this.
  }
 }

 person.greet()  //Hello I am Gaurang

 //Anonymous functions
 name="gaurangs";
 const greet = function(name){
  return "Hello world " + name; 
 }
console.log(greet(name)); // Hello world gaurangs

//var is function scoped or global scope, can be re-declared & updated.
//if you declare a variable without mentioning let,var or const, by default it will consider it as 'var'

function varexample()
{
  var x=1;
  if(true){
  x=2;
  console.log(x); // 2 
  }
   console.log(x); //  2 
}

varexample();

//let is block-scoped{}, can be updated, but not re-declared within same scope.

function letexample1() {
  let x=1;

  if(true){
  let x=2;
  y=6;           // bydefault it will consider it as var
  console.log(x); // 2 
  }
  x=4;          // it got updated.
   console.log(x); // 1
   console.log(y)  //6
}
letexample1();

// const is block-scoped{}, cannot be updated or redeclared.

function constexample() {
  const x=7;
  if(true) {
    const y=8;
    console.log(y) //8
  }
  //x= 10 // not possible as we cannot update or redeclare const.
      console.log(x) //7
}
constexample()

// splice method - u can delete anywhere from array
let marks=[12,20,40,35];
console.log(marks.splice(0,2)); // startIndex = 0 → start removing from index 0 & deleteCount = 2 → remove 2 elements // [ 12, 20 ]
console.log(marks); //[ 40, 35 ]

// JS Asynchronous program
// console.log("Hi I am 1 program");
// console.log("Hi I am 2 program");
// console.log("Hi I am 3 program");
// setTimeout(function(){
//   console.log("Hi I am 4 program");
// },2000); 
// console.log("Hi I am 5 program");

// here js will run 1,2,3,5 & 4 program, it won't get stuck on 4 program, rather it will go to next step execute that & come back & execute 4 program.

// Callback function
function fetchData(callback) {
  //fetchdata from server

  setTimeout(()=>{
    console.log('Data fetched');
    const data = "sample data";
    callback(data);

  },2000);
}

function processData(data)
{
 console.log('processing data', data);
}

function modifyData(data)
{
 console.log('modify data', data);
}
fetchData(processData);
fetchData(modifyData);

// promise
function fetchData(callback) {
  return new Promise((resolve)=> {
setTimeout(()=>
  {
    console.log('Data fetched');
    const data = "sample data";
    resolve(data);

  },2000);
});
}
fetchData().then(function(data){
   console.log('Processing:', data);
})
// or using await
 const data = await fetchData()
 console.log('Processing:', data);