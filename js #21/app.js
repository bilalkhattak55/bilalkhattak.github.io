// var obj = {
//     name : "bilal",
// }
// console.log(obj.name)


// var student1 = {
//     name : "ali",
//     roll no = "123"
// }
// var student2 = {
//     name : "bilal",
//     roll : "321"

// function Students(name,rollNo){
//      this.name = name;
//      this.rollNo = rollNo;
// }
// var student1 = new Students ("bilal",123);
// var student2 = new Students ("ali")
// console.log(student1,student2)


// function Student(name,roll){
//     this.name = name;
//     this.roll = roll;
//     // this.getName = function(){
//     //     return this.name;
//     // }
// }
// Student.prototype.getName = function(){
//     return this.name
// }
// var student1 = new Student ("bilal",123);
// var student2 = new Student ("ali",2334);
// console.log(student2.getName())


// var student1 = {
//     name :"bilal",
//     rollNo : 1234,
// }
// console.log("rollNo" in student1)
 

// var student1 = {
//     name : "basit",
//     class : "matric",
//     rollNo : 1234,
// }
// for(var prop in student1){
//     console.log(prop)
// }


// var student1 = {
//     name : "basit",
//     class : "matric",
//     rollNo : 1234,
// }
// for(var key in student1){
//     console.log(key +" : "+student1[key])
// }

// var student1 = {
//     name : "basit",
//     class : "matric",
//     rollNo : 1234,
// }
// console.log(student1.hasOwnProperty("rollNo"))

for(var a = 1; a <= 100; a = a + 10){
    for(var b = a; b < a+10 ; b++){

        document.write(b + " ")
    }

    document.write("</br>")
}