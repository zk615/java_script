# JavaScript: var, let, const, Scope & Hoisting

This README explains **JavaScript variable declarations**, **scope**, **re-declaration rules**, **temporal dead zone**, and **hoisting**, using simple examples.

---

## 1. Variable Declarations

JavaScript provides three ways to declare variables:

* `var`
* `let`
* `const`

### Example

```js
var a = "temp";       // declaration + initialization
var _123 = "hello";  // valid variable name
var $123 = "hello";  // valid variable name

d = 23;               // implicit global (not recommended)
var d;                // declaration
```

---

## 2. let Keyword

```js
let temp = "acx";
```

* Block scoped
* Cannot be redeclared in the same scope
* Can be reassigned

---

## 3. const Keyword

```js
const temp_const = "hello world";
```

* Block scoped
* **Cannot be redeclared**
* **Cannot be reassigned**

```js
//  Error
// temp_const = "hello";
```

---

## 4. Reassignment & Redeclaration

### var

```js
d = 24;          // reassignment
var d = "hello"; // redeclaration allowed
```

### let

```js
let x = 10;
x = 20;          // allowed
// let x = 30;   //  redeclaration not allowed
```

### const

```js
const y = 50;
// y = 60;      //  reassignment not allowed
```

---

## 5. Scope in JavaScript

JavaScript has three main scopes:

* Global Scope
* Block Scope
* Function Scope

---

### 5.1 var Scope Example

```js
var f = 23; // global scope

{
    var f = 45; // NOT block scoped
    console.log("block scope " + f);
}

function xyz() {
    var f = 67; // function scope
    console.log("function scope " + f);
}

xyz();
console.log(f); // 45
```

**Note:** `var` does NOT support block scope.

---

### 5.2 let Scope Example

```js
let c = 23; // global scope

{
    let c = 45; // block scope
    console.log("block scope " + c);
}

function abc() {
    let c = 67; // function scope
    console.log("function scope " + c);
}

abc();
console.log(c); // 23
```

**Note:** `let` supports block scope.

---

## 6. Temporal Dead Zone (TDZ)

```js
console.log(temp_b);
var temp_b = 23; // undefined
```

```js
console.log(j);
let j = 45; //  ReferenceError (TDZ)
```

**Temporal Dead Zone:**

* Time between variable hoisting and initialization
* Applies to `let` and `const`

---

## 7. Hoisting Explained

Hoisting means JavaScript moves **declarations** to the top of the scope.

### var Hoisting

```js
console.log(temp_d); // undefined
var temp_d = 12;
```

Internally JavaScript treats it as:

```js
var temp_d;
temp_d = 12;
```

---

### let & const Hoisting

```js
console.log(temp_d_let);
let temp_d_let = 34; //  Error
```

* Variables are hoisted
* But **cannot be accessed before initialization**

---

## 8. Hoisting Comparison Table

| Keyword | Hoisted | Accessible Before Init |
| ------- | ------- | ---------------------- |
| var     | Yes     | undefined              |
| let     | Yes     |  Error                |
| const   | Yes     |  Error                |

---

## 9. Summary

* Use `const` by default
* Use `let` when reassignment is needed
* Avoid `var` in modern JavaScript
* Understand scope and hoisting to avoid bugs

---

 This README is beginner-friendly and suitable for interviews, learning, and projects.

 # data types :
// two types of data types

## 1. primitive data types
// COPY -->> real value

  let u = 12;
  let b = u;
  u = u + 3;

// types : number , string , boolean , undefined , null , symbol , bigInt




## 2. non-primitive data types
// COPY -->> give reference of parent

let temp_a=[1,2,3];
let temp_s=temp_a; 
temp_s.pop();  //remove value
// types : array [] , object {} , function ()

## <--------primitive data types-------->
// types : number , string , boolean , undefined , null , symbol , bigInt
### String  :

//''-single quote
//""-double quotes
//``-backtick

let temp_d= "name";
temp_d='username';
temp_d = 'firstname ';


### Number :
let e=12;
e=45.67;

### Boolean :
let temp_f=true;
temp_f=false;

### Undefined :
// you don't give a value,by default value is undefined
let g;

### Null :
// you give a value
let h=null;

### Symbol :
let u1= Symbol('uid');
let u2= Symbol('uid');
// check u1===u2
let obj ={uid: 1,name :"test",email:"test@test.com"};
let u3= Symbol('uid');
obj[u3]= "001";

### BigInt :
// cheak range of number ,number .max_safe_integer

let number = 9007199254740991;
number = number +6;
let num2 = 9007199254740991n;
num2 +3n

## <----------non-primitive data types-------->
### types : array [] , object {} , function ()

let temp_array=["name","age","phone_number"];
let obj={name:"test",age:23,phone_number:"1234567890"}
function name(params){}

## Dynamic typing :
let temp_p="name";
temp_p=314;
temp_p={};

//javascript  --> Typescript

## typesos quirks
//typeof 12
// check type of variable use --> ex. typeof NaN,typeof null , 1 +"1" , 1=="1", 1==="1"

// why typeof NaN --> number
// NaN is a failed  number operation that why that type is number

//ex. "hello" -  --> NaN

//type coeration 
//"5" + 1
//"5" -1

## Truthy vs falsy values
// ) false , "" , null , undefined ,document.all , NaN -->false 

//ex. !!0 -- check value is true and false
//ex. if (null){}, js convert it into false
//ex. if (-1){}, js convert it into true 
// all --> true



#  JavaScript Operators 



---

##  Types of Operators in JavaScript

- Arithmetic Operators  
- Comparison Operators  
- Assignment Operators  
- Logical Operators  
- Unary Operators  
- Ternary Operator  

---

##  Arithmetic Operators

**Operators:** `+  -  *  /  %  **`

- `+` → Addition & String Concatenation  
  - `1 + 2` → `3`  
  - `"user" + "name"` → `"username"`

- `-` → Subtraction  
  - `5 - 2` → `3`

- `*` and `/` → Multiplication & Division  
  - `5 * 2` → `10`  
  - `6 / 2` → `3`

- `%` → Modulus (Remainder)  
  - `12 % 4` → `0`  
  - `9 % 2` → `1`

- `**` → Exponentiation  
  - `2 ** 3` → `8`

---

##  Comparison Operators

| Operator | Description |
|--------|-------------|
| `==` | Value comparison (not strict) |
| `===` | Value + Type comparison (strict) |
| `!=` | Not equal |
| `!==` | Strict not equal |
| `>` | Greater than |
| `<` | Less than |
| `>=` | Greater than or equal |
| `<=` | Less than or equal |

**Examples:**
- `12 == "12"` → `true`
- `12 === "12"` → `false`

---

##  Assignment Operators

| Operator | Example |
|--------|---------|
| `=` | `let a = 10` |
| `+=` | `a += 3` |
| `-=` | `a -= 4` |
| `*=` | `a *= 2` |
| `/=` | `a /= 2` |
| `%=` | `a %= 2` |

---

##  Logical Operators

### AND (`&&`)
- `true && true` → `true`
- `true && false` → `false`

### OR (`||`)
- `true || false` → `true`
- `false || false` → `false`

### NOT (`!`)
- `!true` → `false`
- `!!12` → `true`

---

##  Unary Operators

| Operator | Description |
|--------|-------------|
| `+` | Convert string to number |
| `-` | Negation |
| `!` | Logical NOT |
| `typeof` | Check data type |
| `++` | Increment |
| `--` | Decrement |

**Examples:**
- `+"5"` → `5`
- `typeof "name"` → `"string"`
- `typeof null` → `"object"`
- `typeof NaN` → `"number"`

>  Use `typeof` for **primitive data types**  
>  Use `instanceof` for **reference data types**

---

##  Ternary Operator

**Syntax:**
```js
condition ? trueValue : falseValue;
12 > 13 ? console.log("true") : console.log("false");



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

//Example 14:
let count = 5;
if(count-- === 5){   
console.log("Matched");
}else{
    console.log("Not Matched"); 
}
// ans : Matched
// why : count-- is post-decrement.  First, count is compared with 5 (5 === 5 → true). After the comparison, count is decreased to 4.Therefore, the condition is true and "Matched" is printed.


#  Control Flow Statements in JavaScript

##  If Statement

js
// control flow statement in javascript

// if-else statmrnt (if , if else , if else-if  else)
// if(condition) {}

if (12 < 13) {
  console.log(true);
}

if (15 < 13) {
  console.log(true);
} // conditon is false that why if statment not run

if (!12) {
  console.log("number");
}

## If-Else Statement

//if-else statment
if (12 < 13) {
  console.log(true);
} else {
  console.log(false);
}

if (15 < 13) {
  console.log(true);
} // conditon is false that why if statment not run
else {
  console.log(false);
}

if (!12) {
  console.log("number");
} else {
  console.log("not a number");
}

## If – Else If – Else Statement

// if - else if-else statment
/*if(condition){
}else if(condition){

}else {}
    */
/*
if (loggedin && admin) {
  console.log("welcome admin");
} else if (loggedin) {
  console.log("welcome user");
} else {
  console.log("go to login page");
}
*/

## Switch Case Statement

// switch case statment

switch ("A") {
  case "A":
    console.log("A");
    break;

  case "B":
    console.log("B");
    break;

  case "C":
    console.log("C");
    break;

  default:
    console.log("D");
}


switch ("") {
  case "red":
    console.log("Stop");
    break;

  case "yellow":
    console.log("Ready");
    break;

  case "green":
    console.log("Go");
    break;

  default:
    console.log("Unknown color");
}

## Early Return Pattern

// early return pattern

function score(value){
    if(value >90){
        return "value is more than 90";
    }else if (value <80){
        return "value is less than 80";
    }else if (value <70){
        return "value is less than 70";
    }else if (value <60){
        return "value is less than 60";
    }else{
        return "value is less than 50";
    }
}
score(100);
// console.log(score(100))

function score1(value){
    if(value >90)  return "value is more than 90";
    else if (value <80) "value is less than 80";
    else if (value <70) "value is less than 70";
    else if (value <60) "value is less than 60";
    else  return "value is less than 50"
}  


function score2(value){
    if(value >60)  return "value is less than 60";
    else if (value <70) "value is less than 70";
    else if (value <80) "value is less than 80";
    else if (value <90) "value is less than 90";
    else  return "value is more than 90"
}

## Example 1 : Switch Case Without Break

// Example 1 :

let x = 2;

switch(x){
case 2:
console.log("Two");
case 3:
console.log("Three");
}

## Example 2 : Grade Calculator Using If-Else

// Example 2 :
function getGrade(score) {
    if (score >= 90 && score <= 100) {
        return "A+";
    } else if (score >= 80 && score <= 89) {
        return "A";
    } else if (score >= 70 && score <= 79) {
        return "B";
    } else if (score >= 60 && score <= 69) {
        return "C";
    } else if (score >= 33 && score <= 59) {
        return "D";
    } else if (score >= 0 && score <= 32) {
        return "Fail";
    } else {
        return "Invalid Marks";
    }
}

## Example 3 : Rock Paper Scissors Game

// Example 3 :

function rps(user,computer){
if(user ==="rock" && computer ==="scissor") return "user wins";
if(user ==="scissor" && computer ==="paper") return "user wins";
if(user ==="paper" && computer ==="rock") return "user wins";
if(user ==="scissor" && computer ==="rock") return "computer wins";
if(user ==="rock" && computer ==="paper") return "computer wins";
if(user ==="paper" && computer ==="scissor") return "computer wins";
return "it 's tie"
}

function rps2(user,computer){
    if (user === computer) return"it is a tie";
    
if(user ==="rock" && computer ==="scissor") return "user wins";
if(user ==="scissor" && computer ==="paper") return "user wins";
if(user ==="paper" && computer ==="rock") return "user wins";
return "computer wins"
}    


# JavaScript Loops

## Introduction to Loops

js
// loops -- repeating code blocks
// 1 1 1 1 1
// 1 2 3 4 5

## For Loop

// for loop
//why use for-loop ? when you know how many times you want to repeat a block
//print 1 to 10 --> console.log(1);
// kyathi javanu chhe ==> kaya sudhi javanu chhe ==> kevi rite javanu chhe

for (let i=1 ; i<=10 ; i++)
{
    console.log(i);
}

for (let i=10 ; i>=1 ; i--)
{
    console.log(i);
}

## While Loop

// while loop -- do while loop
//kaya thi javanu chhe --> kaya javanu chhe --> kevi rite javanu chhe
// while (ex.1 --> hello worls --> stop when condition false)
// start
// while(end){
// code
// change
// }

// let j =10;
// while (j <= 20){
//     console.log("j :" ,j);
//     j++;
// }

// let c =30;
// while (c  > 20){
//     console.log(c);
//     c++;
// }

// let d = 30;
// while (d >= 20) {
//     console.log(d);
//     d--;
// }

// let f= 50;
// while (f <= 60){
//     console.log(f);
//     f++;
// }

// let q = 60;
// while (q >= 50){
//     console.log(q);
//     q--;
// }


## Do While Loop

// do while loop
// do {} while (end);
// start
// do{
// code
// chnges
//}

let g = 10;
do{
    console.log("do while :",g);
    g++;
}while(g <= 20);

let h =10;
do{
    console.log("do while :",h);
    h--;
}while(h >= 1);


