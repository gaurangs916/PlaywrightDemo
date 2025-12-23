class test{
  static a=100;
  b=10;
  static method1()
  {
    console.log("This is static method");
  }
  method2()
  {
    console.log("This is non static method");
  }
}
console.log(test.a); //100
//console.log(test.b); // undefined, cannot call nonstatic variable without creating obj.
test.method1();  //This is static method
//test.method2(); //cannot call nonstatic method without creating obj.
let t= new test; // method created, & now we can call non-static var & method.
console.log(t.b); //10
t.method2(); //This is non static method
