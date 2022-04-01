// switch case

// first type of scenario
// we will compare the value of the variable directly

// let a = 17;

// switch (a){
//     case 10:
//         console.log("Value is 10");
//         break;  //breaks the flow
//     case 15:
//         console.log("Value is 15");
//         break;
//     default:
//         console.log("default case");
//         break;
// }
//.................................
//for loop
// for(let i=0; i<10; i++){
//     console.log("value of i is", i);
// }

//
//..................................

//while loop
// let i = 0;
// while (i<7){
//  console.log("value of i is", i);
//  i++;
// }
//console.log("outside loop");
//....................................

//do-while loop

// let i = 0;
// do{
//     console.log("value of i is :", i);
//     i++;
// }while(i<10)
//...................................

//nested loops

// for(let i=0; i<5; i++){
//     for(let j=0; j<2; j++) {
//         console.log("value of i is:", i, "and j is :", j);
//     }
// }

//for one iteration of i , j will be run 2 times

//functions..........
// let a = 20;
// let b = 10;
// function mou(){
//     console.log(a+b);

// }
//......................................
// function add(a,b){
//     console.log(a+b);
// }

// add(1,2);
// add(1,3);
//arguments : the values which we pass to a variable at the time of execution.
//parameters : the value which function uses to do operation: a and b at the time of definition.
//..............................

// III function with return st
// function add (x,y){
//     return x+y;
// }
// const result = add(7,7);
// console.log(result);

//function which exist only in js..

// const add = function(){
//     console.log("value");
// }
// add();
//..............................

//arrow f/n
//..............................

// functions are reusable blocks of code
// function add(a, b){ //a n b are parameters
//    console.log(a+b)
// }
// add(4, 5) // 4 n 5 are arguments
//.......................................
// function add(a, b){
//     console.log(a)
//     debugger; //stops the code at this point of execution
//     console.log(a+b)
// }
//..................................
// function abc(){ //scope of a, b is abc fun
//     var a = 10
//     var b = 20
//     console.log(a, b, "inside abc")
//     console.log(x)
// }
// var x = 10 //scope  of x is global
// abc()
//.............................

// var x = 10
// function a(){
//     var y = 20
//     function b(){
//         console.log(x, y)
//     }
//     b()
// }
// a()
//...................................

//using array literals
// let arr = [1,"mouni",3,42.3,5,{id:1,name:"harsh"},7];
// console.log("arr",arr);
// //...................
// let values = ["a", "e", "i", "0", "u"];
// console.log(values.length);

// values[10] = 12;
// console.log(values[6]);

// console.log(values);
// values.push(1);
// console.log(values);
// values.pop(); //removes from end
// console.log(values);
// values.shift(); //removes from start
// console.log(values);
// values.unshift("a");
// console.log(values);

//function to find out howmany numeric values in an array

// function countstring(arr){
//     let count;
//     for (let i=0; i<arr.length; i++){
//         const element = arr[i];
//         if (typeof(element)==="number") count++;
//     }
//     return count;
// }
// const result = countstring(["a", "b", "c"]);
// console.log(result);

//for numeric we use temparr=[]
//.......................................

//some and every are two funs 
// let arr = [1,2,3,4,5];
// const value1 = arr.some(element => element>2);
// const value2 = arr.every(element => element>2);
// console.log(value1,value2);  //true false


//functions...................
// var a = 100;
// console.log(a);



//functions are reusable blocks of code

// function abc() {  //function declaration
//     //code for the function
//     console.log('inside abc');
// }
//to run the block of code inside the function, I need to execute(call) the function
// abc()  // function execution or fun call



// function add(a,b)  {  //a nd b are parameters
//     console.log(a+b);
// }

// add(7,7); // 7,7 are arguments



// function add(a,b){
//     console.log("hi"); // hi
//     return a+b;

// }
// var  result = add(1,3);
// console.log(result);
// console.log(add(1,3)); //4


// function add(a,b){
//     console.log (a);
//     debugger;
//     console.log(a+b);
// }
// add(1,3);



function abc(){
    var a = 10;
    var b = 20;
    console.log(a,b,"inside abc")
    console.log(x)
}
var x = 10;
abc()




