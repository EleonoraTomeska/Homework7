//Exercise 2
//Solution Start Here
function maxElement(arr) {

    let max = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
//Ends Here

//Example Call 1
let a = maxElement([2, 5, 320, 23, 45]);
console.log("Max number of this array is " + a);

//Example Call 2
let b = maxElement([5, 8, 45, 99, 14]);
console.log("Max number of this array is " + b);

//Example Call 3
let c = maxElement([56, 121, 45, 7, 0]);
console.log("Max number of this array is " + c);
