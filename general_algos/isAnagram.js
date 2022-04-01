/* 
  An anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
  typically using all the original letters exactly once.
  Is there a quick way to determine if they aren't an anagram before spending more time?
  Given two strings
  return whether or not they are anagrams
*/

const strA1 = "yes";
const strB1 = "eys";
const expected1 = true;

const strA2 = "yes";
const strB2 = "eYs";
const expected2 = true;

const strA3 = "no";
const strB3 = "noo";
const expected3 = false;

const strA4 = "silent";
const strB4 = "listen";
const expected4 = true;

/**
 * Determines whether s1 and s2 are anagrams of each other.
 * Anagrams have all the same letters but in different orders.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} s1
 * @param {string} s2
 * @returns {boolean} Whether s1 and s2 are anagrams.
 */
function isAnagram(s1, s2) {
  var answerKey = {}
  var answer
  s1 = s1.toLowerCase()
  s2 = s2.toLowerCase()
  if(s1.length != s2.length) {
    answer = false
    return answer
  }
  for (var i = 0; i < s1.length; i++) {
    if (answerKey[s1[i]]){
        answerKey[s1[i]] += 1
    }
    else{
      answerKey[s1[i]] = 1
    }
  }

  for (var i = 0; i < s2.length; i++ ) {
    if (answerKey[s2[i]]){
      answerKey[s2[i]] -= 1
      if(answerKey[s2[i]] === 0){
        answer = true
      }
      else(
        answer = false
      )

    }
    else{
      answer = false
      return answer
    }
  }
  return answer
}

console.log(isAnagram(strA1, strB1))
console.log(isAnagram(strA2, strB2))
console.log(isAnagram(strA3, strB3))
console.log(isAnagram(strA4, strB4))