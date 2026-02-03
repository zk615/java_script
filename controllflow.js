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

// Example 1 :

let x = 2;

switch(x){
case 2:
console.log("Two");
case 3:
console.log("Three");
}

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