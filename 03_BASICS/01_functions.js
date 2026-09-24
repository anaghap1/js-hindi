function sayMyName() {
    console.log("Sameer")
}
sayMyName()

// function add(number1, number2){
//     console.log(number1+number2)
// }
// add(3,6)
function add(number1, number2){
//   let result = number1 + number2
//   return result
return number1+number2
}
 const result = add(3,6)
console.log("result:", result)

function loginUserMessage( username = "sam"){
    // if(!username === undefined){
         if(!username ){
        console.log("please enter username")

        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("anagh"))


function ana( val1, val2, ...a){
    if(a=== undefined){
        console.log("correct it")
        return
    }
    return `i am ${val1} ${val2} ${a}`
}
console.log(ana(200, 700,800))



const user = {
    username: "sameer",
    price: 700
}
function handleObject(anyobject) {
    console.log(`username is ${anyobject.username} and price is ${anyobject.prices}`)

}
// handleObject(user)
handleObject({
    username:"sam",
    price: 399
})

const myNewArray = [200, 300, 400, 500]

function returnSecondValue(getArray){
    return getArray[1]
}
//console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200, 300, 400, 500]))