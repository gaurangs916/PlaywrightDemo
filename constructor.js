class Student{ 

 constructor(sid,sname,age) 
 {
  this.sid=sid;   
  this.sname=sname;
  this.age=age;
 }

 display()
 {
  console.log(this.sid,this.sname,this.age)
 }
}

let stu = new Student(1, 'Gaurang', 3); 
stu.display();
let stu1 = new Student(2, 'trishta', 30); 
stu1.display();
let stu2 = new Student(3, 'abc', 40); 
stu2.display();
let stu3 = new Student(4,'efg', 50); 
stu3.display();

class car{

  constructor(brand,model,year) {
  this.brand=brand;
  this.model=model;
  this.year=year;
  }
 
  carinfo()
  {
    console.log(this.brand,this.model,this.year)
  }
}
const info1 = new car("tata","2024","nexon");
info1.carinfo();