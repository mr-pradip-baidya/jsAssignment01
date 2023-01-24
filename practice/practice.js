

// let students = {
//     name : 'rp',
//     lastName : 'yadab',
//     age: 25,
//     fullName : function (){
//         return this.name+" "+this.lastName+" "+this.age
//     }
// }
// let teacher = {
//     name : 'anil',
//     lastName : 'panchal',
//     birth:2000,
//     fullName : function (){
//         return this.name+" "+this.lastName
//     },
//    getAge : function(){
//     let age = (new Date().getFullYear())-(this.birth)
//     return age
//    }
// }



// console.log(teacher.getAge())
// // console.log(teacher.fullName())



// Prototype and inheritance

let myHeros = ['thor', 'spiderman'];
let dcHeros = ['batman','black adam','superman'];

let heroPower = {
    thor : "hammer",
    spiderman : "sling",
    getSpiderPower : function (){
        // console.log(`The spidy power is ${this.spidermanj}`)
    }
}

Object.prototype.messi = function(){
    // console.log(`messi is present in all object`)
} 

Object.prototype.hitesh = function(){
    // console.log(`this is dcHero property ${dcHeros}`)
}

myHeros.messi()
heroPower.hitesh()  

const user = {
    name : "top name",
    gmail : "topusername@.gmail.com",
};

 const teacher = {
    makeVideos : true
 };

 const teachingSupport ={
    isAvailable : false
 }

 const TSAssistant = {
    makeassignment : "js assignment",
    fulltime : true,
    __proto__ : teachingSupport
 }
   teacher.__proto__ = user  //using prototype this is older process

   //mordern syntax

//    for binding two properties

//    Object.setPrototypeOf(teacher,user)


   // goal is get true length of strings


//    String.prototype.truelength = function(){
//     console.log(`This true length is : ${this.trim().length}`)
//    };
//    let myName = "pradip   ";

//date

var date = Date()
console.log(date)





