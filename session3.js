//how variables are stored in memory during memory allocation phase:

//when we call before /console.log(a); / throw an error like reference error
                      //console.log(b); / undefined
let a = 10;
var b = 20;
sum();
function sum() {
     //complete function is getting stored
    let add = (a+b);
    console.log(add);
    subtract ();
    function subtract() {
        let sub = (a-b);
        console.log(sub);
    }
 }

//operators: they perform some oprations btw operands / 1. arithematic (+, -, /, *, !)  /2. logical (and, or, not, ?) 
//3. relational/ conditional/ camparison (>=, <=, <, >, !=, ==, ===)   /4. bitwise (~, xor, nor, >>, <<) 

var name = "arnav"; 
console.log(name); //arnav
function myname(){
    name = "babu";
    console.log(name);//babu
    var name = "vishal";
    console.log(name + this.name);//arnav+vishal

}
console.log(name);//arnav
myname();