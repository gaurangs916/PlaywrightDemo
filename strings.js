let day = 'tuesday ';
console.log(day.length);

let sliceDay = day.slice(0,4);  // slice is used to get substring from string
console.log(sliceDay);

let splitDay = day.split('s'); // split is used to break a string to 2 strings
console.log(splitDay);

console.log(splitDay[1]);
console.log(splitDay[1].length);
console.log(splitDay[1].trim().length); // trim is used to trim white spaces from start & end.

let date ='23';
let newDate = '27';
console.log(parseInt(date)); // parseint converts strings to integer
console.log(date.toString()); // toString converts integer to string.

let newQuote= day + "is funday"; // + is used to concatinate 2 strings.
console.log(newQuote);

let expenses = [10,20,30,40,50];
let sum = 0;
for(let i=0; i<expenses.length; i++)
{
  sum = sum + expenses[i];
}
console.log("total sum of expenses is: ",  sum);

// let highest = Math.max(...expenses); // using JavaScript’s built-in Math.max()
// let lowest = Math.min(...expenses); // using JavaScript’s built-in Math.min()
// console.log("Highest expense:", highest);
// console.log("Lowest expense:", lowest);

// or using for loop
  let highest = expenses[0];
  let lowest = expenses[0];
  for(let i=1; i<expenses.length; i++)
  {
    if(expenses[i]> highest)
    {
      highest= expenses[i];
    }
    if (expenses[i]< lowest)
    {
      lowest = expenses[i];
    }
  }
  console.log("Highest expense:", highest);
console.log("Lowest expense:", lowest);

/////////

// Create an array named studentNames with the names of your students.

// Add a new student name to the beginning of the array.

// Remove the last student name from the array.

// Alphabetize the student names within the array.

let studentNames = ['Gaurang','Trishta','Girl','Boy'];
studentNames.unshift('Abc'); // Add a new student name to the beginning of the array.
console.log(studentNames); 
studentNames.pop(); // Remove the last student name from the array.
console.log(studentNames);
console.log(studentNames.sort()); // Alphabetize / sort the student names within the array.