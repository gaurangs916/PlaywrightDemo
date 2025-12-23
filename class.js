class Student{ 
//  setDetails()   //methods
//  {
//   this.sid=1;   
//   this.sname='Gaurang';
//   this.age=31;
//  }
  //or
 setDetails(id,name,age1) // directly pass as arguments instead of hardcoding. 
 {
  this.sid=id;    //id becomes variable of method & this.sid is variable of class
  this.sname=name;
  this.age=age1;
 }

 display()
 {
  console.log(this.sid,this.sname,this.age)
 }
}

let stu = new Student; // creating object of class via stu.
stu.setDetails(1, 'Gaurang', 3); //setDetails() — so the properties (sid, sname, age) will be assigned to the object.
stu.display(); //1 Gaurang 3