// 07. Declare an array containing the multiple values and use lastIndexOf to determine the position of the first and last occurrence of a word "pw skills".

let input = [1,2,3,2,2,2,2,"pw skills",4,"pw skills","pw skills","pw skills",5]

let res1 = input.indexOf("pw skills") // string
console.log(res1)

let res2 = input.lastIndexOf("pw skills")
console.log(res2)

let res3 = input.indexOf(2) // numbers
console.log(res3)

let res4 = input.lastIndexOf(2)
console.log(res4)