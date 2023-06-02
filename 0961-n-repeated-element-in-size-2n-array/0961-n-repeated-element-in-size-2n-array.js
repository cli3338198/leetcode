/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function(nums) {
    const map = {}
    for (const n of nums) {
        map[n] = map[n] + 1 || 1
    }
    for (const k in map) {
        if (map[k] === nums.length / 2) return k
    }
};

repeatedNTimes = function(nums) {
    for (let i=0; i < nums.length; i++) {
        if (nums.indexOf(nums[i]) !== i) return nums[i]
    }
}