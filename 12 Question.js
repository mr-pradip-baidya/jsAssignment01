// 12. Create a human readable time format using the Date time object
//     - YYYY - MM - DD HH: mm
//         - DD - MM - YYYY HH: mm
//             - DD / MM / YYYY HH: mm


// let day = new Date("2023-01-22")
// let d1 = day.split("T")
// console.log(d1)


// let d = new Date().toLocaleDateString()
// console.log(d)


var new1 = (new Date()).toLocaleString().replace('T', ' ').split('.')

var new2 = (new Date()).toISOString().replace('T', ' ').split('.')
console.log(new1)
console.log(new2)