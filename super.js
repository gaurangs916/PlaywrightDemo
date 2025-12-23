class Animal
{
  constructor(col)
  {
    this.color=col
  }
  printColor()
  {
    console.log(this.color);
  }
}

class Dog extends Animal
{
  constructor(col, food)
  {
    super(col);
    this.food=food;
  }
  eating()
  {
    console.log("Eating:", this.food);
  }
  display()
  {
    this.printColor();
    this.eating();
  }
}
d=new Dog("black", "bread");
d.display();