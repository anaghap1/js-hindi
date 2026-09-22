// singleton object

// object literals
const mySym = Symbol("key1")

const JsUser ={
    name: "John",
    age: 30,
    [mySym]: "mykey1",
    email: "john@example",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Friday"],
    score: [1,2,3,4,5],
    address: {
        street: "123 Main St",
        city: "New York",
        country: "USA"
    }

}
// console.log(JsUser.email)
// console.log(JsUser["name"])
// console.log(JsUser.lastLoginDays[0])
// console.log(JsUser["address"]["city"])
// console.log(JsUser[mySym])

JsUser.email = "anagha@gmail.com"
// Object.freeze(JsUser) // freezing the object to prevent any changes
JsUser.email = "anagha@google.com"

// console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello there!")
}
JsUser.greeting2 = function(){
    console.log(`Hello there ${this.name}`)
}
console.log(JsUser.greeting())
console.log(JsUser.greeting2())