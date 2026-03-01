let a=100
let b=a

/**  premitive data type only change the variable in b not change in a 
 *  primitve data types are number,boolean,undefine,null
*/
b=200


console.log("a:",a)
console.log("b:",b)


// non primitive data type

let obj1= {value:100}

let obj2=obj1

obj2.value=200


console.log("obj1:",obj1.value);
console.log("obj2:",obj2.value);
