//4.	Продемонстрировать работу switch…case
//1 - 'Monday', 2 - 'Tuesday', 3 - 'Wednesday', 4 - 'Thursday', 5 - 'Friday', 6 - 'Saturday', 7 - 'Sunday'.
// Any other number - 'Wrong day'.
let numberOfDay = 7;
switch(numberOfDay) {
case 0:
    console.log('Sunday');
    break;
  case 1:
    console.log('Monday');
    break;
  case 2:
    console.log('Tuesday');
    break;
  case 3:
     console.log('Wednesday');
    break;
  case 4:
     console.log('Thursday');
    break;
  case 5:
     console.log('Friday');
    break;
  case 6:
    console.log('Saturday');
    break;
    case 7:
    console.log('Sunday');
    break;
  default:
   console.log('Wrong day');
 }

