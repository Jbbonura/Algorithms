/* 
  Given a SORTED array of integers, dedupe the array 
  Because array elements are already in order, all duplicate values will be grouped together.
  Ok to use a new array
  Bonus: do it in O(n) time (no nested loops, new array ok)
  Bonus: Do it in-place (no new array)
  Bonus: Do it in-place in O(n) time and no new array
  Bonus: Keep it O(n) time even if it is not sorted
*/

const nums1 = [1, 1, 1, 1];
const expected1 = [1];

const nums2 = [1, 1, 2, 2, 3, 3];
const expected2 = [1, 2, 3];

const nums3 = [1, 1, 2, 3, 3, 4];
const expected3 = [1, 2, 3, 4];

const nums4 = [1, 1];
const expected4 = [1];

/**
 * De-dupes the given sorted array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {Array<number>} The given array deduped.
 */
function dedupeSorted(nums) {
    var valuePlaceHolder = 0
    var indexPlaceHolder = 0
    var spliceCounter = 0
    // onst nums2 = [1, 1, 2, 2, 3, 3];
    for(var i = 0; i < nums.length; i++){
        if(i===0){
            valuePlaceHolder = nums[i]
            indexPlaceHolder = i
        }
        else {
            if(nums[i] === valuePlaceHolder){
                spliceCounter++
            }
            else {
                nums.splice(indexPlaceHolder, spliceCounter)
                indexPlaceHolder = i
                valuePlaceHolder = nums[i]
                spliceCounter = 0
            }
            if(i === nums.length - 1) {
                nums.splice(indexPlaceHolder, spliceCounter)
            }

        }
        
    }
    return nums
}

console.log(dedupeSorted(nums1))
console.log(dedupeSorted(nums2))
console.log(dedupeSorted(nums3))
console.log(dedupeSorted(nums4))