
// function add(a,b){  // add is name of function.
//   return a+b;
// }
// let sum=add(2,3);
// console.log(sum); //5

// //Anonymous functions are those which do not have name to the function & we can store it directly in a variable

// let sumof = function(c,d){
//   return c+d;
// }
// console.log(sumof(5,10)); //15

// // or

// let sumofNum=(e,f)=>(e+f);
// console.log(sumofNum(500,10)); //510

// let productPrices = [10,20,30,40,50,60,70];
// let affordableProducts = productPrices.filter(price=>price < 50);
// console.log(affordableProducts);

// let discountedPrices = productPrices.map(price=>price- (price * 0.10));
// console.log(discountedPrices);

// var sum=0;
// let totalCost = affordableProducts.reduce((sum,price)=> sum+price, 0);
// console.log("Total cost:", totalCost);


const person ={
  name:"Gaurang",
  age: 31,
  greet : function()
  {
    console.log("Welcome " + this.name);
  }
}
person.name;
person.greet();


const greet = function(name){
  return " hello I am " + name;
}
console.log(greet("Gaurang"));

let table = ["a", "b", "c", 1,2,3]
for(let i=0; i<table.length; i++){
  console.log(table[i]);
}