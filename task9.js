/*9.	Задача:
    Написать метод, который принимает массив строк в качестве параметра и возвращает отфильтрованный массив,
    содержащий те же элементы, но без “гусей”.
    “Гуси” – массив строк, заранее предопределённый вами в коде.
    Например,
    “Гуси” – [‘London’, ‘Paris’, ‘Moscow’]
    Исходный массив – [‘Minsk’, ‘Moscow’, ‘Berlin’, ‘Toronto’, ‘Paris’, ‘Moscow’]
    Результат - [‘Minsk’, ‘Berlin’, ‘Toronto’]*/


function findGoose(arr) {
    let gooseArr = ['London', 'Paris', 'Moscow'];
    let res = arr.filter((el => !gooseArr.includes(el)));
    return res;
}
console.log(findGoose(['Minsk', 'Moscow', 'Berlin', 'Toronto', 'Paris', 'Moscow']));