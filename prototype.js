//FUNCTIONS

// function student()
// {
//   this.name="john";
//   this.gender="male";
// }
// student.prototype.age=35; 
// stu=new student();
// console.log(stu.age);
// stu1=new student();
// console.log(stu1.age);

// CLASS
class Employee
{
  constructor(id,name)
  {
    this.eid=id;
    this.ename=name;
  }
}

Employee.prototype.sal=5000;

// emp=new Employee(1,'jany');
// console.log(emp.ename,emp.eid,emp.sal);

// emp1=new Employee(2, 'dannyyy');
// console.log(emp1.ename,emp1.eid,emp1.sal);

//we can also add methods/ functions to the class

Employee.prototype.display=function()
{
  console.log(this.eid,this.ename,this.sal);
}
emp=new Employee(1,'jany');
emp.display();

emp1=new Employee(2, 'dannyyy');
emp1.display();