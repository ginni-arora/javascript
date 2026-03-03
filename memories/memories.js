// we have 2 types of memories - 
// stack and heap memory 
//stack memory is used to store primitive data types and heap memory is used to store non primitive data types

// jab hum stack m store krte h to hume ek copy milti h 
// or jab hum heao m store krte h to hume reference milta h


let a = 10
let b = a //copy of a is stored in b
b =5 
console.log(a) //10
console.log(b) //5

let user1 = {
    name: "ginni",
    age: 22
}
let user2 = user1 //reference of user1 is stored in user2

user2.name="ginni arora"
console.log(user1.name) //ginni arora
![](memories.j\dd38764d-aefc-cf86-6180-300fceb07b8e.svg)