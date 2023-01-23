// 14.  Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript? Create a program which checks that the given number is even or odd.

let value = []
let value1 = []

 for (let i=0; i<=100; i++){
    if(i%2 == 0){
        value.push(i)
    }
    else{
        value1.push(i)
    }
    
}

console.log(value)
console.log(value1)



