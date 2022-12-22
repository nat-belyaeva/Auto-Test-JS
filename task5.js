// 5.	Продемонстрировать работу try…catch…finally
console.log('======================= correct =================== ');
function correct(string) {
    try {
        let arr = string.split(' ')
        console.log(arr)
    } catch (error) {
        console.log('Not active:', error)
    } finally {
        console.log('anyway will be executed')
    }
}
correct('1 2 3 4 5')
console.log('======================================================')

// correct (try + finally) synchronous code:
console.log('===================== incorrect =================== ');
function incorrect(string) {
    try {
        let arr = string.split(' ')
        console.log(arr)
    } catch (error) {
        console.log('Active catch:', error)
    } finally {
        console.log('anyway will be executed')
    }
}
incorrect([1,2,3,4,5])