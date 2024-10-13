// 1
// var number=6; 
// var k = 2 
// var i = 2 
// while (i <= number) {
//     k = k * i; 
//     i = i +1; 
// }
// console.log(k);

//2
// var res = 0; 
// do {
//     --res; 
//     console.log(res); 
//     res++; 
// } while (res>=0)

//3
// let value = ' ' * 10;
// console.log(value);

//4
// let value = 10 
// let salary= 0 
// While (value = 10){ 
//     salary = salary + 100 
//     console.log(salary);
// }

//5
// let count = 0;
// for (let m = 0; m<14; m++){
//     for(let n = 0; n<14; n++){
//         console.log('#');
//         count++;
//     }
//     if(m == 5){
//         break;
//     }
// }
// console.log(count);

//6
// let count = 0;
// for (x = 0; x<8; x++) {
//     for(y = 0; y<6; y++){
//         console.log('#');
//         count++;
//     }
//     if(x == 2) {
//         break;
//     } 
// }
// console.log(count);

//7
// let x = 4, y = 3, z = 1; 
// console.log((x >> (z - 1) && y << (z + 1)));
// if (x >> (z - 1) && y << (z + 1)) {
//     x = x + z 
// } else { 
//     y = x << z 
// }
// console.log(x - y + z);
// console.log(4>>(1-3));
// console.log(3<<(1+1));

//8
// let n=10;
// let i=5;
// let sum=0; 
// while (i < n) {
//     sum=sum + i;
//     console.log(sum); 
//     i++;
// }
// console.log(sum);

//9
// let p = 1, q = 1; 
// p = (p ^ 1) & (1) + (q ^ 1) & (1)
// console.log(p+q);

//10
// let n=35;
// let i = 0;
// while (n % 10 != 0){
//     n = n + 3;
//     i++;
// }
// n = n+i;
// console.log(n);

//11
// let x = 10, y = 8; 
// console.log((x | 1));
// console.log (y^1);
// console.log((x | 1) & (4));
// console.log((y ^ 1) & (1));
// console.log((x | 1) & (4) + (y ^ 1) & (1));

//12
// as written in the pseudo code this will go on indefinitely due to the decrement being only in the last else block
// let input = 25;
// let count =0;
// while (input > 0) {
//     if( input>0 && input<=12 ) {
//         console.log('*'); 
//         count=count+1;
//     } else if ( input>12 && input<=24 ) {
//         console.log('**');
//         count=count+2;
//     } else if ( input>24 && input<=30 ) {
//         console.log('***'); 
//         count=count+3;
//         // --input; 
//     } 
//     --input;
//     console.log(input);
// }
// console.log(count);