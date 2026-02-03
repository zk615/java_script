// loops -- repeating code blocks
// 1 1 1 1 1
// 1 2 3 4 5

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