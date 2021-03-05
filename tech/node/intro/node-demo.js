// this is a comment
/*
This
is 
a 
multiline
comment
*/

// Erklæring af variabel
let name;
// Tildering af variable
name = "Allan";

// Erklæring og tildeling på samme linje
let greeting = "Hej ";

// Iteration med for-løkke
for (let i = 0; i < 5; i++) {
  let separator = '';
  if (i < 3) {
    separator = ', ';

  } else if (i < 4) {
    separator = ' og ';
  }
  greeting += name + separator;
}

// Udskrift til konsol
console.log(greeting);

// Matematiske beregninger
let a = 5;
let b = 3;
let number = a * b;
console.log(a + " gange " + b + " giver " + number);

// Betingelser og forgreninger
if (number > 5) {
  console.log("Det var et stort tal");
} else {
  console.log("Ok tak");
}

// Definition af egne funktioner
function myAdd(a, b) {
  return a + b;
}

result = myAdd(number, 34);
console.log(result);

// Brug af biblioteks funktion
let root = Math.sqrt(result);

console.log(root);

console.log("Program afslutter");
