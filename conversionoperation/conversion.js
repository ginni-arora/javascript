//let score = 34
//let score ="34"
//let score = "34abc"
//let score = null
//let score = undefined
let score = true
console.log(typeof score)
console.log(typeof (score))
let valueinNumber = Number(score)
console.log(typeof valueinNumber)
console.log(valueinNumber)
//"33" convert 33 
//33abc = NaN = not a number 
//true = 1 , false = 0
//let loggedin = 1
//let loggedin = 0
//let loggedin = ""
let loggedin = "ginni"




let booleanloggedin = Boolean(loggedin)
console.log(booleanloggedin)
// 1 dala true aya - 0 dalaa to false aya 
// empty string dala to 0 aya 
// string m value dali to true aya 

let somenumber = 34
let stringnumber = String(somenumber)
console.log(stringnumber)
console.log(typeof stringnumber)


////operations 
let value = 4
let negvalue = -value
console.log(negvalue)
console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2/3)
console.log(2**3)// 2 tp the power 3
console.log(2%3)
// simple very basic operations
// how to add strings
let st1 ="helo"
let st2 = " ginni"
let st3 = st1+ st2
console.log(st3)
//some complex conversions
console.log("1" + 2)// 12
console.log("1" + 2 +2 ) //122
console.log(2+2+ "1") // 41
// the reason is in documentation when we first add string it trets it as a string 
//when  the string is in last then it follows the other calculatiins like 41 example
console.log((3+4)* 5 % 2)

//so we should write our code in parenthesis if we are doing this type of calculations

console.log(+true) //1 ans but we dont need to write this 
console.log(+"") //0 but this is tricky and we should avoid this 

//avoid writing this type of code ex 
let num1, num2, num3
num1 = num2 = num3 = 2+2
console.log(num1, num2, num3)
// we should make the code readable not like this

let gamecount = 150 
//gamecount++ post increment apply krne se pehle value print hogi
++gamecount//preincrement apply krne se pehle value badh jayegi
console.log(gamecount)