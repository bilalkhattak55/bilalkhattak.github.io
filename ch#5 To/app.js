// var whatsLeftOver = 11 % 3;
// console.log(whatsLeftOver);

// var num = 1;
// var newNum = ++num;
// console.log(newNum)

// var num = 1;
// var newNum = --num;
// console.log(newNum);



// resultOfComputation = ((2 * 4) * 4) + 2;
// console.log(resultOfComputation);

// resultOfComputation = (2 * 4) * (4 + 2);
// console.log(resultOfComputation);




//  var message = "thanks";
//  var userName = "bilal"
//  alert(message +" "+ userName + "!")

//  alert("2" + "2");
//  alert(2 + 2);
//  alert (2 +"" + 2);

//  var spec = prompt("Your species?", "human");

// var a = prompt("enter your age","your age is");

// var a = prompt("enter your value","your value is");
// var b = a + "10";
// console.log(b);

// var a = +prompt("enter your value","your value is");
// var b = a + 10;
// console.log(b);

// var x = "enter your value";
// var y = "your value is";
// var a = + prompt(x + y);
// var b = a + 10;
// console.log(b);


// var age = +prompt("enter your age", "your age is");
// if (age == 12) {
//     alert("age is equal")
// }
// else if(age < 12){
//     alert("under age")
// }else{
//     alert("your age is more")
// }
 
// var age = +prompt("enter your age","your age is");
// var gender = prompt ("enter your gender","your gender is");
// if(age > 18 && gender == "male"){
//     alert("you are allowed to ride")
// }else{
//     alert("you are not allowed")
// }
// var  age = +prompt("enter your age","your age is");
// var gender = prompt("enter your gender","your gender is");
// if(age > 18 || gender == "male"){
//     alert("you are allowed to ride")
// }else{
//     alert("you are not allowed")
// }
// var x = 10;
// var y = 5;
// var a = 20;
// var b = 5;
// if( x + y === a - b){
//     alert("correct")
// }else{
//     alert("incorect")
// }


// var percent = +prompt("enter your percentage","your percent");
// if(percent >= 80 && percent <= 100){
//     alert("A+ Grade")
// }else if(percent >= 70 && percent <= 80){
//     alert("A Grade")
// }else if(percent >= 60 && percent <= 70){
//     alert("B Grade")
// }else if(percent >= 50 && percent <= 60){
//     alert("C grade")
// }else if(percent >= 40 && percent <= 50){
//     alert("D Grade")
// }else if(percent >= 33 && percent <= 40){
//     alert("E grade")
// }else if(percent >= 0 && percent <= 33){
//     alert("fail")
// }else{
//     alert("you put wrong value")
// }



// var students = ["ali" , "bilal" , "umer" , "hassan"];
// document.write(students);
// console.log(students[1]);
// alert("wellcome"+ " " + students[3])

// var names = [];
// names[0] = "ali";
// names[1] = "bilal";
// names[2] = "umer";
// names[3] = "hassan";
// names[4] = "Dabbu";

// console.log(names);

var names = ["ali","bilal","umer","hassan","Dabbu"];
console.log(names);
names.pop(); //pop for removing last value of array
console.log(names);
names.push("haider","khattak") // for adding in array.
console.log(names);
names.shift(); // for removing first value in array
console.log(names)
names.unshift("Ali","Dabbu");
console.log(names)