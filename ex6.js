//Exercise 6
//Solution Start Here
function findLongestWord(strings) {
    
    let word = strings.split([" "]);
    let x = 0;
    let longestWord = " ";

    for (let i = 0; i < word.length; i++) {
        if (word[i].length > x) {
            x = word[i].length;
            longestWord = word[i];
        }
    } return { x, longestWord };
}
//Ends Here

//Example Call 1
let a = findLongestWord("The quick brown fox jumped over the lazy dog");
console.log(a);

//Example Call 2
let b = findLongestWord("Find the longest word in a String");
console.log(b);

//Example Call 3
let c = findLongestWord("Calculate Average of Array Elements");
console.log(c);

