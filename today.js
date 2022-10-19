
// const ascend = (num)=>{
//     for (let j = 0; j < num.toString().length; j++) {
//        ld1 = num%10;
//        num = Math.floor(num/10);
//        ld2 = num%10;
//        ld = ld1-ld2;
//        if (ld<0) {
//             return false;
//        }   
//     }
//     return true;
// }

// var num = prompt('enter the number');
// var a = [];
// for(let i=1; i<=num; i++){
//     if(i%7==0) {
//         if (ascend(i)) {
//             a.push(i);
//         }
//      }

// }
// console.log(a);


// var arr=[];

// for(let i=1; i<=200; i++) {
//     if(i%7==0) {
//     rem1= i%10;
//     j=(i-rem1)/10;
//     rem2= j%10;
//     k=(j-rem2)/10;
//     rem3= k%10;
//     l=(k-rem3)/10;
//     if(rem1>rem2 && rem2>rem3 || rem1==rem2){
//         console.log(i);
//         arr.push(i);
//     }
// }
// }
// console.log(arr);


var i = 1;
var j = 10;
for (var i = 0; i <= 10; i++) {
    console.log(i + "*" + j + "=" + (i * j));
}





























