// 28. Write a program to print the given patterns using the loops-
// 	a. Print a triangle pattern, if the given input is 3 then the pattern should be similar to the given output
// 	   *
// 	   **
// 	   ***

// 	b. Print a square pattern, if the input is 3 then the output should be similar to the given output
// 	   ***
// 	   ***
// 	   ***

// 	c. Print a pyramid pattern, if the input is 3 then the output should be similar to the given output
// 	     *
// 	    ***
//     *****




// (a)

// for (var i = 1; i <= 3; i++) {
//   // console.log("* ".repeat(i));
// }
 //or

// function RectangleStar(){
  
  // for(let r=0; r<5; r++){ // Row
  //   for(let j1=0; j1<r; j1++){
  //     process.stdout.write("*")
  //   }
  //   console.log("*")
  //  }


//   for(let k=5; k>0; k--){ // Row
//     for(let l=k; l>0; l--){
//       process.stdout.write("*")
//     }
//     console.log("*")
//   }
// }
// RectangleStar()


// function squareStar(){
//   for(i=0 ; i<=5; i++){
//     for(let j=0; j<=5; j++){
//       process.stdout.write("*")
//     }
//     console.log("*")
//   }
// }
// squareStar()



function pyramid(){
  let n = 5
 //Outer loop 
  for(let i = 0; i<=n; i++){
  // for spaceing   
    for(let j = 0; j<=n-i; j++){
      process.stdout.write(` `)
    }
//printing star
    for(let k=0; k<2*i-1; k++){ 
      process.stdout.write(`*`)
    }
    console.log()
  }
}
pyramid()