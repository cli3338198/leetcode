/**
 * @param {string} s
 * @return {boolean}
 */
var areNumbersAscending = function(s) {
    const nums = s.match(/\d+/g).map(Number)
    for (let i=0; i < nums.length-1; i++) {
        if (nums[i] >= nums[i+1]) return false
    }
    return true
};