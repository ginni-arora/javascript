//primitive 
//7 types
//string, number, boolean, null, undefined, symbol(kisi value ko unique bnane ke liye ), bigint 

//javascript is a dynamically typed language we dont have to specify the datatype of variable while declaring it
//we can change the datatype of variable at any time

const score = 34
const scorevalue = 34.4
//to js m kuch float datatyoe nhi hote numbers numbers hote h thats it 
const isLoggedIn = false
const outsidetemp = null //which means 0 nhi h lekin koi value nhi h



let username;


const id = Symbol("123")
const id2 = Symbol("123")

const bignumber = 123454783109201294830403950n
//n lgane se ye big int ban jata h

console.log(id===id2)
//to isme undefined value hoga because humne koi value assign nhi ki h isme
//referenc type which is non primitive type
//arrays, objects , functions 

//arrays 
const fruits = ["apple", "banana", "grapes"]
//objects 
let myobj = {
    name : "ginni",
    age : 22,
    city : "panipat"
}

//functions
const myfunc = function(){
    console.log("hello world")
}

console.group(typeof bignumber)


