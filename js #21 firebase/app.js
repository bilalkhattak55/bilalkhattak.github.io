// function saveData() {
//     var name = document.getElementById("name")
//     var roll = document.getElementById("roll")

//     var key = firebase.database().ref('student').push(student).key

//     var student = {
//         name: name.value,
//         roll: roll.value,
//         key : key,
//     }
//     console.log(student)

    // firebase.database().ref('student').set(student)
    // firebase.database().ref('student').set("bilal")
    // firebase.database().ref("student").child("student1").set(student)
    // firebase.database().ref("student/student1").push(student)
    // var key = Math.random()* 2344556;
    // console.log(key)
    //  firebase.database().ref('student/' + key.toFixed()).set(student)

    // var key = firebase.database().ref('student').push(student).key
    // console.log(key)
    // firebase.database().ref("student/" + key).push(student)

}

// function getFirebaseData(){
//     // firebase.database().ref("student").once("value",function(data){
//     //     console.log(data.val())
//     // })
//     // firebase.database().ref("student/-MgpSPTgQ1GDX7eD5igR").once("value",function(data){
//     //     console.log(data.val())
//     // })
//     firebase.database().ref("student").on("child_added",function(data){
//     console.log(data.val())
//     })
// }
// getFirebaseData()
// function removeFirebasaeData(){
//     // firebase.database().ref('student/-MgpdYhiPkESmYm60F5Q').remove()
//     firebase.database().ref('student').remove()

// }
// removeFirebasaeData()