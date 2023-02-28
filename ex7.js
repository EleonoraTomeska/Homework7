//Exercise 7
//Solution Start Here
function longestCountyName(arr) {
   
    let longestName = ' ';

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > longestName.length) {
            longestName = arr[i];
        }
    }
    return longestName;
}
//Ends Here

//Example Call 1
let a = longestCountyName(["Macedonia", "Italy", "France"]);
console.log("The longest County Name in this Array is " + a)

//Example Call 2
let b = longestCountyName(["Germany", "Austria", "Serbia"]);
console.log("The longest County Name in this Array is " + b)

//Example Call 3
let c = longestCountyName(["Denmark", "Netherlands", "Spain"]);
console.log("The longest County Name in this Array is " + c)
