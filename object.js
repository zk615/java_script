// Objects vs Array
// Objects -- when you want to show all data based on one entity
// (ek j entity mate all data jota hoy) (ex. one user data)
// Array -- when you want to show entity (ex. all users)
// let user_data = [{name: "abc", email: "test@gmail.com"}, {name:
// "def"}, {name: "abc"}, {name: "ABC"}];


// create
// variable = {}
// key : value --> key-value structure

let user = {
    name: "Test",
    email: "test@gmail.com",
    roll_no: 70,
};

// access (dot vs square notation)
// variable_name.key_name;

user.name;
user.email;

// user.first-name;
// variable_name['key'];
// user['name']
// user[name]
// let demo = "name"
// user[demo] --> convert into name (demo = 'name') --> output: abc

// Nesting and Deep Access
const user1 = {
name: "test",
address: {
city: "Surat",
pin: 395009,
locations: {
lat: 24.2,
lng: 77.4,
},   
},
email: "test@gmail.com",
// -- nested Object
};
user1.address.locations.lat; // --> Deep Access
// user1.address.location.lng;

// object destructuring:
let {lat ,lag }= user1.address.locations;
let {lat: abc_lat }= user1.address.locations;
//destructure and rename variable name

let demo ={
    f_name: "demo",
    l_name: "user",
    age: 45,
    email: "demo@user.com",
}

//looping
// for (variable name in object_name){}
for (const key in demo){
    console.log(key);
    //obj.key --> not working
    console.log(demo[key]);
    //console.log(key,":",demo[key]) -- log whole object
}

//copying objects: spred, object.assign,deep clone
//spred

let user_data = {...demo};
//let user_data={gender:"male",...demo}//add key-value and copy object
// Use case: State update
// const user = {
//   name: "Amit",
//   age: 30
// };

// const updatedUser = {
//   ...user,
//   age: 31
// };

// console.log(updatedUser);

// Object.assing -- copy and add keys-value
let user_data_assign = Object.assign({}, demo); // - nothing will be add just copy
let user_data_assign1 = Object.assign({phone_number: 7894567894},
demo); // - add and copy
// Use case: Default settings + user settings merge
// const defaultSettings = {
//   theme: "light",
//   language: "en"
// };

//const userSetting = {
// theme : "dark"
//};

//const finalSetting = object.assign({},defaultSetting,userSetting);

//console.log(finalSetting);

//object.assing vs spred
//object.assing() -- method -- ES5 old version ,less used
//spred -- oprater -- state updated , most used in react application , clean code


// JavaScript .find() and .some() – All Examples in One Page

// 1. .find() – First even number
const seats1 = [3, 5, 8, 10, 7];
const firstEvenSeat = seats1.find(seat => seat % 2 === 0);
console.log(firstEvenSeat);
 // ans: 8

// 2. .some() – Any even number?
const seats2 = [3, 5, 7, 9];
const hasEvenSeat = seats2.some(seat => seat % 2 === 0);
console.log(hasEvenSeat); 
// ans: false

// 3. .find() – First passing mark
const marks1 = [25, 35, 40, 60];
const firstPass = marks1.find(mark => mark >= 40);
console.log(firstPass);
 // ans: 40

// 4. .some() – Any failed student?
const marks2 = [60, 70, 55, 30];
const hasFail = marks2.some(mark => mark < 40);
console.log(hasFail); 
// ans: true

// 5. .find() – First affordable product
const prices1 = [1500, 1200, 800, 2000];
const affordable = prices1.find(price => price <= 1000);
console.log(affordable);
 // ans: 800

// 6. .some() – Any discount item?
const prices2 = [500, 800, 1200, 300];
const hasDiscountItem = prices2.some(price => price < 500);
console.log(hasDiscountItem);
 //  ans: true

// 7. .find() – First long word
const words = ['hi', 'hello', 'javascript', 'ok'];
const longWord = words.find(word => word.length > 5);
console.log(longWord);
 //  ans: "javascript"

// 8. .some() – Any empty input?
const inputs = ['name', 'email', '', 'password'];
const hasEmpty = inputs.some(input => input === '');
console.log(hasEmpty);
 // ans: true

// 9. .find() – First high transaction
const transactions = [200, 500, 1200, 3000, 400];
const highTransaction = transactions.find(amount => amount > 1000);
console.log(highTransaction); 
//  ans: 1200

// 10. .some() – System alert check
const temperatures = [30, 32, 35, 42, 36];
const isOverheated = temperatures.some(temp => temp > 40);
console.log(isOverheated);
 //  ans: true




 // Q1. Shopping List – Price Increase
const prices = [100, 200, 300];
const increasedPrices = prices.map(p => p + 20);
// Ans: [120, 220, 320]


// Q2. Exam Marks – Passing Students
const marks = [35, 60, 45, 20, 80];
const passingMarks = marks.filter(m => m >= 40);
// Ans: [60, 45, 80]


// Q3. Attendance Check
const attendance = [80, 90, 70, 85];
const lowAttendance = attendance.some(a => a < 75);
// Ans: true


// Q4. Find First Discounted Item
const prices3 = [1200, 800, 450, 600];
const discountedItem = prices3.find(p => p < 500);
// Ans: 450


// Q5. Salary Calculation
const salaries1 = [18000, 25000, 30000, 15000];
const totalPayout = salaries1
  .filter(s => s > 20000)
  .map(s => s + 2000)
  .reduce((total, s) => total + s, 0);
// Ans: 59000


// Q6. Product Quality Check
const ratings = [4, 5, 4, 4];
const allGood = ratings.every(r => r >= 4);
// Ans: true


// Q7. Daily Expenses – Total
const expenses1 = [200, 150, 300, 100];
const totalExpenses = expenses1.reduce((sum, e) => sum + e, 0);
// Ans: 750


// Q8. Scores Update
const scores1 = [45, 60, 80, 30, 70];
const updatedScores = scores1
  .filter(s => s > 50)
  .map(s => s + 10);
// Ans: [70, 90, 80]


// Q9. Array Destructuring – Top Scores
const scores2 = [95, 90, 85, 80];
const [first, second] = scores2;
// Ans: first = 95, second = 90


// Q10. Shopping Cart Merge
const cart1 = [200, 400];
const cart2 = [300, 500];
const mergedCart = [...cart1, ...cart2];
// Ans: [200, 400, 300, 500]


// Q11. Expense Validation
const expenses2 = [200, 450, 800, 1200];
const validExpenses = expenses2.every(e => e < 1000);
// Ans: false


// Q12. Transaction Analysis
const transactionss = [500, -200, 1200, 300];
const firstLarge = transactionss.find(t => t > 1000);
const hasNegative = transactionss.some(t => t < 0);
// Ans: firstLarge = 1200, hasNegative = true


// Q13. Student Result Summary
const marks3 = [30, 45, 60, 25, 80];
const passed = marks3.filter(m => m >= 40);
const average = passed.reduce((sum, m) => sum + m, 0) / passed.length;
// Ans: 61.67 (approx)


// Q14. Temperature Alert System
const temps = [22, 30, 45, 28];
const highTemp = temps.some(t => t > 40);
const safeTemp = temps.every(t => t > 20);
// Ans: highTemp = true, safeTemp = true


// Q15. Spread + Reduce Combo
const a = [1, 2, 3];
const b = [4, 5, 6];
const totalSum = [...a, ...b].reduce((sum, n) => sum + n, 0);
// Ans: 21


// Q16. Bonus Eligibility
const scores3 = [60, 70, 80, 90];
const avg = scores3.reduce((sum, s) => sum + s, 0) / scores3.length;
const eligible = scores3.every(s => s > avg);
// Ans: false


// Q17. First Valid Input
const input = ['', '', 'name', 'email'];
const firstValid = input.find(i => i !== '');
// Ans: "name"


// Q18. Salary Spread
const salaries2 = [20000, 30000, 40000];
const newSalaries = [...salaries2, 50000];
// Ans: [20000, 30000, 40000, 50000]


// Q19. Performance Check
const performance = [55, 65, 45, 80];
const below50 = performance.some(p => p < 50);
const above60 = performance.every(p => p > 60);
// Ans: below50 = true, above60 = false


// Q20. Interview Finisher
const x = [1, 2, 3];
const y = [4, 5, 6];
const finalResult = [...x, ...y]
  .filter(n => n % 2 === 0)
  .map(n => n * n)
  .reduce((sum, n) => sum + n, 0);
// Ans: 56




// Q1. Increase all prices by 10
const prices10 = [100, 200, 300];
const q1 = prices10.map(p => p + 10);
// Ans: [110, 210, 310]


// Q2. Filter even numbers
const numbers2 = [1, 2, 3, 4, 5, 6];
const q2 = numbers2.filter(n => n % 2 === 0);
// Ans: [2, 4, 6]


// Q3. Check if any number is negative
const nums3 = [10, -5, 20];
const q3 = nums3.some(n => n < 0);
// Ans: true


// Q4. Check if all marks are passing (>=40)
const marks4 = [45, 60, 70];
const q4 = marks4.every(m => m >= 40);
// Ans: true


// Q5. Find first number greater than 50
const scores5 = [20, 40, 55, 70];
const q5 = scores5.find(s => s > 50);
// Ans: 55


// Q6. Calculate total bill amount
const bills6 = [120, 300, 80];
const q6 = bills6.reduce((sum, b) => sum + b, 0);
// Ans: 500


// Q7. Convert hours to minutes
const hours7 = [1, 2, 1.5];
const q7 = hours7.map(h => h * 60);
// Ans: [60, 120, 90]


// Q8. Find first empty string
const inputs8 = ['name', '', 'email'];
const q8 = inputs8.find(i => i === '');
// Ans: ""


// Q9. Check if any value is zero
const values9 = [5, 0, 8];
const q9 = values9.some(v => v === 0);
// Ans: true


// Q10. Double all numbers
const nums10 = [2, 4, 6];
const q10 = nums10.map(n => n * 2);
// Ans: [4, 8, 12]


// Q11. Extract first two values using destructuring
const data11 = [10, 20, 30];
const [first11, second11] = data11;
// Ans: first = 10, second = 20


// Q12. Merge two arrays using spread
const a12 = [1, 2];
const b12 = [3, 4];
const q12 = [...a12, ...b12];
// Ans: [1, 2, 3, 4]


// Q13. Check if all temperatures are below 50
const temps13 = [30, 40, 45];
const q13 = temps13.every(t => t < 50);
// Ans: true


// Q14. Find first even number
const nums14 = [1, 3, 4, 6];
const q14 = nums14.find(n => n % 2 === 0);
// Ans: 4


// Q15. Calculate total steps walked
const steps15 = [2000, 3000, 1500];
const q15 = steps15.reduce((s, v) => s + v, 0);
// Ans: 6500


// Q16. Filter salaries above 25,000
const salaries16 = [18000, 26000, 30000];
const q16 = salaries16.filter(s => s > 25000);
// Ans: [26000, 30000]


// Q17. Add bonus of 500 to filtered salaries (>20000)
const salaries17 = [15000, 22000, 28000];
const q17 = salaries17.filter(s => s > 20000).map(s => s + 500);
// Ans: [22500, 28500]


// Q18. Total expense after filtering (>100)
const expenses18 = [50, 200, 150, 80];
const q18 = expenses18.filter(e => e > 100).reduce((a, b) => a + b, 0);
// Ans: 350


// Q19. Check if any score is below class average
const scores19 = [60, 70, 80];
const avg19 = scores19.reduce((a, b) => a + b, 0) / scores19.length;
const q19 = scores19.some(s => s < avg19);
// Ans: true


// Q20. Find first number divisible by 7
const nums20 = [10, 14, 21];
const q20 = nums20.find(n => n % 7 === 0);
// Ans: 14


// Q21. Convert prices to discounted prices (10%)
const prices21 = [500, 1000, 1500];
const q21 = prices21.map(p => p * 0.9);
// Ans: [450, 900, 1350]


// Q22. Total calories burned (>30 min only)
const minutes22 = [20, 45, 60];
const q22 = minutes22.filter(m => m > 30).reduce((a, b) => a + b, 0);
// Ans: 105


// Q23. Check if all inputs are filled
const inputs23 = ['name', 'email', 'password'];
const q23 = inputs23.every(i => i !== '');
// Ans: true


// Q24. Merge 3 arrays using spread
const a24 = [1];
const b24 = [2];
const c24 = [3];
const q24 = [...a24, ...b24, ...c24];
// Ans: [1, 2, 3]


// Q25. Find first failing mark
const marks25 = [55, 48, 35, 70];
const q25 = marks25.find(m => m < 40);
// Ans: 35


// Q26. Calculate average marks of passed students
const marks26 = [30, 45, 60, 80];
const passed26 = marks26.filter(m => m >= 40);
const q26 = passed26.reduce((a, b) => a + b, 0) / passed26.length;
// Ans: 61.67 (approx)


// Q27. Square only odd numbers
const nums27 = [1, 2, 3, 4, 5];
const q27 = nums27.filter(n => n % 2 !== 0).map(n => n * n);
// Ans: [1, 9, 25]


// Q28. Check if any value exceeds 1000
const values28 = [200, 500, 1500];
const q28 = values28.some(v => v > 1000);
// Ans: true


// Q29. Extract first and rest values using destructuring
const nums29 = [10, 20, 30, 40];
const [first29, ...rest29] = nums29;
// Ans: first = 10, rest = [20, 30, 40]


// Q30. Total reward points (>=8 hours only)
const hours30 = [6, 8, 9, 7];
const q30 = hours30.filter(h => h >= 8).reduce((a, b) => a + b, 0);
// Ans: 17

// Q31. Convert names to uppercase
const names31 = ['rahul', 'neha', 'amit'];
const q31 = names31.map(n => n.toUpperCase());
// Ans: ["RAHUL", "NEHA", "AMIT"]


// Q32. Filter ages eligible to vote (>=18)
const ages32 = [12, 18, 25, 16];
const q32 = ages32.filter(a => a >= 18);
// Ans: [18, 25]


// Q33. Check if all numbers are positive
const nums33 = [5, 10, 15];
const q33 = nums33.every(n => n > 0);
// Ans: true


// Q34. Find first string longer than 5 characters
const words34 = ['hi', 'hello', 'welcome', 'bye'];
const q34 = words34.find(w => w.length > 5);
// Ans: "welcome"


// Q35. Calculate total cart value
const cart35 = [499, 299, 199];
const q35 = cart35.reduce((sum, v) => sum + v, 0);
// Ans: 997


// Q36. Add GST (18%) to prices
const prices36 = [100, 200];
const q36 = prices36.map(p => p * 1.18);
// Ans: [118, 236]


// Q37. Filter strings starting with "a"
const fruits37 = ['apple', 'banana', 'avocado', 'mango'];
const q37 = fruits37.filter(f => f.startsWith('a'));
// Ans: ["apple", "avocado"]


// Q38. Check if any student failed (<40)
const marks38 = [55, 60, 35, 70];
const q38 = marks38.some(m => m < 40);
// Ans: true


// Q39. Double even numbers only
const nums39 = [1, 2, 3, 4];
const q39 = nums39.filter(n => n % 2 === 0).map(n => n * 2);
// Ans: [4, 8]


// Q40. Find first price above 1000
const prices40 = [500, 1500, 2000];
const q40 = prices40.find(p => p > 1000);
// Ans: 1500


// Q41. Count total characters in all strings
const words41 = ['hi', 'hello', 'bye'];
const q41 = words41.reduce((sum, w) => sum + w.length, 0);
// Ans: 10


// Q42. Convert Celsius to Fahrenheit
const celsius42 = [0, 25, 30];
const q42 = celsius42.map(c => (c * 9/5) + 32);
// Ans: [32, 77, 86]


// Q43. Filter numbers divisible by 3
const nums43 = [3, 4, 6, 9, 10];
const q43 = nums43.filter(n => n % 3 === 0);
// Ans: [3, 6, 9]


// Q44. Check if array contains empty value
const inputs44 = ['user', '', 'email'];
const q44 = inputs44.some(i => i === '');
// Ans: true


// Q45. Find maximum number
const nums45 = [10, 50, 30];
const q45 = nums45.reduce((max, n) => n > max ? n : max);
// Ans: 50


// Q46. Add 5 bonus marks to all students
const marks46 = [60, 70, 80];
const q46 = marks46.map(m => m + 5);
// Ans: [65, 75, 85]


// Q47. Filter passed students and count them
const marks47 = [35, 45, 55, 25];
const q47 = marks47.filter(m => m >= 40).length;
// Ans: 2


// Q48. Merge arrays and sort ascending
const a48 = [3, 1];
const b48 = [4, 2];
const q48 = [...a48, ...b48].sort((x, y) => x - y);
// Ans: [1, 2, 3, 4]


// Q49. Find first name ending with 'a'
const names49 = ['Ravi', 'Neha', 'Amit', 'Sita'];
const q49 = names49.find(n => n.endsWith('a'));
// Ans: "Neha"


// Q50. Calculate average salary
const salaries50 = [20000, 30000, 40000];
const q50 = salaries50.reduce((a, b) => a + b, 0) / salaries50.length;
// Ans: 30000



