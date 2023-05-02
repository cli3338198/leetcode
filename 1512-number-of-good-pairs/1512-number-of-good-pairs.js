/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    let res = 0
    for (let i=0; i < nums.length; i++) {
        for (let j=i+1; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                res++
            }
        }
    }
    return res
};

numIdenticalPairs = function(nums) {
    const map = {}
    for (const num of nums) {
        map[num] = map[num] + 1 || 1
    }
    let res = 0
    for (const num in map) {
        res += Math.floor((map[num] * (map[num]-1)) / 2)
    }
    return res
}