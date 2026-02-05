// array -- hold multipal values at same time 
// [1,2,3,4,5]
// ["hello ", "a", "b" ,"D"]
// [2, "hello",34]

//create 
//define a variable = [multiple values]

let arr = [1,2,3,4];

// access
//postion  = [0 1 2 3]
//access 
//array_name[position]
// arr[3] arr[1]


//modify
// array_name[position]= new value
// arr[0]= 10


//Array methods : (varible_name.method_name)
//push , pop ,shift , unshift , splice ,slice ,reverse,sort

//push --> enter new value into array -- place it into last

arr.push(5);

//variable || function.method --> koi variable ke function in pachhal dot(.) kari ne lakho to te method kevai
// use case -- enter new producats into  existing producats list

let illegal = ["ganzo","bidi","chars","gutka"] 
illegal.pop("gutka")
//use case -- remove last producat you add into your list

// shift -- remove first value into array
arr.shift()
//use case -- remove old products automatic after sometimes

//unshift -- add value into array -- first
arr.unshift(10)
// use case -- add a value into top of that data you receive

// splice - remove value into array -- specific position and specific number of values
// into () - first index (position), how many value you want to remove 
let e = [10,20,30,40,50];
e.splice(3,2);
// use case -- select msg add remove multiple msg at on click

// slice - copy values from array -- specific position and specific number of values
// New variable = array_name.slice(start index, end index)

// start index -- include into copy
// end index -- not include into copy

let f = [100, 50, 25, 0];
let new_f = f.slice(1, 3);

// use case -- copy specific data and save it into new variable

console.log(f);      // original array
console.log(new_f);  // copied slice array

// splice VS slice
// splice -- remove value into main array or modify new array
// slice -- copy value from main array and create a new array that hold the value that you can into

// reverse -- reverse value of array
let g = [25, 30, 35, 40, 85];
// g.reverse();

// use case -- show latest update first into your frontend

console.log(g);        // original array
console.log(g.reverse()); // reversed array

// sort -- set into ascending order
let h = [50, 20, 80, 10, 40];
h.sort();

console.log(h); // default sort (as string)

// let h = [11, 62, 3, 4, 25];
// let sr = h.sort(function(a, b){
//     return a - b;   // ascending order
// });

// console.log(sr);

// let h = [11, 62, 3, 4, 25];
// let sr = h.sort(function(a, b){
//     return b - a;   // descending order
// });

// console.log(sr);

// ================= Q1 push() =================
let tasks = ['Wake up', 'Brush teeth'];
tasks.push('Buy milk');
console.log("Q1:", tasks);

// ================= Q2 pop() =================
let notifications = ['Email', 'Message', 'Reminder'];
notifications.pop();
console.log("Q2:", notifications);

// ================= Q3 shift() =================
let customers = ['Customer1', 'Customer2', 'Customer3'];
customers.shift();
console.log("Q3:", customers);

// ================= Q4 unshift() =================
let playlist = ['Song B', 'Song C'];
playlist.unshift('Song A');
console.log("Q4:", playlist);

// ================= Q5 splice() replace =================
let students = ['Mike', 'Alex', 'Emma', 'Sophia'];
students.splice(1, 1, 'John', 'Sara');
console.log("Q5:", students);

// ================= Q6 splice() remove =================
let menu = ['Burger', 'Pizza', 'Pasta', 'Salad'];
menu.splice(1, 2);
console.log("Q6:", menu);

// ================= Q7 slice() =================
let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
let weekend = days.slice(5, 7);
console.log("Q7:", weekend);

// ================= Q8 reverse() =================
let levels = ['Easy', 'Medium', 'Hard'];
levels.reverse();
console.log("Q8:", levels);

// ================= Q9 sort() default =================
let scores = [45, 12, 78, 34, 89];
scores.sort();
console.log("Q9:", scores);

// ================= Q10 numeric sort =================
let prices = [199, 49, 999, 299, 149];
prices.sort((a, b) => a - b);
console.log("Q10:", prices);

// ================= Q11 slice() vs splice() =================
let products = ['Laptop', 'Phone', 'Tablet', 'Monitor', 'Keyboard'];
let first3 = products.slice(0, 3);
console.log("Q11 new array:", first3);
console.log("Q11 original:", products);

// ================= Q12 splice() complex =================
let colors = ['Red', 'Green', 'Blue', 'Yellow'];
colors.splice(2, 1, 'Purple', 'Orange');
console.log("Q12:", colors);

// ================= Q13 reverse() + push() =================
let steps = ['Step 1', 'Step 2', 'Step 3'];
steps.reverse();
steps.push('Final Step');
console.log("Q13:", steps);

// ================= Q14 sort() strings ignore case =================
let names = ['alice', 'Bob', 'charlie', 'David'];
names.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
console.log("Q14:", names);

// ================= Q15 Combination Question =================
let movies = ['Avatar', 'Titanic', 'Gladiator'];
movies.push('Inception');
movies.shift();
movies.sort();
console.log("Q15:", movies);

// ================= Q16 splice() return value =================
let nums1 = [1, 2, 3, 4, 5];
let removed = nums1.splice(1, 2);
console.log("Q16 removed:", removed);
console.log("Q16 array:", nums1);

// ================= Q17 slice() immutability =================
let nums2 = [10, 20, 30, 40];
let result = nums2.slice(1, 3);
console.log("Q17 result:", result);
console.log("Q17 original:", nums2); // unchanged

// ================= Q19 reverse() mutation =================
let letters = ['a', 'b', 'c'];
let reversedLetters = letters.reverse();
console.log("Q19 reversed:", reversedLetters);
console.log("Q19 original:", letters); // changed (same reference)



// ================= Q21 splice() edge case =================
let arr1 = ['x', 'y', 'z'];
arr.splice(1, 0, 'new');
console.log("Q21:", arr1); // only adds, no deletion



// ================= Q23 slice() negative index =================
let values = [100, 200, 300, 400, 500];
let sliced = values.slice(-3, -1);
console.log("Q23:", sliced);

// ================= Q24 slice() vs splice() decision =================
// a) Update original array -> splice()
// b) Keep original unchanged -> slice()

// ================= Q25 Chained methods =================
let arr2 = [1, 2, 3];
arr2.push(arr2.shift());
console.log("Q25:", arr2);

//use case -- sort product price low to high

// use case -- sort product price low to high

let arr10 = [10, 2, 5, 20, 30];

// normal function method
// let sort_var = arr1.sort(function(a, b){
//     return a - b;
// });

// arrow function method (recommended)
let sort_var = arr10.sort((a, b) => a - b); 
// use when array gives numbers or numeric values

console.log(sort_var);

// string array
let arr11 = ['b', 'f', 'z', 'q', 'm', 'k'];
console.log(arr11.sort());

//for each loop 
// for Each -- Array  ni darek value mate looop chalse

let i =["water" ,"gas" ,"drink"]
 i.forEach(val =>
{
    let new_val =val + " bottle";
    console.log(new_val)
}
);
// map() method
// map yare j use karvu ke jare ek new array create karvo chhe
// first map create a blank array -- only for understanding

let data = [10, 20, 50, 40, 15];

// same like a for loop but map return a new array
let temp_data = data.map(val => {
    if (val > 20) {
        return val;
    }
});

console.log(temp_data);

let product = ["laptop", "pc", "phone", "daru", "drugs", "bear"];

let electronicItems = product.filter(item => 
    item === "laptop" || item === "pc" || item === "phone"
);

console.log(electronicItems);

const names1 = ['rahul', 'neha', 'amit'];

const formattedNames = names1.map(name =>
  name[0].toUpperCase() + name.slice(1)
);
console.log(formattedNames)

// filter
// filter tyare j use karvu ke jare ek new array create karvo chhe with condition
// in return true/false
// if true --> add into new array
// if else(false) --> not add into new array

let laptops_price = [15000, 20000, 30000, 65000, 99000, 45000];

let expensive_laptops = laptops_price.filter((price) => {
    if (price > 30000) return true;
});

console.log(expensive_laptops);

// reduce
// reduce tyare j use karvu ke jare ek single value calculate karvi hoy from array

let total_price = [15, 68, 45, 58, 52, 48];

let final_price = total_price.reduce((accumulator, val) => {
    return accumulator + val;
}, 0); // initial value of accumulator

// 0 + 10 => 10
// 10 + 10 => 20
// 20 + 10 => 30
// 30 + 10 => 40

// accumulator --> je value function ma return thase te accumulator ma store thase 
// --> accumulator name change kari sako cho

// val --> array ni darek value


// ================= Q1 =================
const prices1 = [50, 120, 300, 80, 200];
const totalCost = prices1
  .filter(p => p > 100)
  .map(p => p * 1.05)
  .reduce((s, p) => s + p, 0);
console.log("Q1 Total Cost =", totalCost);

// ================= Q2 =================
const minutes = [10, 25, 40, 15, 60];
const totalCalories = minutes
  .filter(m => m >= 20)
  .map(m => m * 4)
  .reduce((s, c) => s + c, 0);
console.log("Q2 Calories =", totalCalories);

// ================= Q3 =================
const marks = [35, 55, 80, 20, 45];
const totalPassed = marks
  .filter(m => m >= 40)
  .reduce((s, m) => s + m, 0);
console.log("Q3 Total Passed Marks =", totalPassed);

// ================= Q4 =================
const transactions = [500, -200, 1000, -300, 700];
const totalCredits = transactions
  .filter(t => t > 0)
  .reduce((s, t) => s + t, 0);
console.log("Q4 Total Credits =", totalCredits);

// ================= Q5 =================
const prices2 = [800, 1500, 3000, 600, 1200];
const totalBill = prices2
  .filter(p => p > 1000)
  .map(p => p * 0.85)
  .reduce((s, p) => s + p, 0);
console.log("Q5 Discounted Bill =", totalBill);

// ================= Q6 =================
const hours1 = [5, 7, 8, 6, 9];
const points = hours1
  .filter(h => h >= 7)
  .map(h => h * 10)
  .reduce((s, p) => s + p, 0);
console.log("Q6 Reward Points =", points);

// ================= Q7 =================
const distances = [3, 6, 10, 4, 8];
const totalDistance = distances
  .filter(d => d > 5)
  .map(d => d + 1)
  .reduce((s, d) => s + d, 0);
console.log("Q7 Total Distance =", totalDistance);

// ================= Q8 =================
const salaries = [18000, 25000, 30000, 15000];
const totalSalary = salaries
  .filter(s => s > 20000)
  .map(s => s + 2000)
  .reduce((s, v) => s + v, 0);
console.log("Q8 Total Salary =", totalSalary);

// ================= Q9 =================
const studyHours = [0.5, 1.5, 2, 0.75, 3];
const totalMinutes = studyHours
  .filter(h => h > 1)
  .map(h => h * 60)
  .reduce((s, m) => s + m, 0);
console.log("Q9 Total Study Minutes =", totalMinutes);

// ================= Q10 =================
const units = [80, 120, 200, 90, 150];
const bill = units
  .filter(u => u > 100)
  .map(u => u * 6)
  .reduce((s, u) => s + u, 0);
console.log("Q10 Electricity Bill =", bill);


// find()
// find tyare use karvu ke jare array mathi ek value condition based find karvi hoy
// find() return kare che array no element (not index)
// callback ma je condition true thase te first element return thase
// find() first match par stop thai jase (loop continue nathi thatu)

let product1 = ["Laptop", "Mobile", "Tablet", "Desktop", "Smart Watch"];

let find_product = product1.find((item) => {

  // console.log("can't find product"); // not working why??

  if (item === "Mobile") {
    return true;
  } 
  else if (item === "Tablet") {
    return true;
  } 
  else {
    return false;
  }
});

console.log(find_product);

// use case -- data mathi ek value find karvi hoy based on condition
// ex. product ma thi specific product find karvo hoy based on name

// find vs filter
// Real-life Scenario: Shopping Mall Security
// you are a security guard at a shopping mall
// check the list of visitors

let people = ["John", "Sara", "Mike", "Anna", "David", "Sara"];

// find --> you are looking for the first person named "Sara" in the list and stop searching
let firstSara = people.find(person => person === "Sara");
console.log(firstSara); // Sara

// filter --> you are looking for ALL people named "Sara"
let allSara = people.filter(person => person === "Sara");
console.log(allSara); // ["Sara", "Sara"]


// some()
// check kare che ke array ma koi pan ek item condition satisfy kare che ke nahi
// condition true aave tyare stop kare
// some() vs find()
// -> some() can't return value, its return true or false
// -> find() return value of array
// give ans in true and false

let marks1 = [10, 20, 35, 90];

let any = marks1.some((val) => {
    if (val > 85) return true;
    // if (val < 85) return "need improvement";
});

console.log(any);

// use case -> check if some product are out of stock in your cart

  // every
// check kare chhe ke array ma badha j items condition satisfy kare chhe ke nahi
// true  -> badha items condition match kare
// false -> ek pan fail thay to

let def = [20, 30, 90, 45];

let num = def.every(function (val) {
  return val < 40;
});

console.log(num); // false


// use case --> check all student is pass or not

// some(), find(), filter(), every()

let products1 = ["Tablet", "Mobile", "Laptop", "Mobile"];

// method --> condition --> output

// .some()   --> item === "Mobile" --> true
// .find()   --> item === "Mobile" --> "Mobile"
// .filter() --> item === "Mobile" --> ["Mobile", "Mobile"]


// Destructuring operator --> give value to variable
// (ex. we don't use every time arr[1], just save it into variable let [ , k] = arr)

let arr4 = [1, 2, 3, 4, 5];

// let j = arr4[0];
// let k = arr4[2];

let [j, , k] = arr4; // --> destructuring
// let [j, k] = arr;

console.log(k);

let ud = ["test", "test@gmail.com", "Male", "Surat"];

let [ name,email,gender,city] = ud;


// name, email, gender, city
 console.log("name:", name);
 console.log("email:", email);
 console.log("gender:", gender);
 console.log("nacitye:", city);

 // spread operator --> copy value from main array

let arr8 = [1, 2, 3, 4, 5, 6, 7];

// let arr4 = arr3;  // just give reference not copy
// if you change into arr4 that will be change arr3 too

let arr9 = [...arr8];   // copy array using spread

// ... --> rest --> into function
// ... --> spread --> into Array and Object

let temp_arr = [1, 2, 3];
let temp_arr2 = [4, 5, 6];

let mix_arr = [...temp_arr, ...temp_arr2];

console.log(mix_arr); // [1,2,3,4,5,6]
