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

for(var i=1; i<=3; i++){
    // console.log("Lily ".repeat(i));
 } 
 //or

 let n = 5;
 let string = "";
 for (let i = 1; i <= n; i++) {
   for (let j = 0; j < i; j++) {
     string += "*";
   }
   string += "\n";
 }
 console.log(string);