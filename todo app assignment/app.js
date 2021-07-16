
var list = document.getElementById('list')
function addTodo(){
    var todoItem = document.getElementById('todo-item')

   //create li Tag with text Node...............
    var li = document.createElement('li')
    var liText = document.createTextNode(todoItem.value)
    li.appendChild(liText)


    //create delete Button......
    var delBtn = document.createElement('button')
    var delText = document.createTextNode('Delete')
    delBtn.setAttribute('class','btn')
    delBtn.setAttribute('onclick','deleteItem(this)')
    delBtn.appendChild(delText)

    //create edit button
    var editBtn = document.createElement('button')
    var editText = document.createTextNode('Edit')
    editBtn.appendChild(editText)
    editBtn.setAttribute('onclick','editItem(this)')
    
    li.appendChild(delBtn)
    li.appendChild(editBtn)

    list.appendChild(li)
    todoItem.value =''
    console.log(li)
}
//for delete............
function deleteItem(e){
    e.parentNode.remove()
}

//for delete all........
function deleteAll(){
    list.innerHTML = ""
}

//edit button functon...
function editItem(e){
    var val = prompt("enter updated value",e.parentNode.firstChild.nodeValue)
    // console.log(e.parentNode.firstChild.nodevalue)
    e.parentNode.firstChild.nodeValue = val;
}

