
// var a = new Date();
// console.log(a);
//  var aString = a.toString();
//  console.log(aString);




// ***********Get Day**************

// var rightNow = new Date();
// var toDay = rightNow.getDay();
// console.log(toDay);




// ***********Get DayName***************

// var dayNames = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
// var rightNow = new Date();
// var today =rightNow.getDay();
// var todayName = dayNames[today];
// console.log(todayName);



// *************Get Month***********


// var d = new Date();
// var theMonth = d.getMonth();
// console.log(theMonth);



// **************Get MontName**********


//  var monthsNames = ["jan","feb","mar","apr","may","jun","jul","sept","oct","nov","dec"];
//  var d = new Date();
//  var theMonth = d.getMonth();
//  var thisMonth = monthsNames[theMonth];
//  console.log(thisMonth);


// **************Get year****************


// var d = new Date();
// var year = d.getFullYear();
// console.log(year);


// *************Getting Age**************

// var dob =  new Date(prompt("enter your date of birth","jan 1, 1970"));
// var dobmili = dob.getTime();


// var today = new Date();
// var todaymili = today.getTime();


// var diff = todaymili - dobmili;
// document.write(diff);
// var accuage= math.floor(diff/(1000*60*60*24));
// document.write(accuage);


// *******Get Time(milli Seconds)***********

// var d = new Date();
// var milliSeconds = d.getTime();
// console.log(milliSeconds);


// ****************FUNCTIONS*********

// function greeting(){
//     alert("hello bilal")
// }
// greeting();
// function greeting(greet){
//     alert(greet)
// }
// greeting("hello ali")



// function first(b,a){
//     return b + a
// }
// console.log(first(2 , 3)) 
// console.log(first(6,3))
// console.log(first(11,10))
// var a = "bilal";
// function b (){
//     a = "ali"
// }
// console.log(a);
// var a = "bilal";
// function b() {
//     a = "ali"
// }
// b();
// console.log(a);





// function cal(num1,opr,num2){
//     if(opr === "+"){
//         return num1 + num2
//     }
//     else if(opr === "-"){
//         return num1 - num2
//     }
//     else if(opr === "*"){
//         return num1 * num2
//     }


//     else{
//         return "operator is incorrect!"
//     }
// }
// var result = cal(3,"+",3);
// var result1 = cal(6,"-",1);
// var result2 = cal(2,"*",5);
// var result3 = cal(10,"/",5);
// var result4 = cal(6,"&",9);
// console.log(result)
// console.log(result1)
// console.log(result2)
// console.log(result3)
// console.log(result4)


// function foo(a, b =3){
//     return a + b
// }
// console.log(foo(1))

// var name = "basit"
// switch (name) {
//     case "bilal":
//         alert("hello bilal")
//         break;
//     case "ali":
//         alert("hello ali")
//         break;
//     default:
//         alert("hello")
// }




