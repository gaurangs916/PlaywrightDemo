import {test} from '@playwright/test';

let input="i am a tester";
let reverse=""

for(let i=input.length-1;i>=0;i--)
{
  reverse+=input[i]
}

console.log(reverse);


