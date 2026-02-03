// pure vs impure function
// pure function --> function  je same input par same output aapse ane koi bahar na state ne modify na kare (pure function --> je function bahar na state ne modify na kare)

let a =10;
function abcd_pure(){
    console.log("hello");
}

// impure function --> funciton je same input par differnt optput aapse athva bahar na state ne modify kare (impure function -->  je function bahar na state ne modify )

function abcd_impure(){
    a++;
    console.log(a);
}


//closer function
//function je function na andar biju function define kare ane te function andar na variable ne access kare te closer function kaheva ma ave
function outer(){
    let count =0;
    function inner(){
        count++;
        console.log(count);
    }
    return inner;
}

let fn = outer();
fn();

//LEXICAL SCOPE
//je function apde define kariye te function na bahar na variable ne access kari sake te lexical scope kaheva ma ave    

// Lexical Scope Example

function outer1() {
    let outer_var = "outer function variable";

    function inner1() {
        let inner_var = "inner function variable";
        console.log(outer_var); // can access outer variable

        function most_inner() {
            console.log(inner_var); // access inner function variable
            console.log(outer_var); // access outer function variable

            let most_inner_var = "most inner function variable";

            function abc() {
                console.log(most_inner_var); // access most_inner variable
                console.log(inner_var);      // access inner variable
                console.log(outer_var);      // access outer variable
            }

            abc(); // call abc function
        }

        most_inner(); // call most_inner function
    }

    inner1(); // call inner1 function
}

outer1(); // call outer1 function


// IIFE - Immediately Invoked Function Expression
(function () {
    console.log("This is IIFE Function");
})();

// Hoisting in function
abcde();   // Function call before declaration

function abcde() {
    console.log("This is hoisting function");
}



// Hoisting in function
abcde();

function abcde() {
    console.log("This is hoisting function");
}

// hoistedFunction1();
// let hoistedFunction1 = function () {
//     console.log("Hoisted Function Expression called");
// };

// hoistedFunction2();
// let hoistedFunction2 = () => {
//     console.log("Hoisted Arrow Function called");
// };


// ========================================
// Example 1
// Difference between Function Declaration and Function Expression
// ========================================

/*
ANS:
Function Declaration → Hoisted
Function Expression → Not Hoisted

WHY:
JavaScript stores function declarations in memory before execution,
but function expressions are stored like variables.
*/


// ========================================
// Example 2
// ========================================

greet(); // Calling before function declaration

function greet() {
    console.log("Hello!");
}

/*
ANS: Hello!
WHY: Function declaration is hoisted, so it can be called before definition.
*/


// ========================================
// Example 3
// Convert Normal Function to Arrow Function
// ========================================

function add(a, b) {
    return a + b;
}

// Arrow Function
const addArrow = (a, b) => a + b;

console.log(addArrow(10, 20));

/*
ANS: 30
WHY: Arrow function is shorter syntax for normal functions.
*/


// ========================================
// Example 4
// Parameters vs Arguments
// ========================================

function welcome(name) {   // name = Parameter
    console.log("Welcome " + name);
}

welcome("user"); // "user" = Argument

/*
ANS:
Parameter = name
Argument = "user"

WHY:
Parameter is variable in function definition.
Argument is value passed during function call.
*/


// ========================================
// Example 5
// Parameters and Arguments Count
// ========================================

function temp(a, b, c) {
    console.log(a, b, c);
}

temp(1, 2);

/*
ANS:
Parameters = 3 (a, b, c)
Arguments = 2 (1, 2)
Output: 1 2 undefined

WHY:
c has no value, so JavaScript assigns undefined.
*/


// ========================================
// Example 6
// Default Parameter
// ========================================

function temp_user(name = "Guest") {
    console.log("Hello " + name);
}

temp_user();

/*
ANS: Hello Guest
WHY: Default parameter "Guest" is used when no argument is passed.
*/


// ========================================
// Example 7
// Rest Operator
// ========================================

function number(...numbers) {
    console.log(numbers);
}

number(1, 2, 3, 4, 5);

/*
ANS: [1, 2, 3, 4, 5]
WHY:
"..." is Rest Operator, it collects multiple arguments into an array.
Used to accept unlimited arguments.
*/


// ========================================
// Example 8
// Rest Parameters Total Calculation
// ========================================

// Correct Code
function calculateTotal(...scores) {
    let total = 0;
    for (let i = 0; i < scores.length; i++) {  // < not <=
        total += scores[i];
    }
    return total;
}

// Using forEach
function calculateTotal2(...scores) {
    let total = 0;
    scores.forEach(val => total += val);
    return total;
}

console.log(calculateTotal(10, 20, 30, 40, 50));
console.log(calculateTotal2(10, 20, 30, 40, 50));

/*
ANS: 150
WHY:
<= causes undefined index error, so we use < scores.length.
Rest parameter stores values in array.
*/


// ========================================
// Example 9
// Early Return
// ========================================

function checkAge(age) {
    if (age < 18) {
        return "Too Young";   // Early return
    }
    return "Access Granted";
}

console.log(checkAge(15));
console.log(checkAge(25));

/*
ANS:
15 → Too Young
25 → Access Granted

WHY:
Early return stops function execution immediately.
Makes code cleaner and faster.
*/


// ========================================
// Example 10
// Return Value
// ========================================

function f() {
    return;
}

console.log(f());

/*
ANS: undefined
WHY:
Return without value returns undefined by default in JavaScript.
*/

// =============================================
// Example 11
// What does "functions are first-class citizens" mean?
// =============================================

// Answer:
// Functions in JavaScript are treated like variables.
// They can be stored in variables, passed as arguments, returned from functions.

// Why:
// Because JS allows functions to behave like any other value.


// =============================================
// Example 12
// Assign a function to a variable and call it
// =============================================

let d = function () {
    console.log("Hello");
};

d(); // Output: Hello

// Why:
// Function is stored in variable 'a', so we call it like a normal variable function.


// =============================================
// Example 13
// Pass a function into another function and execute it
// =============================================

function abcd(val) {
    val(); // calling the passed function
}

abcd(function () {
    console.log("Hello");
});

// Why:
// Functions can be passed as arguments (callback function).


// =============================================
// Example 14
// What is Higher Order Function?
// =============================================

// Answer:
// A function that takes another function as argument OR returns a function.

// Example:
function higherOrder(fn) {
    fn();
}

higherOrder(function () {
    console.log("I am callback");
});

// Why:
// Because it works with other functions.


// =============================================
// Example 16
// Pure or Impure Function?
// =============================================

let total = 5;

function num(num) {
    total += num; // modifies external variable
}

num(3);

// Answer: IMPURE FUNCTION
// Why:
// It changes external variable (side effect) and depends on outside data.


// =============================================
// Example 17
// Convert Example 16 into Pure Function
// =============================================

function pureNum(total, num) {
    return total + num; // no external variable used
}

console.log(pureNum(5, 3)); // Output: 8

// Why:
// Pure function does not modify outside data and always returns same output for same input.


// =============================================
// Example 18
// What is Closure? When is it created?
// =============================================

// Closure Example:
function outer() {
    let x = 10;

    return function inner() {
        console.log(x);
    };
}

const test = outer();
test(); // Output: 10

// Answer:
// Closure is when inner function remembers variables of outer function.

// When created:
// When a function is defined inside another function and returned or used later.


// =============================================
// Example 19
// What's logged?
// =============================================

function outerCounter() {
    let count = 0;

    return function () {
        count++;
        console.log(count);
    };
}

const counter = outerCounter();
counter(); // Output: 1
counter(); // Output: 2

// Why:
// count is remembered due to closure (not reset).


// =============================================
// Example 20
// Convert function into IIFE
// =============================================

// Normal function:
// function init(){
//     console.log("Initialized");
// }

// IIFE:
(function () {
    console.log("Initialized");
})();

// Why:
// IIFE runs immediately without calling separately.


// =============================================
// Example 21
// Use of IIFE (Real-world example)
// =============================================

let fun = (function () {
    let score = 0; // private variable

    return {
        getScore: function () {
            console.log(score);
        },
        setScore: function (val) {
            score = val;
        }
    };
})();

fun.getScore(); // 0
fun.setScore(10);
fun.getScore(); // 10

// Answer:
// IIFE is used to create private variables and avoid global pollution.
// Real-world use: Modules, Libraries, Data privacy.


// =============================================
// Example 22
// What will be the output and why?
// =============================================

temp_var(); //  Error

var temp_var = function () {
    console.log("Hello");
};

// Answer:
// TypeError: temp_var is not a function

// Why:
// Function expression is NOT hoisted completely.
// Only variable is hoisted as undefined.


// =============================================
// Example 23
// What will be the output and why?
// =============================================

temp_var2(); // Hello

function temp_var2() {
    console.log("Hello");
}

// Answer:
// Output: Hello

// Why:
// Function declaration is fully hoisted with its body.
