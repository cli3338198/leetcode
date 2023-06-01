/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    return Object.entries(nums.reduce((acc, n) => ({...acc, [n]: acc[n] + 1 || 1}), {})).filter(([,cnt]) => cnt === 1).reduce((acc, [n]) => acc + +n, 0)
};