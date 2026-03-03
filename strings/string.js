const name = "ginni"
const repocount = 40
console.log(name + repocount + "value ")

// but you should not write like this for concatenate syntax is not good for this


console.log(`my name is ${name} and my repo count is ${repocount}`)
const name1 = new String("gin-ni-arora")
console.log(name1[1])
console.log(name1.__proto__)
console.log(name1.length)
console.log(name1.toUpperCase())
console.log(name1.charAt(1))
console.log(name1.indexOf("n"))

const newstring = name1.substring(0,2)
console.log(newstring)


const anotherstring = name1.slice(-9, 4)
console.log(anotherstring)

const newstring2 = "   ginni    "
console.log(newstring2)
console.log(newstring2.trim())
const url = "https://www.google.com/20%search"

console.log(url.replace('20%' , "-"))
console.log(url.includes("arora"))

console.log(name1.split("-"))



