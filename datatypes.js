// data types :
// two types of data types
// 1. primitive data types
// COPY -->> real value

  let u = 12;
  let b = u;
  u = u + 3;

// types : number , string , boolean , undefined , null , symbol , bigInt




// 2. non-primitive data types
// COPY -->> give reference of parent

let temp_a=[1,2,3];
let temp_s=temp_a; 
temp_s.pop();  //remove value
// types : array [] , object {} , function ()

// <--------primitive data types-------->
// types : number , string , boolean , undefined , null , symbol , bigInt
// String  :

//''-single quote
//""-double quotes
//``-backtick

let temp_d= "name";
temp_d='username';
temp_d = 'firstname ';


// Number :
let e=12;
e=45.67;

// Boolean :
let temp_f=true;
temp_f=false;

// Undefined :
// you don't give a value,by default value is undefined
let g;

// Null :
// you give a value
let h=null;

// Symbol :
let u1= Symbol('uid');
let u2= Symbol('uid');
// check u1===u2
let obj ={uid: 1,name :"test",email:"test@test.com"};
let u3= Symbol('uid');
obj[u3]= "001";

// BigInt :
// cheak range of number ,number .max_safe_integer

let number = 9007199254740991;
number = number +6;
let num2 = 9007199254740991n;
num2 +3n

//<----------non-primitive data types-------->
// types : array [] , object {} , function ()

// let temp_array=["name","age","phone_number"];
// let obj={name:"test",age:23,phone_number:"1234567890"}
// function name(params){}

//Dynamic typing :
let temp_p="name";
temp_p=314;
temp_p={};

//javascript  --> Typescript

//typesos quirks
//typeof 12
// check type of variable use --> ex. typeof NaN,typeof null , 1 +"1" , 1=="1", 1==="1"

// why typeof NaN --> number
// NaN is a failed  number operation that why that type is number

//ex. "hello" -  --> NaN

//type coeration 
//"5" + 1
//"5" -1

// Truthy vs falsy values
// ) false , "" , null , undefined ,document.all , NaN -->false 

//ex. !!0 -- check value is true and false
//ex. if (null){}, js convert it into false
//ex. if (-1){}, js convert it into true 
// all --> true



