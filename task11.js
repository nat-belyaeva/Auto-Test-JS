//11.	Задача:
// Написать метод, который принимает строку в качестве параметра и возвращает ту же строку, но все пробелы заменяет на нижнее подчёркивание.
// Например,
// Исходная строка – “Я люблю Javascript”
// Результат – “Я_люблю_Javascript”
function replaceSpaces(str) {
    let res = str.replace(/ /g, '_');
    return res;
}

console.log(replaceSpaces("Я люблю Javascript!!! И хочу на курс!):"));

