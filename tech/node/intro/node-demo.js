let name;
name = "Allan";

let greeting = "Hej ";

for (let i = 0; i < 5; i++) {
  let separator = '';
  if(i < 3) {
    separator = ', ';

  } else if( i < 4){
    separator = ' og ';
  }
  greeting += name + separator;
}

console.log(greeting);

let a = 5;
let b = 3;

let result = a * b;
console.log(a + " gange " + b + " giver " + result);

if (result > 5) {
  console.log("Det var et stort tal");
} else {
  console.log("Ok tak");
}

console.log("Program afslutter");

// this is a comment
/*
This
is 
a 
multiline
comment
*/
