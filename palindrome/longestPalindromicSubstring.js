/* 
  Longest Palindrome
  For this challenge, we will look not only at the entire string provided, but also at the substrings within it. Return the longest palindromic substring. 
  Strings longer or shorter than complete words are OK.
  All the substrings of "abc" are:
  a, ab, abc, b, bc, c
*/

// const { isPalindrome } = require("./isPalindrome");
// const str1 = "what up, daddy-o?";
// const expected1 = "dad";

const str2 = "uh, not much";
const expected2 = "u";

const str3 = "Yikes! my favorite racecar erupted!";
const expected3 = "e racecar e";

const str4 = "a1001x20002y5677765z";
const expected4 = "5677765";

const str5 = "a1001x20002y567765z";
const expected5 = "567765";

/**
 * Finds the longest palindromic substring in the given string.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {string} The longest palindromic substring from the given string.
 */
//  what up, daddy-o?
//  ?o-yddad ,pu tahw
function longestPalindromicSubstring(str) {
    var currentSub = [0,0]
    var answer = ""

    for(var i = 1; i < str.length; i++) {
        var odd = checkSides(str, i-1, i+1);
        var even = checkSides(str, i-1, i);
        if(odd[1]-odd[0] > even[1]-even[0]){
            var longest = odd
        }
        else {
            var longest = even
        }
        if(currentSub[1]-currentSub[0] < longest[1]-longest[0]){
            currentSub = longest
        }
        else {}

    } 
    var left = currentSub[0]
    var right = currentSub[1]
    for(var i = left; i <= right; i++){
        answer += str[i]
    }
    return answer

}

function checkSides(str, leftI, rightI){
    while (leftI >= 0 && rightI < str.length) {
        if(str[leftI] !== str[rightI]) {
            break
        }
        else {
            leftI--
            rightI++
        }
    }
    return [leftI +1 , rightI -1]
}

console.log(longestPalindromicSubstring(str2))
console.log(longestPalindromicSubstring(str3))
console.log(longestPalindromicSubstring(str4))
console.log(longestPalindromicSubstring(str5))


// module.exports = { longestPalindromicSubstring: longestPal };

/*****************************************************************************/