//Exercise 5
//Solution Start Here
function average(arr) {

    let x = 0;

    for (let item of arr) {
        x += item;
    }
    return x / arr.length
}
//Ends Here

//Example Call 1
let a = average([20, 5, 10, 24, 23, 43])
console.log("Average is " + a);

//Example Call 2
let b = average([6, 6, 6, 13, -10]);
console.log("Average is " + b);

//Example Call 3
let c = average([0]);
console.log("Average is " + c);

