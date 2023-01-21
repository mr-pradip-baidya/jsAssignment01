// 11. Use the Date object to do the following activities
//     - What is the year today?
//     - What is the month today as a number?
//     - What is the date today?
//     - What is the day today as a number?
//     - What is the hours now?
//     - What is the minutes now?
//     - Find out the numbers of seconds elapsed from January 1, 1970 to now.


// note : According my calculation time this all answer  I  gotted.

const yourDate = new Date()

let myYear = yourDate.getFullYear()
// console.log(myYear)  //expected 2023

let myMonth = yourDate.getMonth()
// console.log(myMonth) //Expected 0 (means January month is 0 ) 

let myDate1 = Date();
// console.log(myDate1) // Expected Sat Jan 21 2023 07:54:57 GMT+0530 (India Standard Time)

let myDate = yourDate.getDate()
// console.log(myDate) // expected 21 (get original date)

let myHourse = yourDate.getHours()
// console.log(myHourse); // Expected 8

let myMinute = yourDate.getMinutes()
// console.log(myMinute) // expected 8


let mySecond = yourDate.getSeconds()
// console.log(mySecond)

let fullSecond = new Date("January 1, 1970")


let mySecond1 = fullSecond.getSeconds()
    // console.log(mySecond1)


    //Problem
    