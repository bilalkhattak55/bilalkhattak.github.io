//chapter # 1 = "variables"

//var,let,const

// chapter # 2 = "template literals"

// let firstName = "Bilal";
// let lastName = "haider";

// console.log(`my name is ${firstName} ${lastName}`)

//chapter # 3 = "spread operators"

// var students1 = ["bilal", "ali"];
//  var students2 = ["khan","haider"];
// var merge = students1.concat(students2);


// var students1 = ["bilal", "ali"];
//  var students2 = [...students1,"khan","haider"];
//  console.log(students2)

// var students1 = {
//     name1 : "ali",
//     name2 : "bilal"
// }
// var students2 = {...students1,
//     name3 : "umer",
//     name4: "hassan"
// }
// console.log(students2)

// chapter # 4 = "Object Destructuring"



// var students = {
//     name: "bilal",
//     school: "tcf",
//     roll: "123445"
// }
//     let { name , school , roll } = students;

// console.log(name)
// console.log(school)
// console.log(roll)

// var age = 20;
// var check = age > 30 ? "30 se bara he" : "30 se chota he";
// console.log(check)

// age = 90;
// var check = age > 20 && age < 50 ? "allow": age < 100 && age >= 90 ? "disable" :"not allowed";
// console.log(check)

// var bool = true;
// var name = bool && "bilal"
// console.log(name)


// Chapter # 6 = "Async or sync"


// setTimeout(function(){
//     console.log("Number 1");

// },5000);
// setTimeout(function(){
//     console.log("Number 2");

// },3000);

// console.log("Number 3");


// var name1;
 
// setTimeout(function(){
//     name1 = "M Bilal"
// },1000);
// console.log(name1);
// setInterval(function(){
//     console.log(name1)
// },1000);

// //****** Promise.........

// var promise = new Promise(function(resolve,reject){
//     var zinger = "nhi"
//     if(zinger === "available"){
//         resolve("bilal ne berger khilaya")
//     }else{
//         reject("nahi khilaya")
//     }

// })

// promise.then(function(data){
//     console.log("resolve=>",data)
// })
// .catch(function(error){
//     console.log("error=>",error)
// })

//Getting data from firbase with promise function.....

// let promise = new Promise(function(resolve,reject){
//     firebase.database().ref("users").on("child_added",function(data){
//         if(data.val()){
//             resolve(data.val())
//         }else{
//             reject("something went wrong")
//         }
//     })
// })

// promise.then(function(data){
//     console.log(data)
// })
// .catch(function(error){
//     console.log(error)
// })
// var promise = new Promise(function(resolve,reject){
//     if(true){
//         setTimeout(()=>{
//             resolve("it's resolve")

//         },5000)

        
//     }else{
//         reject("rejected")
//     }
// })
// console.log(promise)
// promise.then(function(data){
//     console.log(data)
// })
// .catch(function(error){
//     console.log(error)
// })

