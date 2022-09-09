// var n = Math.random()*6;
// n = Math.floor(n + 1);
// console.log(n)

// prompt("what is your name");
// prompt("what is their name");
// var loveScore = Math.random()*100;
// loveScore = Math.floor(loveScore) + 1;
// if (loveScore > 70) {
//     alert ("your love score is " + loveScore + "% your love is true")
// }else if( loveScore <= 70 && loveScore >= 40) {
//     alert("your love score is " + loveScore + "%");
// }
// else {
//     alert("he cheated you")
// }



//Create your function below this line.
//The first parameter should be the weight and the second should be the height.
function bmiCalculator (weight, height) {

    var bmi = weight / Math.pow(height, 2);  //math.pow for square.
    return bmi;
 }
  console.log(Math.round(bmiCalculator(58, 1.6))) ;
  

/* If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:
var bmi = bmiCalculator(65, 1.8); 
bmi should equal 20 when it's rounded to the nearest whole number.
*/