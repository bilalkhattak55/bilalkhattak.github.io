// for(var a = 1; a<= 100; a = a+10){
//     for(b = a; b < a+10; b++){
//         document.write(b + " ");
//     }
//     document.write("</br>");
// }
// for( var a = 1; a <= 100; a = a+10){
//     for(b = a; b <= a+9; b++){
//         document.write(b + " ");
//     }
//     document.write("</br>");
// }
// var city = prompt("enter your city name");
// // city = city.toLowerCase();
// var arr = ["karachi","peshawer","multan","islamabad"]
// for(var i = 0; i < arr.length; i++){
//     if(arr[i]===city){
//         alert("city has found")
//     }else{alert("city not found")}
// }
// var city = prompt("enter your city");
// var firstchar =city.slice(0,1);
// firstchar = firstchar.toUpperCase();
// var otherchar = city.slice(1);
//     otherchar = otherchar.toLowerCase();
//     var city = firstchar + otherchar;
//     console.log(city);
// var city = prompt("enter your city");
// var firstchar = city.slice(0,1);
// firstchar = firstchar.toUpperCase();
// var otherchar = city.slice(1);
// otherchar = otherchar.toLowerCase();
// var city = firstchar+otherchar;
// console.log(city)
// var firstNames = ["ali","bilal","umer","hassan"];
// var lastNames = ["khan","haider","khattak"];
// var fullNames= [];
// for(i = 0; i < firstNames.length; i++){
//     for(j = 0;j < lastNames.length; j++){
//         console.log(firstNames[i] + lastNames[j])
//     }
// }
// var firstNames = ["ali","bilal","umer","hassan"];
// var lastNames = ["khan","haider","khattak"];
// var fullNames = [];
// for(i = 0; i < firstNames.length; i++){
//     for(j = 0; j < lastNames.length; j++){
//         console.log(firstNames[i] +" " + lastNames[j]);
//     }

// }
// var str = prompt("enter your text");
// var numchars = str.length;
// for(var i = 0; i < numchars; i++){
//     if(str.slice (i , i + 2) === "  "){
//         alert("double spaces are found!");
//     }
// }





// for (var i = 0; i < text.length; i++) {
//     if (text.slice(i, i + 12) === "World War II") {
//         text = text.slice(0, i) + "the second world war" + text.slice(i + 12);
//         console.log(text);
//     } 
// }
// for (var i = 0; i < text.length; i++) {
//     if (text.slice(i, i + 12) === "World War II") {
//         text = text.slice(0, i) + "the Second World War" + text.slice(i + 12);
//         console.log(text);
//     }
// }
// var text = "The code loops through the string looking for World War II  Line 2 progresses";
// var indxNum = text.indexOf("World War II");
// var firstText = text.slice(0, indxNum);
// var replacingText = "the second world war";
// var thirdText = text.slice(indxNum + 12);
// console.log(firstText + replacingText + thirdText);

// var text = "bilal";
// console.log(text.charAt(3));

// var para = "this is an example";
// var para1 = para.replace("an example","a text");
// console.log(para1);

// var para = "this ia an example.this is an example.";
// var para1 = para.replace(/an example/g ,"a text");
// console.log(para1);
// var num = 4.6;
// var num1 = Math.round(num);
// console.log(num1);
// var num = 4.2;
// var num1 = Math.ceil(num);
// console.log(num1);
// var num = 4.7;
// var num1 = Math.floor(num);
// console.log(num1);
// var a = Math.random();
// console.log(a);
// var headuser = prompt("enter head username");
// var tailuser = prompt("enter tail username");
// var toss =Math.random() * 2;
// var floor = Math.floor(toss);
// if(floor === 0){
//     alert( "head " + headuser + " win the toss")
// }else{
//     alert( "tail " +tailuser + " win the toss")
// }
// var num =Math.random();
// console.log(num.toFixed(2));
