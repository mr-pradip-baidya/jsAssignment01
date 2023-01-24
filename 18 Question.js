// 18. Write a program which tells the number of days in a month, now consider leap year.

// let month = 10;

// if ((month == 1  ) ||(month == 3 ) || (month == 5) || (month == 7) || (month == 8) || (month == 10) || (month == 12)){
//     console.log(`This monts are : 31 days`)

// } else if(month == 2){
//     console.log(`This month is : 28 days`)


// }else {
//     console.log(`This all months are : 30 days`)

// };












// function leapYear(year){
//     if ( (year % 4 == 0 ) && ((year%100 !==0 )|| (year%400 == 0))){
//         return true;  
//     }else{
//         return false
//     }
// }
// let res = leapYear(2024)
// console.log(res)



function isLeapYear(year) {
    if ( ( year % 4 == 0 && year % 100 != 0 ) || (year % 400 == 0) ) { 
        console.log(`${year} is a leap year`); 
    } else {
        console.log(`${year} is not a leap year`); 
    }
}