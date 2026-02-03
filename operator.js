//operators
// Arithmetic , comparison,logical, assignment,unary, ternary

// Arithmetic operators
//  + ,-, *, /, %, **
//+ -->> add and concatenation
//ex . 1+2 , "user" + "name"

//  -
//ex.   5-2

//  /,* 
// ex. 5*2 , 6/2

//  % --> modulus (sheshfal)
// ex. 12%4 --> 0
// ex. 9%2 --> 1
// ** --> exponentiation , square 
// ex.  2**3 --> 8

// comparison operators
// ==
//ex. 12==12 , 12=="12" (don't check type , only check value,not strict comparison)
// ===
//ex. 12==="12" (check type and value , strict comparison)
// !=
// ex. 12!=13(reverse of == , not strict comparison)
// !==
// ex. 12!=="12" (reverse of === , strict comparison)
// >=
// ex. 12>=10
// <=
// ex. 10<=12
// >
// ex. 12>113,12>9,13>13
// <
// ex. 12<113,12<9,22<22

//assignment operators
// =
// give a value , value assignment oprator
// ex. let a=10
//+=
//ex. a +=3; (add value into old value and it into a)
//-=
//ex. a -= 4; (substract value into old value and save it into a )
//*=
//ex. a*=2;
// /=
// ex. a/=2;
// %=
// ex. a%=2 ; (give remainder)


//logical

//  && (AND)
// true && true --> true   12<13  && 14<15 --> true
// false && true --> false  12<10 && 14<15 --> false
// true && false --> false
// false && false --> false

// || (OR)
// ex. true || true --> true
// ex. true || false --> true
// ex. false || true --> true
// ex. false || false --> false

// ! (NOT)
//  ex. !true --> false
//   !false --> true
//  !12 --> false --> !!12 --> true

// Unary oprator
// + - ! typeof ++ --
// +
// convert string to number
// ex. +"5"  -->> 5
// +"name" --> NaN
// -
// ex. -5
// !
// ex. !12 --> false
// typeof
// ex. typeof "name" --> string
//++
// ex. let a=12
// a++ --> 12 // post ex. a++ + a => 25
//++a --> 13 // pre ex. a++ + a => 26
// --
// ex. let a=3;
// a--
// a++ 


// Ternary
// ? :
// condition ? true thase to print thase : false to print thase
// let a = 12>13 ? console.log ("true"): console.log("false");


// typeof null --> object
// typeof [] --> object , let a =[]; a instanceof Array --> true
// instanceof --> check type of refernce data type // don't use typeof for reference data type 
// typeof NaN --> number
// typeof --> premitive data type mate use karvo
// instanceof --> refernce data type mate use karvo



//Example 1
let x = 10;
let y = 20;
if(x>5 && y > 5){
    console.log("Both are greater than 5");
}else{
    console.log("One or both are not greater than 5");
}
// ans :Both are greater than 5
// why : both value are true and both value is grater than 10 or 20



//Example 2 :
let isAdmin = true;
let isLoggedIn = false;
if(isAdmin || isLoggedIn){
    console.log("Acess granted");
}else{
    console.log("Acess Denied");
}
// ans :Acess granted
// why : aama or use karelu chhe tethi koi pan ek value true hase etle answer true aave

//Example 3 
let temp = 35;
if(!(temp > 30)){
    console.log("Hot day");
}else{
    console.log("Pleasant day");
}
// ans :Pleasant day
// why : in this use not equal to tethi 

//Example 4
let a = 0;
if(a){
    console.log("Truthy value");
}else{
    console.log("Falsy value");
}
// ans :Falsy value
// why : 

//Example 5 :
let score = 78;
let grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "D";
console.log("Grade:", grade);
// ans : Grade: C
// why : score is 78, so it is not >= 90 and not >= 80, but it is >= 70, therefore the grade assigned is "C".


// Example 6 
let points = 120;
let status = points >= 100 ? "Gold" : points >= 50 ? "Silver" : "Bronze";
console.log("Status:", status);
// ans : Status: Gold
// why : points is 120, which is >= 100, so the first condition is true and "Gold" is returned.

// Example 7:
let loggedIn = true;
let hasToken = false;
let access = loggedIn && hasToken ? "Allow" : "Deny";
console.log("access:", access);
// ans : access: Deny
// why : loggedIn is true but hasToken is false, true && false results in false, so the ternary operator returns "Deny".

// Example 8:
let u = 5;
u++
console.log(u)
// ans : 6
// why : u++ is post-increment, which increases the value of u by 1. Initial value is 5, after increment it becomes 6.

// Example 9:
let t = 8;
++t
console.log(t)
// ans : 9
// why : ++t is pre-increment, so the value of t is increased first. 8 becomes 9, then it is printed.

// Example 10:
let b = 4;
let c = b++
console.log(b, c);
// ans : 5 4
// why : b++ is post-increment.  First, c gets the value of b (4). Then b is incremented to 5.

// Example 11:
let d = 4;
let e = ++b
console.log(d, e);
// ans : Error (ReferenceError)
// why : variable b is not declared in this scope.  Using ++b without defining b causes ReferenceError.

// Example 12:
let m = 10;
console.log(m--)
console.log(m);
// ans : 10 , 9
// why : m-- is post-decrement.First console.log prints 10,then m is decremented to 9 and printed in the next line.

// Example 13:
let likes = 100;
function likePost() {
  return ++likes;
}
console.log(likePost()); 
console.log(likes);
// ans : 101 , 101
// why : ++likes is pre-increment.likes becomes 101 and is returned likes remains 101 when logged again.      

// Example 14:
let count = 5;
if(count-- === 5){   
console.log("Matched");
}else{
    console.log("Not Matched"); 
}
// ans : Matched
// why : count-- is post-decrement.  First, count is compared with 5 (5 === 5 → true). After the comparison, count is decreased to 4.Therefore, the condition is true and "Matched" is printed.

