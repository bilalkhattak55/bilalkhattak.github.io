
var list = document.getElementById('list')

firebase.database().ref("todos").on("child_added",function(data){
    
    console.log(data.val())
// //    //create li Tag with text Node...............
    var li = document.createElement('li')
    var liText = document.createTextNode(data.val().value)
    li.appendChild(liText)


// //     //create delete Button......
    var delBtn = document.createElement('button')
    var delText = document.createTextNode('Delete')
    delBtn.setAttribute('class','btn')
    delBtn.setAttribute("id",data.val().key)
    delBtn.setAttribute('onclick','deleteItem(this)')
    delBtn.appendChild(delText)

// //     //create edit button
    var editBtn = document.createElement('button')
    var editText = document.createTextNode('Edit')
    editBtn.appendChild(editText)
    editBtn.setAttribute('onclick','editItem(this)')
    editBtn.setAttribute("id",data.val().key)
    
    li.appendChild(delBtn)
    li.appendChild(editBtn)

    list.appendChild(li)
 })



function addTodo(){
    var todoItem = document.getElementById('todo-item');
       
    var key = firebase.database().ref("todos").push().key

    var todo = {
        value : todoItem.value,
        key :  key
    }
     firebase.database().ref('todos').child(key).set(todo)
    // var database = firebase.database().ref("todos");
    // var key = database.push().key;
    // var todo = {
    //     value : todoItem.value,
    //     key : key
    // }
    // database.child(key).set(todo)
    // todoItem.value = ""


//    //create li Tag with text Node...............
//     var li = document.createElement('li')
//     var liText = document.createTextNode(todoItem.value)
//     li.appendChild(liText)


// //     //create delete Button......
//     var delBtn = document.createElement('button')
//     var delText = document.createTextNode('Delete')
//     delBtn.setAttribute('class','btn')
//     delBtn.setAttribute('onclick','deleteItem(this)')
//     delBtn.appendChild(delText)

// //     //create edit button
//     var editBtn = document.createElement('button')
//     var editText = document.createTextNode('Edit')
//     editBtn.appendChild(editText)
//     editBtn.setAttribute('onclick','editItem(this)')
    
//     li.appendChild(delBtn)
//     li.appendChild(editBtn)

//     list.appendChild(li)

    todoItem.value =''
    // console.log(li)
 }
// //for delete............
function deleteItem(e){
    firebase.database().ref("todos").child(e.id).remove()
       e.parentNode.remove()
}

// //for delete all........
function deleteAll(){
    list.innerHTML = ""
}

// //edit button functon...
function editItem(e){
    var val = prompt("enter updated value",e.parentNode.firstChild.nodeValue)
    var editTodo = {
        value : val,
        key : e.id
    }
    firebase.database().ref("todos").child(e.id).set(editTodo)
    // console.log(e.parentNode.firstChild.nodevalue)
    e.parentNode.firstChild.nodeValue = val;
}
