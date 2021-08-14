function press(){
     var locate = window.location.href
    //  console.log(locate)
    // window.location.href = "https://www.google.com/"
    // window.location.assign("https://www.google.com/")
    // window.location.replace("https://www.google.com/")
    //window.location.reload() //for reload
    //window.location.reload(true)  //for server
    // var content = "<h1> successfully change page <h1>"
    //window.open().document.write(content)
    var win = window.open("https://www.google.com/" , "win1" , 'width=300,height=100,left=100,top=100')
    if(win === null){
        alert("aap apna popup locker ko disable kar do")
        windown.close()
    }
}