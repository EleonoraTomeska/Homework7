//Exercise 4
//Solution Start Here
function evenNums(arr) {

    let even = [];

    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] % 2 === 0) {
            even.push(arr[i])
        }
    }
    if (even.length === 0) {
        console.log("There are not Even numbers")
    }
    return even;
}
//Ends Here

//Example Call 1
let a = evenNums([1, 2, 3, 4, 5, 6, 7, 9]);
console.log(a);

//Example Call 2
let b = evenNums([23, 43, 54, 65, 6]);
console.log(b);

//Example Call 3
let c = evenNums([1, 21, 3, 43, 5, 61, 7, 9]);
console.log(c);
