/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function(nums) {
    nums = new Set(nums)
    let res = -Infinity
    for (const n of nums) {
        if (nums.has(-n)) {
            res = Math.max(res, Math.abs(n))
        }
    }
    return res === -Infinity ? -1 : res
};

findMaxK = function(nums) {
    const set = new Set()
    let res = -Infinity
    for (const n of nums) {
        if (set.has(-n)) res = Math.max(res, Math.abs(n))
        set.add(n)
    }
    return res === -Infinity ? -1 : res
}