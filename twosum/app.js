/* Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice. */

/* example:

    Given nums = [2, 7, 11, 15], target = 9,

    Because nums[0] + nums[1] = 2 + 7 = 9,
    return [0, 1].
*/

/* i'll be doing two solutions, on is more of the 'naive' solution, and the other will be the better refactored version */

// our two sum function which will return all pairs in the array that sum up to our target
function twoSum(arr, target) {
    var sums = [];

    // check each element in the array
    for(var i = 0; i < arr.length; i++) {

       // check each other element in the array
       for(var j = 0; j < arr.length; j++) {

        // now, we're going to determine if the two elements add up to our target
        if (arr[i] + arr[j] === target) {
            sums.push([arr[i], arr[j]]);
        }
       }
    }
    // return all pairs of integers that add up to our target
    console.log(sums);
    return sums;
}

twoSum([1,2,3,4,5], 9);

