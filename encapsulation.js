class Student{
  constructor()
  {
    let name, marks;
  }
  getName()
  {
    return this.name;
  }

  setName(n)
  {
   this.name=n;
  }

  getMarks()
  {
    return this.marks;
  }

    setMarks(m)
  {
   this.marks=m;
  }  

}
  let stu = new Student();
  stu.setName("john");
 stu.setMarks(50);
 console.log(stu.getName(), stu.getMarks());