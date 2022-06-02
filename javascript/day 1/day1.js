/*## day 1

your task today is to rewrite the code below so that it prints the information correctly, makes sense and without errors:

let numberOne = 1
let stringOne = '1'
let numberThirty = 30
let stringThirty = '30'
let numberTen = 10
let stringTen = '10'

if (compare numberOne and stringOne) {
   console.log('the variables numberOne and stringOne have the same value, but different types')
} else {
   console.log('the variables numberOne and stringOne do not have the same value')
}

if (compare the numberThirty and the stringThirty) {
   console.log('the variables numberThirty and stringThirty have the same value and type')
} else {
   console.log('the variables numberThirty and stringThirty do not have the same type')
}

if (compare the numberTen and the stringTen) {
   console.log('variables numberTen and stringTen have the same value, but different types')
} else {
   console.log('variables numberTen and stringTen do not have the same value')
} */

let numberOne = 1
let stringOne = '1'
let numberThirty = 30
let stringThirty = '30'
let numberTen = 10
let stringTen = '10'

if (numberOne === stringOne) {
   console.log('the variables numberOne and stringOne have the same value, but different types')
} else {
   console.log('the variables numberOne and stringOne do not have the same value')
}   

if (numberThirty === stringThirty) {
   console.log('the variables numberThirty and stringThirty have the same value and type')
} else {
   console.log('the variables numberThirty and stringThirty do not have the same type')
}

if (numberTen === stringTen) {
   console.log('variables numberTen and stringTen have the same value, but different types')
} else {
   console.log('variables numberTen and stringTen do not have the same value')
}