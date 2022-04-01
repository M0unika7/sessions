//variables: which contains some values could be string, number, arrays, float, value, decimal, values etc
// js is a loosly types language
// var x = 10; var y = "name"; var z = [1,2,3,4]; var a = ["abc","xyz"]
// 3 types of ways to declare the variables:
//1. var keyword /var a = 10
//2. let keyword  /let a = 10
//3. const keyword  /const a = 10 (keywors are the predefined terms used inside in the programming language n those are reserved )


//{} -> block ->defines scope
//() -> function innovation
//[] -> arrays

var a = 10; //stored in global
//1. var is function scoped
//2. during memory allocation var is present in GEC
//ex:1
function name() {
    var a = 10;
    console.log(a); // 10
}
console.log(a); // undefined

//ex:2
{
    var b = 20;
}
 console.log(b); // 10
 
 //ex:3
 var a = 10;
 function name(){
     var a = 100;
     console.log(a); //100
 }
 console.log(a); //10
//...............................................................

let b = 20; // stored in script
//1. let is blocked scoped
//2. during memory allocation let is present in temporal dead zone

let a = 10;
function name() {
    let a = 20; // show error, we cannot use same variable name and declare
    console.log(a); //10 
    let b = "abc";
    console.log(a); //abc
}
console.log(b); // reference to error

const c = 10;
// 1. const is blocked scope
// 2. during memory allocation const is present in tdz
//3. const cannot be assigned another value once it has been declared.

let j;
j = 100;
console.log(j); // 100
 //similiar to var
