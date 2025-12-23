// function letexample()
// {
//   let x =1;
//   if(true)
//   { let x=2
//     console.log(x); // 2
// }
// console.log(x); //1
// }
// letexample();

// console.log("1");
// console.log("2");
// console.log("3");
// setTimeout(function()
// {
//   console.log("4");
// },2000);
// console.log("5");

function fetchData(callback)
{
  setTimeout(()=> {
  console.log("data fetched");
  const data="sample data";
  callback(data);

  } , 2000);
  //return data;
}

function processData(data)
{
  console.log("data processed", data);
}
fetchData(processData);