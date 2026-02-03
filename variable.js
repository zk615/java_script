var a ="temp";       // declaration and initialization
var _123="hello";
var $123="hello";
d=23;
var d; //declare

//let
let temp="acx";

//const

const temp_const="hello world";

//var change the value
//const not change the value
 
d=24; //reassign
var d="hello";  //redeclare

//temp_const="hello";


//scope(global, block, function)

var f=23; //global scope

{
    var f=45; //block scope
    console.log("block scope" +f);
}

function xyz(){
    var f=67; //function scope
    console.log("function scope" +f);
}
abc();
console.log(f);




let c=23; //global scope

{
    let c=45; //block scope
    console.log("block scope" +c);
}

function abc(){
    let c=67; //function scope
    console.log("function scope" +c);
}
abc();
console.log(c);




//temporal dead zone

console.log(temp_b);
var temp_b=23;

// console.log(j);
// let j=45;


//hoisting impact
//hosting --> when your create variable into js that break into two parts first is declare part that go to up and there initiallization part that go down

// var temp_d = 12;
//var temp_d  undefined ; --> that go to up
// temp_d = 12;  --> that go to down(means stuck into line 76)
//if you use console.log before initialization that give you undefined

// let temp_d_let = 34;

//let variable not use before initialization
//if you use console.log before initialization that give you  error
//hosting Impace on var , let ,const
/* 
var --> hoist --> undefined
let --> hoist --> error
const --> hoist --> error
*/

// ex:1
// console.log(nm);
// let nm= "name";
// error : Uncaught ReferenceError: Cannot access 'nm' before initialization
// why : temporal dead zone 

// ex:2
// console.log(b);
// var b= "username";
// error : undefined
// why :

// ex :3
// var x= 10;
// {
//     var x= 20;
// }
// console.log(x);
//ans : 20
//why : var is function scope not block scope

// ex:4
// let z = 10;
// {
//     let z = 20;
//     console.log("inside :", z);
// }
// console.log("outside :", z);
//ans : inside : 20
//      outside : 10
//why : let is block scope


// ex :5
// const person = {name: "kana"};
// console.log(person);
// person.name = "user";
// person ={};
//ans : {name: 'kana'}
// error : Uncaught TypeError: Assignment to constant variable.
//why : const variable not reassign but object property can be changed

