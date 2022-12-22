//2.	Продемонстрировать работу if…else

// https://www.codewars.com/kata/58e0bd6a79716b7fcf0013b1/train/javascript

/*Create a function that takes in the sum and age difference of two people, calculates their individual ages,
 and returns a pair of values (oldest age first) if those exist or null/None if:
 sum < 0
 difference < 0
 Either of the calculated ages come out to be negative*/

function getAges(sum,difference){

    const youngest = (sum - difference) / 2 ;
    const  oldest = sum - youngest;


    if ( sum > 0 && difference > 0 && youngest >= 0 && oldest >= 0 || youngest == oldest) {
        return [oldest,youngest];

    } else {
        return null;
    }

};

console.log('================= task2.1 ===================')
console.log(getAges(24,4));
console.log(getAges(63,-14));

//https://www.codewars.com/kata/55afed09237df73343000042/train/javascript

function finalGrade (exam, projects) {
    let finalGrade;
    if (exam > 90 && exam <= 100 || projects > 10) {
        finalGrade = 100;
    }else if (exam > 75 && projects >=5) {
        finalGrade = 90;
    }else if (exam > 50 && projects >=2) {
        finalGrade = 75;
    }else {
        finalGrade = 0;
    } return finalGrade;
}

console.log('================= task2.2 ===================')
console.log(finalGrade(100, 12));
console.log(finalGrade(85, 5));
console.log(finalGrade(55, 0));

