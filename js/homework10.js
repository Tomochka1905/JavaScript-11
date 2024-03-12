//Task 1
console.log(durationBetweenDates('02 Aug 1985', '03 Aug 1985', 'seconds')); // поверне '86400 seconds'
console.log(durationBetweenDates('31 Jan 2022', '03 Feb 2021', 'days')); // поверне '362 days'

function durationBetweenDates(startDate, endDate, unit) {
  const start = new Date(startDate);
  const end = new Date(endDate);

   let result;


  let diff = Math.abs(start - end);
   switch (unit) {
    case 'seconds':
        diff = diff/1000;
        break;
    case 'minutes':
        diff = diff / 1000 /60;
        break;
    case 'hours':
        diff = diff /1000/60/60;
        break;
    case 'days':
        diff = diff /1000/60/60/24;
        break;
    default:
        throw new Error ('Invalid input');
   }
    return `${diff} ${unit}`;

}

//Task 2 
const userNames = ['Петро', 'Емма', 'Петро', 'Емма', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена', 'Емма'];
function filterUnique(array) {
return [...new Set(array)];
}
console.log(filterUnique(userNames)); // ['Петро', 'Емма', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена'];




