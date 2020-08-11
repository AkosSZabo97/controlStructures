console.log('hello');

1.// display in the console the numbers from 1 to 20

// let i = 1;
// while (i <= 20) {
//     console.log(i);
//     i++;
// }

2.// display in the console the odd numbers from 1 to 20

// let oddNumbers = 1;
// while (oddNumbers <= 20){
//     if (oddNumbers % 2 == 0) {
//     }
//     else{
//         console.log(oddNumbers);
//     }
//     oddNumbers++
// }

3.// compute the sum of the elements of an array and display it in the console

// let arr = [1, 2, 3];
// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i]
// }
// console.log(sum);

4.// compute the maximum of the elements of an array and display it in the console

// let numbers = [3, 1, 8];

// Math.max(null, numbers);
// console.log(Math.max(...numbers));

5.// compute how many times a certain element appears in an array

var arr = [];

function getOccurrence(array, value) {
    var count = 0;
    array.forEach((v) => (v === value && count++));
    return count;
}

console.log(getOccurrence(arr)); 





