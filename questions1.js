const students = [{name:"Alice", score:25}, 
  {name:"Bob", score:55}, 
  {name:"Charlie", score:65},
  {name:"David", score:35},
  {name:"Eve", score:75}
]
const passedStudents = students.filter(student => student.score>36);
console.log(passedStudents);

const upperCaseNames = passedStudents.map(student=> student.name.toUpperCase()); // map method- wherever you see student name we r changing to uppercase. // [ 'BOB', 'CHARLIE', 'EVE' ]
console.log(upperCaseNames);

const totalScore = passedStudents.reduce(function(acc,student){
 acc= acc + student.score;
 return acc;
},0)
console.log(totalScore); //195
