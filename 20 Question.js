// 20. In the following shopping cart add, remove, edit items
//     => const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
//     - add 'Meat' in the beginning of your shopping cart if it has not been already added
//     - add Sugar at the end of your shopping cart if it has not been already added
//     - remove 'Honey'
//     - modify Tea to 'Green Tea'

//                   [ 'Meat', 'Milk', 'Coffee', 'Tea', 'Honey', 'Sugar' ]


const shoppingCart = ['Milk' ,'Coffee' ,'Tea', 'Honey'];

// console.log(shoppingCart.includes('Tea', 2)) // (value, Index No)

let res = (shoppingCart.unshift("Meat")) + (shoppingCart.push("Sugar")) + (shoppingCart.splice(4,1)) + (shoppingCart.splice(3,1,"Green Tea"))


console.log(shoppingCart)




