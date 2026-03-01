
// 1. Array reference behavior
let a=[1,2,3,4,5]
let b=a

// Arrays are reference types.
// Assigning 'b = a' copies the reference, not the value.
// Mutating 'b' also affects 'a'.

b.push(10)
console.log("a:",a)
console.log("b:",b)


// 2. Object reference behavior

let c={
    name:"ashif",
    age:21,
    place:"kochi"

}

let d=c

d.name="hello wold"
console.log("c:", c)
console.log("d:", d)

// 3. Shallow copy using spread

// Direct assignment copies reference.
// Spread operator creates a shallow copy.
// Shallow copy does NOT clone nested objects.


// Nested object example (spread is shallow copy)

let user = {
  name: "ashif",
  address: { city: "kochi" }
}

let copy = { ...user }

copy.address.city = "delhi"

console.log("user:", user)
console.log("copy:", copy)

// Spread performs shallow copy.
// Nested objects are still shared by reference.
