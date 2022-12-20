// 9.	Задача:
//     Написать метод, который принимает массив строк в качестве параметра и возвращает отфильтрованный массив,
//     содержащий те же элементы, но без “гусей”.
// “Гуси” – массив строк, заранее предопределённый вами в коде.
//     Например,
// “Гуси” – [‘London’, ‘Paris’, ‘Moscow’]
// Исходный массив – [‘Minsk’, ‘Moscow’, ‘Berlin’, ‘Toronto’, ‘Paris’, ‘Moscow’]
// Результат - [‘Minsk’, ‘Berlin’, ‘Toronto’]

// function goose(arr) {
//     const res = [];
//     let gooseArr = ['London', 'Paris', 'Moscow']
// // const result = arr.filter(el => arr.indexOf(el) !==);
// //arr2 = arr2.filter(e => !~arr.indexOf(e));
//
// arr = arr.filter((el => !~ gooseArr.indexOf(el)));
//     return arr
//
// }
//
// console.log(goose(['Minsk', 'Moscow', 'Berlin', 'Toronto', 'Paris', 'Moscow']));


function goose(arr) {
    const res = [];
    let gooseArr = ['London', 'Paris', 'Moscow']
     for(let i = 0; i < arr.length; i++) {
         if(gooseArr.indexOf(arr[i]) === -1) {
             res.push(arr[i])
         }
     }
        return res;
}
console.log(goose(['Minsk', 'Moscow', 'Berlin', 'Toronto', 'Paris', 'Moscow']));
