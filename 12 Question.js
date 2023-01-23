// 12. Create a human readable time format using the Date time object
//     - YYYY - MM - DD HH: mm
//         - DD - MM - YYYY HH: mm
//             - DD / MM / YYYY HH: mm


// ToDateString

let now = new Date()
// let res = now.toDateString()
// console.log(res)


let result =(now.getDate()+"-"+now.getMonth()+1+"-"+now.getFullYear()+" " + now.getHours())+": "+ now.getMinutes()
console.log(result)


let res =(now.getDate()+"/"+now.getMonth()+1+"/"+now.getFullYear()+" " + now.getHours())+":"+ now.getMinutes()
console.log(res)











