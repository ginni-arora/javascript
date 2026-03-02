// console.log(2>1)
// console.log(2>=1)
// console.log(2<1)
// console.log(2<=1)
// console.log(2==1)
// console.log(2!=1)

// console.log("2">1)
// console.log("02" >1)
// we get the ans but its kind of predictable but its not a good practice to compare string with number

//thats why we use typescript in big projects to avoid this type of issues

// console.log(null > 0)
// console.log(null ==0)
// console.log(null>=0)
// console.log(null == undefined)

//the ans we get is not predicatable as we want 
//because the reason is an equality check == and comparisons ><>= <= work differently compariosns convert null to an number treated as 0 thats why null>=0 is true and null>0 is false but in equality check null is only equal to undefined and not equal to any other value even 0 thats why null==0 is false


console.log(undefined ==0)
console.log(undefined >0)
console.log(undefined<0)
console.log(undefined==null)
console.log(undefined>=0)
console.log(undefined<=0)

//now strict check 
// ===
//ab isme kya krega datatype bhi check krega 
console.log("2" === 2)