
// 04. Declare a varibale and assign string value to it and check if the string contains a word Script using includes() method.

let text = "Hello world, welcome to the universe.";
let result = text.includes("Hello")

// console.log(result);

// [1, 2, 3].includes(2); // true
// [1, 2, 3].includes(4); // false
// [1, 2, 3].includes(3, 3); // false
// [1, 2, 3].includes(3, -1); // true
// [1, 2, NaN].includes(NaN); // true
// ["1", "2", "3"].includes(3); // false

let x1 = [1,2,3,4,5,6,7,8,9,0,"shreekrishna is goddes's GOD", true,false,null,undefined];
let result1 = x1.includes(false)
// console.log(result1)

let x2 = [1, 2, 3];
let result2 = x2.includes(3,-3)
console.log(result2)


