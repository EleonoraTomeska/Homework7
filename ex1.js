//Exercise 1
//Solution Start Here
function sumOfArray(arr) {

    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number") {
            sum += arr[i];
        }
    }
    return sum;
}
//Ends Here

//Example Call 1
let sum1 = sumOfArray([2, 2, 2, 2, 2]);
console.log("The sum of this Array is " + sum1);

//Example Call 2
let sum2 = sumOfArray([32, 52, 26, 535, -535]);
console.log("The sum of this Array is " + sum2);

//Example Call 3
let sum3 = sumOfArray([-43, 52, 493, "sfs", 2]);
console.log("The sum of this Array is " + sum3);
