
// 1. var is function-scoped

hello()
function hello(){
    var a=12
    var b= true
    if(b){
        console.log("var:",a);
    }
    
// var is function-scoped, not block-scoped.
// It is accessible anywhere inside the function.
    console.log('var:',a)
}

// 2. let is block-scoped
function test() {
    if(true) {
        let x = 10
        console.log("let", x)
    }

    // console.log("outside:", x) // ❌ ReferenceError
}

test()
/** let can't print out side the block  */

// 3. Hoisting behavior (var vs let)
// 4. Temporal Dead Zone explanation

// Hoisting example with var
console.log("var hoisting:", hoistedVar)
var hoistedVar = 5

// Hoisting example with let
try {
    console.log("let hoisting:", hoistedLet)
} catch (error) {
    console.log("Error:", error.message)
}

let hoistedLet = 10


// let and const are hoisted but remain in the Temporal Dead Zone (TDZ)
// until the line of initialization is executed.