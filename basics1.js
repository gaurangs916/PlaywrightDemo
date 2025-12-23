//to iterate elements in arrays or to print all elements of array.

const { console } = require("inspector");

var marks=[12,20,40,35,14,37,100];
for(let i=0; i<marks.length; i++)
{
console.log(marks[i]);
}


//to cal sum of elements in arrays

var marks1=[12,20,40,35,14,37,100];
var sum=0;
for(let i=0; i<marks.length; i++)
{
sum= sum + marks1[i];
}
console.log(sum);

console.log('********************');
// reduce method

let total = marks.reduce((sum,mark)=>sum+mark,0)
console.log(total);

let total1 = marks.reduce((sum,mark)=>sum*mark,1) // 1 is where to start from, sum value gets stored everytime , mark[i] that we do in for loop, same here it does with help of reduce method. 
console.log(total1);


// create a new array with even & odd numbers of score array
var score = [12,13,14,15,16,17,18];
var evenScore = [];
var oddScore = [];
for(let i=0; i<score.length; i++)
{
  if (score[i] %2 ==0)
  {
    evenScore.push(score[i])
  }
  else  
     oddScore.push(score[i]);

}
console.log(evenScore);
console.log(oddScore);

// using FILTER METHOD

let filterEvenScore = score.filter(score=>score%2==0);
console.log(filterEvenScore);

// using MAP METHOD

let mappedArray = filterEvenScore.map(score=>score*3);
console.log(mappedArray);

// SORT Strings in array it will do it in ascending order
console.log("Running the file...");
var fruits = ["banana", "mango", "apple", "pineapple"];
console.log(fruits.sort());
// sort method will only sort strings, & it will not sort numbers.
// to reverse the order use .reverse method() it will do it in descending order.
console.log(fruits.reverse());
// sort numbers in array 

var score = [12,3,14,19,16];
score.sort(function(a,b){
  return a-b
})
console.log(score);

// or

console.log(score.sort((a,b)=> a-b))

