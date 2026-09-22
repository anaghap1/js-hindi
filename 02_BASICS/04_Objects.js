// singleton object

// const tinderUser = new Object() // object constructor syntax
const tinderUser = {} // object literal syntax
tinderUser.id = "123abc"
tinderUser.name = "Anagha"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email: " some@gmail.com",
    fullName:{
        userFullName:{
            firstName: "Anagha",
            lastName: "Pande"
        }
    }       
}
// console.log(regularUser.fullName.userFullName.firstName)

const obj1 ={1: "a", 2:"b", 3:"c"}
const obj2 = {1: "a", 2:"b", 3:"c"}
const obj3 = Object.assign({},obj1,obj2) // merging two objects
// console.log(obj3)

const obj4 = {...obj1, ...obj2}
// console.log(obj4)

const users =[
    {
        id: 1,
        email: "h@gmail.com"
    },
     {
        id: 1,
        email: "h@gmail.com"
    },
     {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email 
// console.log(tinderUser)
// console.log(Object.keys(tinderUser)) // returns an array of keys
// console.log(Object.values(tinderUser)) // returns an array of values
// console.log(Object.entries(tinderUser)) // returns an array of key value pairs

// console.log(tinderUser.hasOwnProperty("isLoggedIn")) // returns true if the property exists in the object

const course ={
    coursename: "js in hindi",
    price: 999,
    courseInstructor: "Anagha",
    courseDetails: {
        courseLength: "5 hours",
        courseLanguage: "Hindi"
    }
}

course.courseInstructor // updating the value of a property
console.log(course.courseInstructor)

const{coursename, price, courseInstructor: instructor, courseDetails} = course // object destructuring
console.log(instructor, price, coursename, courseDetails) // accessing nested object property