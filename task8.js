// 8.	Задача:
//     Написать метод, который принимает массив строк в качестве параметра и выводит
//     в консоль слово с наибольшим количеством букв. Если таких слов несколько - выводит их все

function longestWords(arr) {
 const res = [];
 let maxLength = 0;
  arr.sort((a, b) => b.length - a.length)
    maxLength = arr[0].length;
    console.log(maxLength)
     for (let i = 0; i < arr.length; i++) {

         if(arr[i].length === maxLength) {
            res.push(arr[i]);
             console.log(res)
      }
     }
return res.join(' ');
    }
console.log(longestWords([ 'I', 'am', 'learning', 'Javascript', 'javascript', 'javascript']))



// function longestWords(arr) {
//    const res = [];
//    let newArr = arr.join('').split(' ').sort((a, b) => b.length - a.length)
//    let  maxLength = newArr[0].length;
//        for (let i = 0; i < newArr.length; i++) {
//            if(newArr[i].length === maxLength) {
//               res.push(newArr[i]);
//            }
//        }
//        return res.join(' ');
// }
// console.log(longestWords([ "I am learning Javascript Javascript javascript"]));