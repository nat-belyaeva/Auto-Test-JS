/*8.	Задача:
    Написать метод, который принимает массив строк в качестве параметра и выводит
    в консоль слово с наибольшим количеством букв. Если таких слов несколько - выводит их все */

function findBigWords(arr) {
let res = arr.filter(el => {
    return el.length === Math.max(...arr.map(el => el.length))
   })
    return res
    }
console.log(findBigWords([ 'I', 'am', 'learning', 'Javascript', 'javascript', 'javascript']));