//Chapter # 08 array destructuring.....

// let arr = ["bilal","ali","umer"];

// // let name1 = arr[0];
// // let name2 = arr[1];
// // let name3 = arr[2]

// let [name1,name2,name3] = arr;
// console.log(name1,name3)


// Ch # 09 "Function epression"

// let foo = function(){
//     console.log("hello world")
// }
// foo()


//Ch # 10 "arrow functions"

// let hello = (name1,name2) => {
//     console.log(`hello ${name1} and ${name2}`)
// }
// hello("ali","bilal")

// let hello = () => {
//     return "bilal"
// }
// console.log(hello())

// let hello = () => "bilal"
// console.log(hello())

// () => "bilal"


// let getData = (render_data) => {
//     setTimeout(()=>{
//         render_data("bilal")
//     },3000)
// }
// let render_data = (name) => {
//     console.log(name)
// }
// getData(render_data)


// chapter # 11 array function...

// let arr = [{name : "ali",age : 20},{name : "bilal",age : 30}]

// let filter = arr.filter(a => a.age > 10)
// console.log(filter)

// let name = "bilal"
// let search = "bi"
// if(name.startsWith(search)){
//     console.log(name)
// }

//chapter # 12 "arrray map"


// let arr = [{name : "ali"},{name:"bilal"}];
// console.log(arr)
// let multiply = arr.map(a => a.name = "umair")
// console.log(multiply)

// let arr = [2 , 3 , 4 ,5 ,6];
// console.log(arr)
// let multiply = arr.map(a => a * 2)
// console.log(multiply)

// let arr = [{name : "ali"},{name:"bilal"}];
// console.log(arr)
//  let multiply = arr.map(a => {
//      document.getElementById("table").innerHTML = a.name

//  })
//  console.log(multiply)

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(data => console.log("result",data))
//   .catch(err => console.log("error",err))

// async function getData(){
//     let data = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//     console.log(data)
// }

// chapter # 12 "classes"

//  function student(name,email){
//     this.name = name;
//     this.email = email;
// }
// let student1 = new student("bilal","mbilalkhk@gmail.com")
// console.log(student1)

// class Student {
//     constructor(name,email){
//       this.name = name;
//       this.email = email
//     }
// }
// class School extends Student{
//     constructor(name, email, school){
//         super(name,email)
//         this.school = school
//     }
// }
// let student1 = new School ("bilal", "mbilalkhk@gmail.com","tcf");
//  console.log(student1)

// promise.........

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(function(result){

//   })
//   .catch(function(error){

//   })

//   function getData(){
//     fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
//     .then(function(result){
//       example(result)
//     })
//     .catch(function(error){

//     })
//   }
//   getData()
//   function example(data){
//       console.log("data",data)
//   }

// function getData() {
    // let promise = new Promise(function (resolve, reject) {


    //     fetch('https://jsonplaceholder.typicode.com/todos/1')
    //         .then(response => response.json())
    //         .then(function (result) {
    //             resolve(result)
    //         })
    //         .catch(function (error) {
    //             reject(error)

    //         })
    //         })

//         // getData()
//         // function example(data) {
//         //     console.log("data", data)
//         // })

//   promise
//   .then(function (result){
//       console.log("result",result)
//   })
//   .catch(function (error){
//       console.log("error",error)
//   })
// }
// getData()

// var firebase_data;

// firebase.database().ref("/").on("child_added",function(data){
//     firebase_data = data.val()
// })
// console.log(firebase_data)

// function getData(){
    // let promise = new Promise(function(resolve,reject){
        


    //         fetch('https://jsonplaceholder.typicode.com/todos/1')
    //             .then(response => response.json())
    //             .then(function (result) {
    //                 resolve(result)
    //             })
    //             .catch(function (error) {
    //                 reject(error)
    
    //             })
    //             })

//     promise
//     .then(function(data){
//         console.log("result=>",data)
//     })
//     .catch(function(error){
//         console.log("error=>",error)
//     })
// }
// getData()

// async function getData(){
//     let promise = new Promise(function(resolve,reject){
        


//         fetch('https://jsonplaceholder.typicode.com/todos/1')
//             .then(response => response.json())
//             .then(function (result) {
//                 resolve(result)
//             })
//             .catch(function (error) {
//                 reject(error)

//             })
//             })
//             let data = await promise;
//             console.log(data)

// }
// getData()


