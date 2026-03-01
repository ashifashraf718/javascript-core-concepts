//Hoisting in function
sayHello()

function sayHello(){
    console.log("function");
    
}


// //Hoisitng in arrow function

try {
    greet()
} catch (err) {
    console.log("Arrow hoisting error:", err.message)
}

let greet = () => {
    console.log("Hello")
}




// Local var Shadowing

var x = 10

function test(){
    console.log("inside test:", x)
    var x = 20
}

console.log("global x:", x)
test()



//lexical scope 
var a = 5

function outer() {
    console.log(a)
}

function inner() {
    var a = 10
    outer()
}

inner()




//Function vs var Priority
console.log("before assignment:", a)

var a = 1

function a() {
    console.log("hello")
}

console.log("after assignment:", a)