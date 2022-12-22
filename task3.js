//3.	Продемонстрировать работу циклов for…of, for…in, for, while

 // ================ for =================
console.log('============== for loop ===============')
// reverse without extra array/ reverse "на месте"

const arr = [11, 12, 13, 14, 15];
for (let i = 0; i < arr.length / 2; i++) {
  let temp = arr[i];
  arr[i] = arr[arr.length - 1 - i];
  arr[arr.length - 1 - i] = temp;
}
console.log(arr); // [15, 14, 13, 12, 11]

// =============== while ===================
console.log('=============== while ===================')

//https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/train/javascript

/* Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
    The output should be two capital letters with a dot separating them.
    It should look like this:
                          Sam Harris => S.H
                          patrick feeney => P.F*/

function abbrevName(name){
    let firstLetter = name[0];
    let secondLetter;
    let dot = ".";
    let i = 0;
    while (i < name.length){

        if (name[i] === " ") {
            secondLetter = name[i + 1];
            return (firstLetter + dot + secondLetter).toUpperCase();
        }
        i++;
    }
}

console.log(abbrevName("Sam Harris"));
console.log(abbrevName("Patrick Feenan"));
console.log(abbrevName("Evan Cole"));
console.log(abbrevName("P Favuzzi"));
console.log(abbrevName("David Mendieta"));

//========================== for…of ====================
console.log('=============== for of ===================')

/* You will be given an array of objects (associative arrays in PHP, tables in COBOL) representing data about developers
   who have signed up to attend the next coding meetup that you are organising. Your task is to return an array where
    each object will have a new property 'greeting' with the following string value:

       Hi < firstName here >, what do you like the most about < language here >? */

// в массиве:

const list = [
    { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
    { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
];
function greetDevelopers(list) {

    for(let i in list){
        list[i].greeting = `Hi ${list[i].firstName}, what do you like the most about ${list[i].language}?`
    }
    return list;
}
console.log(greetDevelopers(list));

//========================== for…in ====================
console.log('=============== for in ===================')

//i as element of arr not index

const arr1 = [15, 14, 13, 12, 11]
for(let i of arr1){
  console.log(i); //15, 14, 13, 12, 11
}




