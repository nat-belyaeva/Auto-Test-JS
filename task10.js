//10.	Задача:
// Написать метод, который принимает массив чисел в качестве параметра и возвращает массив только с чётными числами
// Например,
// Исходный массив – [2, 4, 5, 7, 8]
// Результат - [2, 4, 8]

function evenNumber(arr) {
   let res = arr.filter((el => el % 2 === 0));
    return res;
}

console.log(evenNumber([2, 4, 5, 7, 8]));