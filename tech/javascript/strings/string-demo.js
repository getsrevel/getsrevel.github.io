// Et eksempel på strengmanipulering

// console.log bruges til at udskrive indholdet af en variabel i konsollen

// lav en variabel med indholdet "post"
const strPost = "post";
console.log(strPost);

// lav en variable med indholdet "getsrevel"
const str = "getsrevel";
console.log(str);

// konverter indholdet af str til et array af "bogstaver"
const arr = str.split("");
console.log(arr);

// sorter arrayet i modsat rækkefølge
revArr = arr.reverse();

// konverter array tilbage til en streng
const rStr = revArr.join("")
console.log(rStr);

// indsæt indholdet af strPost variablen på position 5 i strengen
const insertIndex = 5;
const combinedStr = rStr.slice(0, insertIndex) + strPost + rStr.slice(insertIndex);

console.log(combinedStr);


// samme funktion men skrevet lidt kortere

const rStrTwo = str.split("").reverse().join("");
const start = 5; 
const combinedStr2 = rStrTwo.slice(0, start) + strPost + rStrTwo.slice(insertIndex);


// 2. Reverse a String With a Decrementing For Loop
function reverseString(str) {
    // Step 1. Opret en variable med en tom streng til at indeholde resultatet
    let newString = "";
 
    // Step 2. Lav en for løkke
    /* Løkken starter ved (str.length - 1) som er det sidste tegn i strengen.
     Iterationen fortsætter så længe i er større en 0, 
     og i tælles en ned efter hver iteration.
    */
    for (var i = str.length - 1; i >= 0; i--) { 
        newString += str[i];
    }
    /* Here hello's length equals 5
        For each iteration: i = str.length - 1 and newString = newString + str[i]
        First iteration:    i = 5 - 1 = 4,         newString = "" + "o" = "o"
        Second iteration:   i = 4 - 1 = 3,         newString = "o" + "l" = "ol"
        Third iteration:    i = 3 - 1 = 2,         newString = "ol" + "l" = "oll"
        Fourth iteration:   i = 2 - 1 = 1,         newString = "oll" + "e" = "olle"
        Fifth iteration:    i = 1 - 1 = 0,         newString = "olle" + "h" = "olleh"
    End of the FOR Loop*/
 
    // Step 3. Return the reversed string
    return newString; // "olleh"
}
 
reverseString('hello');