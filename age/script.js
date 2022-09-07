// function lifeInWeeks (age) {
//     var yearsRemaining = 90 - age;
//     var days = yearsRemaining * 365;
//     var weeks = yearsRemaining * 52;
//     var months = yearsRemaining * 12;
    

//     console.log("you have " + days + " days, " + weeks + " weeks and " + months + " months left");
// }

// lifeInWeeks(24);







// function getMilk (money) {
//     console.log("leave house")
//     var numberOfBottles = money / 1.5
//   console.log("buy " + numberOfBottles + " bottles of milk")
//     console.log("turn left")

//     return money % 1.5 
// }
// var bilal = getMilk(15);
// console.log(bilal);






// function getMilk (money) {
//     console.log("leave house")
//   console.log("buy " + calcBottles(money, 1.5) + " bottles of milk")
//     console.log("turn left")

//     return money % 1.5   //reminder of this division
// }
// var bilal = getMilk(7);
// console.log(bilal);

// function calcBottles (startingMoney, costPerBottle) {
//     var numberOfBottles = Math.floor(startingMoney / costPerBottle) 
//     return numberOfBottles;
// }






// function getMilk (money, costPerBottle) {
//     console.log("leave house")
//   console.log("buy " + calcBottles(money, costPerBottle) + " bottles of milk")
//     console.log("turn left")

//     return calcChange(money, costPerBottle)   //reminder of this division
// }
// // var bilal = getMilk(7);
// // console.log(bilal);

// function calcBottles (startingAmount, costPerBottle) {
//     var numberOfBottles = Math.floor(startingAmount / costPerBottle) 
//     return numberOfBottles;
// }

// function calcChange (startingAmount , costPerBottle) {
//     var change = startingAmount % costPerBottle;
//     return change;
   

// }
// console.log("hey master here is your " + getMilk(15, 4) + " change");







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
