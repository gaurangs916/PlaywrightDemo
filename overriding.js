class RBI{
  roi()
  {
    return 5;
  }
}
class AXIS extends RBI{ 
   roi()
  {
    return 11.2;
  }
}
class SBI extends RBI{ 
   roi()
  {
    return 9.2;
  }
}


axisobj=new AXIS;
console.log(axisobj.roi()); //11.2

sbiobj =new SBI; 
console.log(sbiobj.roi()); //9.2

